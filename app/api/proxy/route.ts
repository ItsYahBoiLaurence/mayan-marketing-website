import { NextResponse } from 'next/server';

// Google Apps Script URL - this needs to be the DEPLOYED WEB APP URL, not the script editor URL
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

// Simple memory-based rate limiting (resets on server restart)
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds
const RATE_LIMIT_MAX = 10; // Max 10 requests per minute
const ipRequests: Record<string, { count: number; timestamp: number }> = {};

// Cache for GET requests (resets on server restart)
const responseCache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL

// Check rate limit for an IP
function checkRateLimit(ip: string): boolean {
    const now = Date.now();

    // Clean up old entries
    Object.keys(ipRequests).forEach(key => {
        if (now - ipRequests[key].timestamp > RATE_LIMIT_WINDOW) {
            delete ipRequests[key];
        }
    });

    // Initialize or update request count
    if (!ipRequests[ip]) {
        ipRequests[ip] = { count: 1, timestamp: now };
        return true;
    }

    // If within rate limit window, increment count
    if (now - ipRequests[ip].timestamp < RATE_LIMIT_WINDOW) {
        ipRequests[ip].count++;

        // Check if rate limit exceeded
        if (ipRequests[ip].count > RATE_LIMIT_MAX) {
            return false;
        }
    } else {
        // Reset if outside window
        ipRequests[ip] = { count: 1, timestamp: now };
    }

    return true;
}

// Generate cache key for GET requests
function generateCacheKey(method: string, params: any): string {
    if (method !== 'GET') return '';
    return `${method}-${JSON.stringify(params)}`;
}

// Generic fetch function with optimizations
async function fetchFromGoogleScript(method: string, params: any, ip: string) {
    // Rate limiting
    if (!checkRateLimit(ip)) {
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
        );
    }

    // Check cache for GET requests
    const cacheKey = generateCacheKey(method, params);
    if (method === 'GET' && cacheKey && responseCache[cacheKey]) {
        const cachedData = responseCache[cacheKey];
        if (Date.now() - cachedData.timestamp < CACHE_TTL) {
            return NextResponse.json(cachedData.data);
        } else {
            // Cache expired
            delete responseCache[cacheKey];
        }
    }

    try {
        // For GET requests, append params to URL
        let url = GOOGLE_SCRIPT_URL;
        if (method === 'GET' && params) {
            const queryParams = new URLSearchParams();
            Object.entries(params).forEach(([key, value]) => {
                queryParams.append(key, String(value));
            });
            url = `${url}?${queryParams.toString()}`;
        }


        // Setup request with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            mode: 'cors',
            redirect: 'follow',
            signal: controller.signal,
        };

        // For POST requests, add body
        if (method === 'POST' && params) {
            options.body = JSON.stringify(params);
        }

        // Perform the request
        const response = await fetch(url as string, options);
        clearTimeout(timeoutId); // Clear timeout on successful response

        // Process response
        const responseText = await response.text();
        // Handle non-OK responses
        if (!response.ok) {
            console.error(`API error: ${response.status}`);
            let errorMessage = `Request failed with status ${response.status}`;

            // Try to extract error info from HTML response
            if (responseText.includes('<title>')) {
                const titleMatch = responseText.match(/<title>(.*?)<\/title>/);
                if (titleMatch && titleMatch[1]) {
                    errorMessage = titleMatch[1];
                }
            }

            return NextResponse.json(
                { error: errorMessage },
                { status: response.status }
            );
        }

        // Try to parse response as JSON
        try {
            // Handle empty responses gracefully
            if (!responseText || responseText.trim() === '') {

                return NextResponse.json({
                    success: true,
                    message: 'Request processed successfully'
                });
            }

            const data = JSON.parse(responseText);

            // Cache successful GET responses
            if (method === 'GET' && cacheKey) {
                responseCache[cacheKey] = {
                    data,
                    timestamp: Date.now()
                };
            }

            return NextResponse.json(data);
        } catch (jsonError) {
            console.error('Invalid JSON response:', jsonError);

            // If the response is HTTP 200 OK but not JSON, assume success
            if (response.ok) {
                return NextResponse.json({
                    success: true,
                    message: 'Request processed successfully',
                    responseInfo: {
                        type: response.headers.get('content-type') || 'unknown',
                        length: responseText.length,
                        preview: responseText.substring(0, 100)
                    }
                });
            }

            return NextResponse.json(
                {
                    error: 'Invalid response format',
                    message: 'The server did not return valid JSON'
                },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error('Request error:', error);

        // Handle timeout specifically
        if (error.name === 'AbortError') {
            return NextResponse.json(
                { error: 'Request timed out' },
                { status: 504 }
            );
        }

        return NextResponse.json(
            {
                error: 'Request failed',
                message: error.message || 'Unknown error'
            },
            { status: 500 }
        );
    }
}

// GET method handler
export async function GET(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const { searchParams } = new URL(request.url);
    const params: Record<string, string> = {};

    searchParams.forEach((value, key) => {
        params[key] = value;
    });

    return fetchFromGoogleScript('GET', params, ip);
}

// POST method handler
export async function POST(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    try {
        const body = await request.json();
        return fetchFromGoogleScript('POST', body, ip);
    } catch (error) {
        console.error('Invalid request body:', error);
        return NextResponse.json(
            { error: 'Invalid request body' },
            { status: 400 }
        );
    }
}
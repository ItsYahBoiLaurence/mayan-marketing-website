import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server';


const FREE_EMAIL_DOMAINS = new Set([
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com',
    'icloud.com', 'protonmail.com', 'zoho.com', 'mail.com', 'yandex.com', 'gmx.com'
])

const isCorporateEmail = (email: string) => {
    const domain = email.split('@')[1]?.toLocaleLowerCase()
    return !domain || !FREE_EMAIL_DOMAINS.has(domain)
}


export async function POST(request: NextRequest) {

    const { first_name, email, last_name, company, job_title, documentTitle, phone } = await request.json()

    if (!isCorporateEmail(email)) {
        return NextResponse.json({ error: 'Please use a corporate email', code: 'invalid-email' }, { status: 400 })
    }

    const spreadsheet_url: string = process.env.NEXT_SPREADSHEET_URL!

    const date = new Date().toLocaleDateString();

    try {
        await fetch(spreadsheet_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                company,
                job_title,
                documentTitle,
                date,
                phone
            })
        })
        return NextResponse.json({ message: 'Save Successfully' }, { status: 200 })
    } catch (e) {
        return NextResponse.json({ error: 'Error Saving...' }, { status: 500 })
    }
}
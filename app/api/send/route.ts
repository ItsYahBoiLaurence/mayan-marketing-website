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

    const email_format = (title: string, first_name: string) => {
        return `<!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f9f9f9;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            border: 1px solid #dddddd;
                            border-radius: 8px;
                            overflow: hidden;
                        }
                        .header {
                            background-color: rgba(0, 27, 89, 1);
                            text-align: center;
                            padding: 20px;
                        }
                        .header img {
                            max-width: 150px;
                            height: auto;
                        }
                        .content {
                            padding: 20px;
                            color: #333333;
                            line-height: 1.5;
                        }
                        .footer {
                            background-color: #f1f1f1;
                            text-align: center;
                            padding: 10px;
                            font-size: 12px;
                            color: #666666;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <img src="https://www.mayan.com.ph/favicon.png" alt="Mayan Solutions Inc." />
                        </div>
                        <div class="content">
                            <p style="color: #040237;">
                                Hi <strong>${first_name}</strong>
                            </p>
                            <p>
                                Thank you for your interest in our exclusive case study, <strong>${title}</strong>!. <br /> As
                                requested, we've attached the full case study in PDF format for you. Simply click the attachment
                                below
                                to download and explore the full content.</p>

                            <p>
                                <strong>Need help?</strong><br />
                                If you encounter any issues with the download or have any question, feel free to contact us.
                            </p>

                            <p>Best regards, <br />
                                Mayan Solutions Inc. Team</p>

                            <a href="www.mayan.com.ph">www.mayan.com.ph</a>
                        </div>
                        <div class="footer">
                            &copy; 2025 Mayan Solutions. All rights reserved <br />
                        </div>
                    </div>
                </body>
            </html>`
    }

    const spreadsheet_url: string = process.env.NEXT_SPREADSHEET_URL!

    const date = new Date().toLocaleDateString();

    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_HOST,
        port: Number(process.env.NEXT_PORT),
        auth: {
            user: process.env.NEXT_USER,
            pass: process.env.NEXT_PASS
        }
    })

    try {
        await transporter.sendMail({
            from: '"no-reply"<testing@mayan.com.ph>',
            to: email,
            subject: `${documentTitle} PDF`,
            html: email_format(documentTitle, first_name),
            attachments: [
                {
                    filename: "PDF",
                    path: `https://cdn.sanity.io/files/99px5jz6/production/3a14684a680c339ca27da27c65d6bf0c7d031a6b.pdf/dl`
                }
            ]
        })

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
                date,
                documentTitle,
                phone
            })
        })

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (e) {
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
    }

}
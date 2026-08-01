import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || '';
const resend = new Resend(resendApiKey);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString() || 'Anonymous Visitor';
    const email = formData.get('email')?.toString() || 'No email provided';
    const message = formData.get('message')?.toString() || 'No message content';

    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f4f4f5;
            margin: 0;
            padding: 40px 20px;
            color: #18181b;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #e4e4e7;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          }
          .header {
            background-color: #000000;
            color: #ffffff;
            padding: 32px 32px 24px 32px;
          }
          .header h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 900;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .header p {
            margin: 6px 0 0 0;
            color: #a1a1aa;
            font-size: 12px;
            font-family: monospace;
          }
          .content {
            padding: 32px;
          }
          .field-label {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            color: #71717a;
            margin-bottom: 6px;
            letter-spacing: 0.05em;
            font-family: monospace;
          }
          .field-value {
            font-size: 15px;
            color: #09090b;
            font-weight: 600;
            background: #f4f4f5;
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid #e4e4e7;
            margin-bottom: 24px;
          }
          .message-box {
            font-size: 14px;
            line-height: 1.6;
            color: #18181b;
            background: #fafafa;
            padding: 20px;
            border-radius: 12px;
            border: 1px solid #e4e4e7;
            border-left: 4px solid #000000;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #fafafa;
            border-top: 1px solid #e4e4e7;
            padding: 16px 32px;
            font-size: 11px;
            color: #71717a;
            font-family: monospace;
            display: flex;
            justify-content: space-between;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>LHANDEL VICENTE PAMISA</h1>
            <p>NEW CLIENT INQUIRY // PORTFOLIO CONTACT FORM</p>
          </div>

          <div class="content">
            <div class="field-label">CLIENT NAME</div>
            <div class="field-value">${name}</div>

            <div class="field-label">REPLY-TO EMAIL</div>
            <div class="field-value">${email}</div>

            <div class="field-label">MESSAGE PAYLOAD</div>
            <div class="message-box">${message}</div>
          </div>

          <div class="footer">
            <span>STATUS: DELIVERED</span>
            <span>DATE: ${new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </body>
    </html>
    `;

    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'lhandelpamisa0@gmail.com',
      replyTo: email,
      subject: `📬 Portfolio Inquiry from ${name}`,
      html: htmlContent,
    });

    if (response.error) {
      return new Response(JSON.stringify({ success: false, error: response.error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, id: response.data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

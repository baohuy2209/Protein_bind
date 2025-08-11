import { VerifyEmailTemplate } from "@/components/EmailTemplates/verify-email";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const { firstName, email, verificationUrl } = await request.json();
  try {
    console.log(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "NguyenBaoHuy <onboarding@resend.dev>",
      to: [email],
      subject: "Verify your email",
      react: VerifyEmailTemplate({ firstName, verificationUrl }),
    });
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

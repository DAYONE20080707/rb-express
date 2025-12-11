import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 環境変数を使用
const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_TO, // 管理者宛のメール
} = process.env;

export async function POST(req: Request) {
  try {
    const {
      desiredProject,
      name,
      age,
      phone,
      email,
      address,
      lineId = "",
      firstInterviewDate,
      secondInterviewDate = "",
      thirdInterviewDate = "",
      hasIllness,
      illnessName = "",
      cohabitants,
      drivingExperience,
      idealWorkStyle = "",
      hasFreightExperience,
      freightExperienceDetail = "",
      salaryRange = "",
      startDate,
      vehicle,
      message,
    } = await req.json();

    // 必須項目のバリデーション
    const requiredFields = [
      desiredProject,
      name,
      age,
      phone,
      email,
      address,
      firstInterviewDate,
      hasIllness,
      cohabitants,
      drivingExperience,
      hasFreightExperience,
      startDate,
      vehicle,
      message,
    ];
    if (requiredFields.some((field) => !field || field.trim() === "")) {
      return NextResponse.json(
        { error: "すべての必須項目を入力してください。" },
        { status: 400 }
      );
    }

    // Nodemailer の設定
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_PORT === "465", // ポート465の場合はtrue
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // メール本文を組み立てる
    let emailBody = "";

    emailBody += `【希望案件内容】\n${desiredProject}\n\n`;
    emailBody += `【お名前】\n${name}\n\n`;
    emailBody += `【ご年齢】\n${age}歳\n\n`;
    emailBody += `【お電話番号】\n${phone}\n\n`;
    emailBody += `【メールアドレス】\n${email}\n\n`;
    emailBody += `【ご住所 (市郡区まで)】\n${address}\n\n`;

    if (lineId) emailBody += `【LINE ID】\n${lineId}\n\n`;

    emailBody += `【面談第一希望日時】\n${firstInterviewDate}\n\n`;
    if (secondInterviewDate)
      emailBody += `【面談第二希望日時】\n${secondInterviewDate}\n\n`;
    if (thirdInterviewDate)
      emailBody += `【面談第三希望日時】\n${thirdInterviewDate}\n\n`;

    emailBody += `【持病や通院はありますか?】\n${hasIllness}\n\n`;
    if (illnessName) emailBody += `【(ありの方)病名】\n${illnessName}\n\n`;

    emailBody += `【同居されている方】\n${cohabitants}\n\n`;
    emailBody += `【運転歴】\n${drivingExperience}\n\n`;

    if (idealWorkStyle)
      emailBody += `【理想の働き方を教えてください】\n${idealWorkStyle}\n\n`;

    emailBody += `【軽貨物運送業のご経験はありますか?】\n${hasFreightExperience}\n\n`;
    if (freightExperienceDetail)
      emailBody += `【「あり」の方へ: どのようなご経験がありますか?】\n${freightExperienceDetail}\n\n`;

    if (salaryRange)
      emailBody += `【最低必要金額と目標金額を教えてください】\n${salaryRange}\n\n`;

    emailBody += `【稼働開始可能日】\n${startDate}\n\n`;
    emailBody += `【車両について】\n${vehicle}\n\n`;
    emailBody += `【メッセージ】\n${message}\n`;

    // ① 管理者宛のメール
    const adminMailOptions = {
      from: `"お問い合わせフォーム" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "【お問い合わせ】新しい応募が届きました",
      text: emailBody,
      replyTo: email,
    };

    // ② ユーザー宛の確認メール
    let userEmailBody = `${name} 様\n\nお問い合わせありがとうございます。\n以下の内容で受け付けました。\n\n------------------\n`;
    userEmailBody += emailBody;
    userEmailBody +=
      "\n------------------\n\n担当者が確認後、ご連絡いたします。\n\nよろしくお願いいたします。";

    const userMailOptions = {
      from: `"株式会社アールビー" <${EMAIL_USER}>`,
      to: email,
      subject: "【自動返信】お問い合わせありがとうございます。",
      text: userEmailBody,
      replyTo: EMAIL_USER,
    };

    // 2通のメールを並列送信
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: "メールが正常に送信されました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました。" },
      { status: 500 }
    );
  }
}

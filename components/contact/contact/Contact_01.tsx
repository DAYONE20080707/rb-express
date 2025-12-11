"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/ui/button/SubmitButton";

interface FormField {
  label: string;
  name: string;
 type: "text" | "email" | "tel" | "textarea" | "select" | "date" | "datetime-local";
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
  conditional?: {
    field: string;
    value: string;
  };
}

const formFields: FormField[] = [
  {
    label: "希望案件内容",
    name: "desiredProject",
    type: "text",
    required: true,
  },
  {
    label: "お名前",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "ご年齢",
    name: "age",
    type: "select",
    options: Array.from({ length: 48 }, (_, i) => ({
      value: String(18 + i),
      label: String(18 + i),
    })),
    required: true,
  },
  {
    label: "お電話番号",
    name: "phone",
    type: "tel",
    placeholder: "半角数字・ハイフン無しでご入力ください",
    required: true,
  },
  {
    label: "メールアドレス",
    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "ご住所 (市郡区まで)",
    name: "address",
    type: "text",
    required: true,
  },
  {
    label: "LINE ID",
    name: "lineId",
    type: "text",
    required: false,
  },
  {
    label: "面談第一希望日時",
    name: "firstInterviewDate",
    type: "datetime-local",
    required: true,
  },
  {
    label: "面談第二希望日時",
    name: "secondInterviewDate",
    type: "date",
    required: false,
  },
  {
    label: "面談第三希望日時",
    name: "thirdInterviewDate",
    type: "date",
    required: false,
  },
  {
    label: "持病や通院はありますか?",
    name: "hasIllness",
    type: "select",
    options: [
      { value: "", label: "選択してください" },
      { value: "なし", label: "なし" },
      { value: "あり", label: "あり" },
    ],
    required: true,
  },
  {
    label: "(ありの方)病名：",
    name: "illnessName",
    type: "text",
    required: false,
  },
  {
    label: "同居されている方",
    name: "cohabitants",
    type: "text",
    required: true,
  },
  {
    label: "運転歴",
    name: "drivingExperience",
    type: "select",
    options: [
      { value: "未選択", label: "選択してください" },
      { value: "1年未満", label: "1年未満" },
      { value: "1~2年", label: "1~2年" },
      { value: "2~3年", label: "2~3年" },
      { value: "3~4年", label: "3~4年" },
      { value: "4~5年", label: "4~5年" },
      { value: "5~6年", label: "5~6年" },
      { value: "6~7年", label: "6~7年" },
      { value: "7~8年", label: "7~8年" },
      { value: "8~9年", label: "8~9年" },
      { value: "10年以上", label: "10年以上" },
    ],
    required: true,
  },
  {
    label: "理想の働き方を教えてください",
    name: "idealWorkStyle",
    type: "select",
    options: [
      { value: "未選択", label: "選択してください" },
      {
        value: "ドライバーから起業までを目標にしている",
        label: "ドライバーから起業までを目標にしている",
      },
      {
        value: "マイペースに淡々と仕事をしたい",
        label: "マイペースに淡々と仕事をしたい",
      },
      {
        value: "とにかく頑張って稼ぎたい ",
        label: "とにかく頑張って稼ぎたい ",
      },
      {
        value: "掛け持ちで副業として仕事したい",
        label: "掛け持ちで副業として仕事したい",
      },
      {
        value: "面談、または稼働しながら見つけていきたい",
        label: "面談、または稼働しながら見つけていきたい",
      },
    ],
    required: false,
  },
  {
    label: "軽貨物運送業のご経験はありますか?",
    name: "hasFreightExperience",
    type: "select",
    options: [
      { value: "未選択", label: "選択してください" },
      { value: "なし", label: "なし" },
      { value: "あり", label: "あり" },
    ],
    required: true,
  },
  {
    label: "「あり」の方へ: どのようなご経験がありますか?",
    name: "freightExperienceDetail",
    type: "select",
    options: [
      { value: "", label: "選択してください" },
      { value: "ヤマト、佐川", label: "ヤマト、佐川" },
      { value: "Amazon", label: "Amazon" },
      { value: "アスクル等の企業配送", label: "アスクル等の企業配送" },
      { value: "ルート案件", label: "ルート案件" },
      { value: "スポット便のみ", label: "スポット便のみ" },
      { value: "その他", label: "その他" },
    ],
    required: false,
  },
  {
    label: "最低必要金額と目標金額を教えてください",
    name: "salaryRange",
    type: "select",
    options: [
      { value: "未選択", label: "選択してください" },
      { value: "10~20万", label: "10~20万" },
      { value: "20~30万", label: "20~30万" },
      { value: "30~40万", label: "30~40万" },
      { value: "40万以上", label: "40万以上" },
    ],
    required: false,
  },
  {
    label: "稼働開始可能日",
    name: "startDate",
    type: "date",
    required: true,
  },

  {
    label: "車両について",
    name: "vehicle",
    type: "select",
    options: [
      { value: "未選択", label: "選択してください" },
      { value: "専用車両を持ち込みで可能", label: "専用車両を持ち込みで可能" },
      { value: "レンタルを希望", label: "レンタルを希望" },
    ],
    required: true,
  },
  {
    label: "メッセージ",
    name: "message",
    type: "textarea",
    required: true,
  },
];

const initialFormData: Record<string, string> = {};
formFields.forEach((field) => {
  initialFormData[field.name] = "";
});

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // エラーメッセージをクリア
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    formFields.forEach((field) => {
      // 条件付きフィールドのチェック
      if (
        field.conditional &&
        formData[field.conditional.field] !== field.conditional.value
      ) {
        return;
      }

      if (field.required) {
        const value = formData[field.name];
        if (!value || value.trim() === "") {
          newErrors[field.name] = `${field.label}を入力してください。`;
        }
      }
    });

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage("");

    // クライアント側バリデーション
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setResponseMessage("入力に誤りがあります。エラーメッセージをご確認ください。");
      // 最初のエラーフィールドにスクロール
      setTimeout(() => {
        const firstErrorField = Object.keys(validationErrors)[0];
        if (firstErrorField) {
          const element = document.getElementsByName(firstErrorField)[0];
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/contact/thanks");
      } else {
        const data = await res.json();
        setResponseMessage(data.error || "送信に失敗しました。");
      }
    } catch (error) {
      setResponseMessage("エラーが発生しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="w-full md:max-w-[1000px] h-auto mx-auto px-5 md:px-5 pt-16 pb-20 md:pt-[120px] md:pb-[134px]">
      <div className="w-full">
        <section>
          <p className="text-lg ![line-height:250%] tracking-[0.03em] whitespace-pre-line">
            必須項目を全てご入力の上「送信ボタン」を押して、フォームを送信してください。
            <br />
            ※フォームマーケティング・セールスはお断りしております。
          </p>
        </section>

        <section className="text-sm md:text-lg mt-10 md:mt-20 mx-auto pt-6 border-t border-borderLight">
          {responseMessage && <p className="text-red-500">{responseMessage}</p>}
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => {
              // 条件付き表示のチェック
              if (
                field.conditional &&
                formData[field.conditional.field] !== field.conditional.value
              ) {
                return null;
              }

              return (
                <div
                  key={field.name}
                  className={`mb-6 md:mb-6 w-full ${
                    field.name === "hasIllness" || field.name === "message"
                      ? ""
                      : "pb-6 border-b border-borderLight"
                  }`}
                >
                  <label className="text-sm md:text-lg block mb-1 md:mb-2 ![line-height:200%]">
                    {field.label}{" "}
                    {field.required && (
                      <span className="text-[#D93D69]">(必須)</span>
                    )}
                  </label>

                  {field.type === "select" && field.options && (
                    <>
                      <select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        className={`w-full px-6 py-4 bg-bgLight [&>*]:bg-bgLight appearance-none bg-[length:16px_10px] md:bg-[length:22px_10px] bg-[right_1.5rem_center] bg-no-repeat text-base md:text-lg ![line-height:250%] ${
                          errors[field.name] ? "border-2 border-red-500" : ""
                        }`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L8 9L15 1' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        }}
                      >
                        {field.options.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            disabled={option.value === "" && field.required}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors[field.name]}
                        </p>
                      )}
                    </>
                  )}

                  {field.type !== "select" && (
                    <>
                      {field.type === "textarea" ? (
                        <>
                          <textarea
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            rows={8}
                            className={`w-full px-6 py-4 bg-bgLight placeholder:text-[#828282] placeholder:text-base md:placeholder:text-lg ![line-height:250%] ${
                              errors[field.name]
                                ? "border-2 border-red-500"
                                : ""
                            }`}
                          />
                          {errors[field.name] && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors[field.name]}
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className={`w-full px-6 py-4 bg-bgLight placeholder:text-[#828282] placeholder:text-base md:placeholder:text-lg ![line-height:250%] ${
                              errors[field.name]
                                ? "border-2 border-red-500"
                                : ""
                            }`}
                          />
                          {errors[field.name] && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors[field.name]}
                            </p>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              );
            })}
            <div className="flex justify-center mt-10 md:mt-20">
              <SubmitButton loading={loading} />
            </div>
            <p className="text-center ![line-height:250%] text-xs md:text-sm mt-6 md:mt-16 tracking-[0.05em] whitespace-pre-line">
              上記ボタンを押すことで、利用規約および、当社のサービス等に関する情報を提供する目的で、
              <br />
              株式会社アールビーが送信された個人情報を保管・処理することに同意したものとみなされます。
              <br />
              お客様はこれらの情報提供をいつでも停止できます。
              <br />
              個人情報の開示や削除依頼等のお問い合わせ先、およびお客様の個人情報を尊重して保護するための弊社取り組みについては、
              <br className="hidden md:block" />
              プライバシーポリシーをご覧ください。
            </p>
          </form>
        </section>
      </div>
    </article>
  );
};

export default ContactForm;

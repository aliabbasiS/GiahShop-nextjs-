"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ for client-side navigation
import NextImage from "../../../../Components/imagemaker";
import authimage from "../../../../public/auth/login.png";
import mobile from "../../../../public/auth/mobiletik.svg";
import pass from "../../../../public/auth/key.svg";
import visibility from "../../../../public/auth/visibility_off.svg";
import toast, { Toaster } from "react-hot-toast";

interface FormProps {
  number: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<FormProps>({
    number: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<FormProps>>({});

  const validateForm = (form: FormProps) => {
    const newErrors: Partial<FormProps> = {};

    if (!/^09\d{9}$/.test(form.number)) {
      newErrors.number = "شماره موبایل باید با 09 شروع شود و 11 رقم باشد";
    }

    if (form.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل 6 کاراکتر باشد";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm(form)) {
      toast.success("✅ ورود با موفقیت انجام شد"); // 🎉 success toast
      console.log("✅ فرم معتبر است:", form);

      // ⏳ redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard"); // change this to where you want to redirect
      }, 1500);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full h-screen absolute flex justify-center items-center lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 z-10 w-full lg:h-2/3 h-full top-[-20px] relative rounded-4xl flex bg-white justify-center">
          <div className="flex flex-col gap-4 grow lg:justify-center my-6 lg:px-20 px-6">
            <h2 className="font-bold flex justify-center my-7 lg:justify-start text-2xl">
              ورود به حساب
            </h2>

            {/* Mobile Input */}
            <div className="flex flex-col w-full">
              <div className="w-full h-[56px] flex gap-2 border border-gray-200 px-2 rounded-xl">
                <NextImage url={mobile} width={22} height={22} />
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={form.number}
                  onChange={(e) => setForm({ ...form, number: e.target.value })}
                  className="w-full text-right outline-none font-bold"
                  placeholder="شماره موبایل"
                  maxLength={11}
                />
              </div>
              {errors.number && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.number}
                </span>
              )}
            </div>

            {/* Password Input */}
            <div className="flex flex-col w-full">
              <div className="w-full h-[56px] flex gap-2 border border-gray-200 px-2 rounded-xl items-center">
                <NextImage url={pass} width={22} height={22} />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none font-bold"
                  placeholder="رمز عبور"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="cursor-pointer hover:shadow-md"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <NextImage url={visibility} width={22} height={22} />
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full h-[56px] mt-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition"
            >
              ورود
            </button>

            {/* Footer Link */}
            <span className="text-center mt-4">
              حساب کاربری ندارید؟{" "}
              <button
                onClick={() => router.push("/auth")}
                className="text-green-700 hover:underline hover:cursor-pointer"
              >
                ثبت نام کنید
              </button>
            </span>
          </div>
        </div>

        {/* Right Side Image */}
        <NextImage
          url={authimage}
          classes="lg:w-1/2 object-cover grow w-full lg:h-full relative h-1/3"
        />
      </div>
    </>
  );
};

export default Login;

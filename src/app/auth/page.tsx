"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerUser} from '../auth/services/auth'
import NextImage from "../../../Components/imagemaker";
import authimage from "../../../public/auth/login.png";
import mobile from "../../../public/auth/mobiletik.svg";
import email from "../../../public/auth/email.svg";
import pass from "../../../public/auth/key.svg";
import visibility from "../../../public/auth/visibility_off.svg";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
interface FormProps {
  number: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AuthPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<FormProps>({
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormProps>>({});

  const validateForm = (form: FormProps) => {
    const newErrors: Partial<FormProps> = {};

    if (!/^09\d{9}$/.test(form.number)) {
      newErrors.number = "شماره موبایل باید با 09 شروع شود و 11 رقم باشد";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "ایمیل معتبر نیست";
    }

    if (form.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل 6 کاراکتر باشد";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "رمز عبور و تکرار آن مطابقت ندارند";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };




const registerMutation = useMutation({
  mutationFn: registerUser,
});







const handleSubmit = () => {
  if (!validateForm(form)) {
    toast.error("❌ لطفاً خطاهای فرم را اصلاح کنید");
    return;
  }

  registerMutation.mutate(
    {
      number: form.number,
      email: form.email,
      password: form.password,
    },
    {
      onSuccess: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");

        Cookies.set("user", JSON.stringify(user), {
          expires: 7,
          path: "/",
        });

        Cookies.set("isLoggedIn", "true", {
          expires: 7,
          path: "/",
        });

        toast.success("ثبت نام با موفقیت انجام شد");

        router.push("/main");
      },

      onError: (error: Error) => {
        toast.error(error.message);
      },
    }
  );
};
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full h-screen absolute flex justify-center items-center lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 z-10 w-full lg:h-2/3 h-full top-[-20px] relative rounded-4xl flex flex-col bg-white justify-center">
          <div className="flex flex-col gap-4 grow my-6 lg:px-20 px-6">
            <h2 className="font-bold flex justify-center my-7 lg:justify-start text-2xl ">
              ثبت نام
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

            {/* Email Input */}
            <div className="flex flex-col w-full">
              <div className="w-full h-[56px] flex gap-2 border border-gray-200 px-2 rounded-xl">
                <NextImage url={email} width={22} height={22} />
                <input
                  type="email"
                  className="w-full outline-none font-bold"
                  placeholder="ایمیل"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email}
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

            {/* Confirm Password Input */}
            <div className="flex flex-col w-full">
              <div className="w-full h-[56px] flex gap-2 border border-gray-200 px-2 rounded-xl items-center">
                <NextImage url={pass} width={22} height={22} />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none font-bold"
                  placeholder="تکرار رمز عبور"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
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
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full h-[56px] mt-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition"
            >
              ثبت نام
            </button>

            {/* Footer Link */}
            <span className="text-center mt-4">
              حساب کاربری دارید؟{" "}
              <button
                onClick={() => router.push("/auth/login")}
                className="text-green-700 hover:underline hover:cursor-pointer"
              >
                ورود کنید
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

export default AuthPage;

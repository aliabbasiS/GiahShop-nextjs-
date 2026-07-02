"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "../../../../Components/imagemaker";
import authimage from "../../../../public/auth/login.png";
import mobile from "../../../../public/auth/mobiletik.svg";
import pass from "../../../../public/auth/key.svg";
import visibility from "../../../../public/auth/visibility_off.svg";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { getUsers } from "../services/auth";

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

  // ✅ validation
  const validateForm = (form: FormProps) => {
    const newErrors: Partial<FormProps> = {};

    if (!/^09\d{9}$/.test(form.number)) {
      newErrors.number =
        "شماره موبایل باید با 09 شروع شود و 11 رقم باشد";
    }

    if (form.password.length < 6) {
      newErrors.password =
        "رمز عبور باید حداقل 6 کاراکتر باشد";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ TanStack Query mutation (FIXED - داخل component)
  const loginMutation = useMutation({
    mutationFn: getUsers,
  });

  // ✅ submit
  const handleSubmit = () => {
    if (!validateForm(form)) return;

    loginMutation.mutate(undefined, {
      onSuccess: (users) => {
        const user = users.find(
          (u: any) =>
            u.number === form.number &&
            u.password === form.password
        );

        if (!user) {
          toast.error("❌ شماره یا رمز اشتباه است");
          return;
        }

        const loggedInUser = {
          number: user.number,
          email: user.email,
          loginTime: new Date().toISOString(),
        };

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
          "currentUser",
          JSON.stringify(loggedInUser)
        );

        Cookies.set("isLoggedIn", "true", {
          expires: 7,
          path: "/",
        });

        Cookies.set(
          "currentUser",
          JSON.stringify(loggedInUser),
          {
            expires: 7,
            path: "/",
          }
        );

        toast.success("✅ ورود موفق");

        router.push("/main");
      },

      onError: () => {
        toast.error("❌ خطا در دریافت کاربران");
      },
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full h-screen absolute flex justify-center items-center lg:flex-row flex-col-reverse">

        {/* LEFT SIDE FORM */}
        <div className="lg:w-1/2 z-10 w-full lg:h-2/3 h-full top-[-20px] relative rounded-4xl flex bg-white justify-center">

          <div className="flex flex-col gap-4 grow lg:justify-center my-6 lg:px-20 px-6">

            <h2 className="font-bold flex justify-center my-7 lg:justify-start text-2xl">
              ورود به حساب
            </h2>

            {/* MOBILE */}
            <div className="flex flex-col w-full">
              <div className="w-full h-[56px] flex gap-2 border border-gray-200 px-2 rounded-xl">
                <NextImage url={mobile} width={22} height={22} />
                <input
                  type="tel"
                  value={form.number}
                  onChange={(e) =>
                    setForm({ ...form, number: e.target.value })
                  }
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

            {/* PASSWORD */}
            <div className="flex flex-col w-full">
              <div className="w-full h-[56px] flex gap-2 border border-gray-200 px-2 rounded-xl items-center">
                <NextImage url={pass} width={22} height={22} />

                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full outline-none font-bold"
                  placeholder="رمز عبور"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  <NextImage
                    url={visibility}
                    width={22}
                    height={22}
                  />
                </button>
              </div>

              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password}
                </span>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loginMutation.isPending}
              className="w-full h-[56px] mt-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition disabled:opacity-50"
            >
              {loginMutation.isPending
                ? "در حال ورود..."
                : "ورود"}
            </button>

            {/* LINK */}
            <span className="text-center mt-4">
              حساب کاربری ندارید؟{" "}
              <button
                onClick={() => router.push("/auth")}
                className="text-green-700 hover:underline"
              >
                ثبت نام کنید
              </button>
            </span>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <NextImage
          url={authimage}
          classes="lg:w-1/2 object-cover grow w-full lg:h-full relative h-1/3"
        />
      </div>
    </>
  );
};

export default Login;
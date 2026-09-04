"use client";

import { flowers } from "@/src/assets";
import Image from "next/image";
import { useLoginState } from "@/src/hooks/(auth)/useLoginState";
import { FcGoogle } from "react-icons/fc";
import { RouteConstants } from "@/src/constants/RouteConstants";

export default function Login() {

  const {
    login,
    error,
    loading,
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    router
  } = useLoginState();

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-5 md:p-8">
      <div className="w-full max-w-287.5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">


          <div className="flex justify-center">
            <div className="w-full max-w-105">

              <h1 className="text-[28px] md:text-[32px] font-semibold text-[#263238]">
                Welcome Back 👋
              </h1>

              <p className="mt-3 text-sm text-gray-500 leading-6">
                Today is a new day. It&apos;s your day. You shape it.
                <br />
                Sign in to start managing your projects.
              </p>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-10"
              >

                {/* EMAIL */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full
                      h-12
                      rounded-lg
                      border
                      border-[#D9DEE8]
                      bg-[#F7F9FC]
                      px-4
                      text-sm
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="
                                  w-full
                                  h-12
                                  rounded-lg
                                  border
                                  border-[#D9DEE8]
                                  bg-[#F7F9FC]
                                  px-4
                                  pr-16
                                  text-sm
                                  outline-none
                                  transition
                                  focus:border-blue-500
                                  focus:ring-2
                                  focus:ring-blue-100
                                "
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                text-xs
                                text-gray-500
                                hover:text-gray-700
                              "
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* ERROR */}
                {error && (
                  <p className="mt-3 text-xs text-red-500">
                    {error}
                  </p>
                )}

                {/* FORGOT PASSWORD */}
                <div className="flex justify-end mt-3">
                  <button
                    type="button"
                    className="text-xs text-[#4A72E8] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* SIGN IN BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    h-12
                    mt-7
                    rounded-full
                    bg-linear-to-r
                    from-[#4D8AF0]
                    to-[#4A4EDC]
                    text-white
                    text-sm
                    font-medium
                    shadow-lg
                    transition
                    hover:opacity-90
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-gray-200"></div>

                <span className="text-xs text-gray-600">
                  Or sign in with
                </span>

                <div className="flex-1 h-px  bg-gray-200"></div>
              </div>

              {/* GOOGLE BUTTON */}
              <button
                type="button"
                className="
                  w-full
                  h-12
                  rounded-lg
                  bg-[#F5F7FA]
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-sm
                  font-medium
                  text-gray-600
                  transition
                  hover:bg-gray-100
                "
              >
                <FcGoogle
                  className="text-lg" />
                Google
              </button>

              {/* SIGN UP */}
              <p className="text-center text-sm text-gray-500 mt-8">
                Don&apos;t you have an account?{" "}


                <button className="text-[#4A72E8] font-medium hover:underline"
                  onClick={() => router.push(RouteConstants.REGISTER)}
                >
                  Sign up
                </button>
              </p>

              {/* FOOTER */}
              <p className="text-center text-[10px] text-gray-400 mt-16">
                © 2026 ALL RIGHTS RESERVED
              </p>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-130 h-155 overflow-hidden rounded-2xl">

              <Image
                src={flowers}
                alt="Flower artwork"
                fill
                className="object-cover"
                priority
              />

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
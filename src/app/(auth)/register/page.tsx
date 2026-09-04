"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { flowers } from "@/src/assets";
import useRegisterState from "@/src/hooks/(auth)/useRegisterState";
import { RouteConstants } from "@/src/constants/RouteConstants";


export default function Register() {
    const { handleSubmit, handleChange, form, error, success, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword } = useRegisterState();

    return (
        <main className="min-h-screen bg-white flex items-center justify-center p-5 md:p-8">
            <div className="w-full max-w-287.5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-105">

                            <h1 className="text-[28px] md:text-[32px] font-semibold text-[#263238]">
                                Create Account 👋
                            </h1>

                            <p className="mt-3 text-sm text-gray-500 leading-6">
                                Create your account and start managing
                                <br />
                                your healthcare information.
                            </p>

                            {/* FORM */}
                            <form
                                onSubmit={handleSubmit}
                                className="mt-8"
                            >

                                {/* FIRST + LAST NAME */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* FIRST NAME */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First name"
                                            value={form.firstName}
                                            onChange={handleChange}
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

                                    {/* LAST NAME */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name"
                                            value={form.lastName}
                                            onChange={handleChange}
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
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

                                    {/* Date of Birth  */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Date of Birth
                                        </label>

                                        <input
                                            type="date"
                                            name="dateofBirth"
                                            placeholder="Date of Birth"
                                            value={form.dateofBirth}
                                            onChange={handleChange}
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

                                    {/* Mobile Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mobile Number
                                        </label>

                                        <input
                                            type="text"
                                            name="mobileNumber"
                                            placeholder="Enter Mobile Number"
                                            value={form.mobileNumber}
                                            onChange={handleChange}
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
                                </div>

                                {/* EMAIL */}
                                <div className="mt-5">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Example@email.com"
                                        value={form.email}
                                        onChange={handleChange}
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
                                <div className="mt-5">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>

                                    <div className="relative">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            placeholder="At least 8 characters"
                                            value={form.password}
                                            onChange={handleChange}
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
                                            onClick={() =>
                                                setShowPassword(
                                                    (prev) => !prev
                                                )
                                            }
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

                                {/* CONFIRM PASSWORD */}
                                <div className="mt-5">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>

                                    <div className="relative">
                                        <input
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirmPassword"
                                            placeholder="Confirm password"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
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
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    (prev) => !prev
                                                )
                                            }
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
                                            {showConfirmPassword
                                                ? "Hide"
                                                : "Show"}
                                        </button>
                                    </div>
                                </div>

                                {/* ERROR */}
                                {error && (
                                    <p className="mt-3 text-xs text-red-500">
                                        {error}
                                    </p>
                                )}

                                {/* SUCCESS */}
                                {success && (
                                    <div className="mt-4">
                                        <p className="text-xs text-green-600">
                                            Registration successful!
                                        </p>

                                        <Link
                                            href={RouteConstants.LOGIN}
                                            className="
                                                    mt-3
                                                    inline-block
                                                    text-sm
                                                    font-medium
                                                    text-[#4A72E8]
                                                    hover:underline
                                                "
                                        >
                                            <button>Go to Login</button>
                                        </Link>
                                    </div>
                                )}

                                {/* REGISTER BUTTON */}
                                <button
                                    type="submit"
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
                                        "
                                >
                                    Create Account
                                </button>
                            </form>

                            {/* LOGIN */}
                            <p className="text-center text-sm text-gray-500 mt-8">
                                Already have an account?{" "}

                                <Link
                                    href={RouteConstants.REGISTER}
                                    className="text-[#4A72E8] font-medium hover:underline"
                                >
                                    Sign in
                                </Link>
                            </p>

                            {/* FOOTER */}
                            <p className="text-center text-[10px] text-gray-400 mt-12">
                                © 2026 ALL RIGHTS RESERVED
                            </p>
                        </div>
                    </div>

                    
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
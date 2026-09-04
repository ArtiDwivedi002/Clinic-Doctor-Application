"use client";
import Link from "next/link";
import useDashboardState from "@/src/hooks/(dashboard)/useDashboardState"
import {RouteConstants} from "@/src/constants/RouteConstants"



export default function Dashboard() {
    const { checkingAuth, handleLogout, user } = useDashboardState();
    if (checkingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F9FBFC]">
                <p className="text-gray-500">Checking authentication...</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#F9FBFC]">
            {/* HEADER */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F6FD9]">
                            <span className="text-xl font-bold text-white">+</span>
                        </div>

                        <span className="text-lg font-bold text-[#24314D]">
                            Klinik 24.
                        </span>
                    </Link>

                    {/* USER INFO */}
                    <div className="flex items-center gap-4">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-medium text-[#24314D]">
                                Test User
                            </p>

                            <p className="text-xs text-gray-500">
                                {user?.email}
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2FF] text-sm font-semibold text-[#4F6FD9]">
                            TU
                        </div>

                        <button
                            onClick={handleLogout}
                            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* DASHBOARD CONTENT */}
            <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

                {/* TITLE */}
                <div className="mb-8">
                    <p className="text-sm font-medium text-[#4F6FD9]">
                        Dashboard
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-[#24314D]">
                        Welcome back, Test User 👋
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Here&apos;s an overview of your account.
                    </p>
                </div>

                {/* PROFILE NAVIGATION */}
                <div className="mb-8 flex flex-wrap gap-3">
                    <Link
                        href={RouteConstants.DASHBOARD}
                        className="rounded-lg bg-[#4F6FD9] px-5 py-3 text-sm font-medium text-white"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href={RouteConstants.PROFILE}
                        className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                    >
                        My Profile
                    </Link>
                </div>

                {/* STATISTICS */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {/* CARD 1 */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Appointments
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-[#24314D]">
                                    24
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl">
                                📅
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Completed Visits
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-[#24314D]">
                                    18
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl">
                                ✓
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Upcoming Visits
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-[#24314D]">
                                    6
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                                🩺
                            </div>
                        </div>
                    </div>
                </div>

                {/* RECENT ACTIVITY */}
                <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-[#24314D]">
                                Recent Activity
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Your latest account activity.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-150 text-left">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="pb-4 text-xs font-medium uppercase text-gray-400">
                                        Activity
                                    </th>

                                    <th className="pb-4 text-xs font-medium uppercase text-gray-400">
                                        Date
                                    </th>

                                    <th className="pb-4 text-xs font-medium uppercase text-gray-400">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 text-sm text-gray-600">
                                        Appointment with Dr. Sarah
                                    </td>

                                    <td className="py-4 text-sm text-gray-500">
                                        Sep 04, 2026
                                    </td>

                                    <td className="py-4">
                                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                                            Completed
                                        </span>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="py-4 text-sm text-gray-600">
                                        Medical Check Up
                                    </td>

                                    <td className="py-4 text-sm text-gray-500">
                                        Sep 02, 2026
                                    </td>

                                    <td className="py-4">
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                                            Confirmed
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-4 text-sm text-gray-600">
                                        Profile Updated
                                    </td>

                                    <td className="py-4 text-sm text-gray-500">
                                        Aug 30, 2026
                                    </td>

                                    <td className="py-4">
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                            Updated
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}
"use client";

import Link from "next/link";
import { useProfileState } from "@/src/hooks/(auth)/useProfileState";
import { RouteConstants } from "@/src/constants/RouteConstants";


export default function ProfilePage() {
  const { checkingAuth, handleLogout, profile, saved, handleChange, handleSave } = useProfileState();


  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FBFC]">
        <p className="text-gray-500">
          Checking authentication...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9FBFC]">
      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F6FD9]">
              <span className="text-xl font-bold text-white">
                +
              </span>
            </div>

            <span className="text-lg font-bold text-[#24314D]">
              Klinik 24.
            </span>
          </Link>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </header>

      {/* PROFILE */}
      <section className="mx-auto max-w-225 px-6 py-10">


        <div className="mb-8">
          <p className="text-sm font-medium text-[#4F6FD9]">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#24314D]">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View and update your personal information.
          </p>
        </div>


        <div className="mb-6 flex gap-3">
          <Link
            href={RouteConstants.DASHBOARD}
            className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
          >
            ← Dashboard
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <form onSubmit={handleSave}>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* FIRST NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="
                    h-12
                    w-full
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
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="
                    h-12
                    w-full
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

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="
                    h-12
                    w-full
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

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="
                    h-12
                    w-full
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

              {/* DATE OF BIRTH */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={profile.dateOfBirth}
                  onChange={handleChange}
                  className="
                    h-12
                    w-full
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

            {/* SAVE */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="submit"
                className="
                  rounded-full
                   bg-linear-to-r
                from-[#4D8AF0]
                to-[#4A4EDC]
                  px-8
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  transition
                  hover:opacity-90
                  active:scale-[0.98]
                "
              >
                Save Changes
              </button>

              {saved && (
                <p className="text-sm font-medium text-green-600">
                  Profile saved successfully!
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
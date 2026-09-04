"use client";

import Image from "next/image";
import Link from "next/link";
import {login, register } from "@/src/assets/index";

const Navbar = () => {
  return (
    <header className="w-full bg-[#F9FBFC]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F6FD9]">
            <span className="text-lg font-bold text-white">+</span>
          </div>

          <span className="text-lg font-bold text-[#24314D]">
            Klinik 24.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#home"
            className="text-sm text-gray-600 transition hover:text-[#4F6FD9]"
          >
            Beranda
          </Link>

          <Link
            href="#services"
            className="text-sm text-gray-600 transition hover:text-[#4F6FD9]"
          >
            Tentang Kami
          </Link>

          <Link
            href="#about"
            className="text-sm text-gray-600 transition hover:text-[#4F6FD9]"
          >
            Layanan
          </Link>

          <Link
            href="#contact"
            className="text-sm text-gray-600 transition hover:text-[#4F6FD9]"
          >
            Kontak Kami
          </Link>
        </nav>

        {/* Login & Register */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Image
              src={login}
              alt="Login"
              width={140}
              height={56}
              className="cursor-pointer"
            />
          </Link>

          <Link href="/register">
            <Image
              src={register}
              alt="Register"
              width={232}
              height={56}
              className="cursor-pointer"
            />
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
import Link from "next/link";
import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const companyInfo = [
  "Tentang Kami",
  "Karir",
  "Blog",
  "Info Layanan",
];

const branches = [
  "Tangerang",
  "Jakarta",
  "Surabaya",
  "Bekasi",
];

const contactInfo = [
  "+626544645455",
  "info@klinik24.com",
  "Telp: +5646544654",
];

const socialLinks = [
  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: FaWhatsapp,
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#24314D] text-white"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">
              Klinik 24. +
            </h2>

            <p className="mt-3 max-w-70 text-sm leading-6 text-gray-300">
              Jl. Lebak Bulus I Kav. 29 Cilandak
            </p>

            <p className="mt-1 max-w-70 text-sm leading-6 text-gray-300">
              Jakarta Selatan, DKI Jakarta, Indonesia 12340
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4 text-xl text-gray-300">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="transition hover:text-white"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">
              Company Info
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {companyInfo.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-lg font-semibold">
              Cabang
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {branches.map((branch) => (
                <li key={branch}>
                  <Link
                    href="#"
                    className="transition hover:text-white"
                  >
                    {branch}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Kontak Kami
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {contactInfo.map((contact) => (
                <li key={contact}>
                  {contact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto max-w-7xl border-t border-white/10">
        <div className="flex items-center justify-center px-6 py-6 text-center lg:px-10">
          <p className="text-sm text-gray-400">
            Copyright © Klinik 24 2026.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Image from "next/image";
import { hospital } from "@/src/assets/index";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">

        {/* Image */}
        <div className="relative">
          <div className="relative h-87.5 overflow-hidden rounded-3xl md:h-112.5">
            <Image
              src={hospital}
              alt="Hospital"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold leading-tight text-[#24314D] md:text-4xl">
            Pelayanan terbaik dari para Ahli Medis
          </h2>

          <p className="mt-6 max-w-150 text-base leading-7 text-gray-500">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial
            dan kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>

          <button className="mt-7 flex w-fit items-center justify-center gap-2 rounded-full bg-[#4F6FD9] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3f5fc5]">
            <FaWhatsapp className="text-lg" />
            <span>Reservasi</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
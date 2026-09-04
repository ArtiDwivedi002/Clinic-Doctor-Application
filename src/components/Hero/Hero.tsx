import Image from "next/image";

// Import your doctor image here
import { doctor } from  "@/src/assets/index";

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#F9FBFC]"
    >
      <div className="mx-auto grid max-w-1280 grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">

        {/* Left Content */}

        <div className="max-w-150">

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#24314D] sm:text-5xl lg:text-6xl">
            Klinik 24 siap melayani keluhan masyarakat selama 24 jam
          </h1>

          <p className="mt-6 max-w-135 text-base leading-7 text-[#6B7280]">
            Kami menyediakan layanan kesehatan profesional yang siap
            membantu Anda dan keluarga kapan saja dengan pelayanan
            terbaik.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              className="
                rounded-full
                bg-[#4F6FD9]
                px-7
                py-3
                text-sm
                font-medium
                text-white
                shadow-lg
                transition
                hover:bg-[#3F5FC8]
              "
            >
            Lihat Layanan
            </button>

           

          </div>

        </div>

        {/* Right Content */}

        <div className="relative flex justify-center">

        
          <div className="absolute h-105 w-105 rounded-full bg-[#DCE5FF] lg:h-130 lg:w-130" />

          
        <div className="relative z-10 h-105 w-105 lg:h-130 lg:w-125">

            <Image 
            src= {doctor}
            alt="Doctor"
            className="h-full w-full object-cover"
            />

            <div className="flex h-full w-full items-center justify-center">
              <span className="text-gray-400">
                Doctor Image
              </span>
            </div>

          </div>


        </div>

      </div>
    </section>
  );
};

export default Hero;
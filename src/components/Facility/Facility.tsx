import Image from "next/image";
import { CalendarDays, HousePlus } from "lucide-react";
import { doctorOperation,doctorBp,doctorSurgery, doctorMask } from "@/src/assets";
export default function FacilitySection() {
  return (
    <section className="w-full bg-[#f7f9fc] py-20">
      <div className="mx-auto grid min-h-127.5 max-w-277.5  grid-cols-1 items-center overflow-hidden md:grid-cols-2">
        
        {/* Left Content */}
        <div className="z-10 px-6 py-12 md:px-0">
          <h2 className="max-w-107.5 text-[30px] font-bold leading-[1.45] text-[#24324a] md:text-[34px]">
            Fasilitas Mewah yang
            <br />
            memanusiakan manusia
          </h2>

          <p className="mt-4 max-w-150 text-[15px] leading-7 text-[#70809a]">
            Rumah sakit adalah bagian integral dari suatu organisasi
            sosial dan kesehatan dengan fungsi menyediakan pelayanan
            paripurna (komprehensif).
          </p>

          <button className="mt-6 flex items-center gap-2 rounded-full  bg-linear-to-r
    from-[#4D8AF0]
    to-[#4A4EDC] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
            <CalendarDays size={18} />
            Reservasi
          </button>
        </div>

        {/* Right Illustration */}
        <div className="relative flex h-105 items-center justify-center">
          
          {/* Outer Ring */}
          <div className="absolute h-95  w-95 rounded-full border border-dashed border-[#78a7f7]" />

          {/* Middle Ring */}
          <div className="absolute h-77.5 w-77.5 rounded-full border border-dashed border-[#78a7f7]" />

          {/* Background Glow */}
          <div className="absolute h-57.5 w-57.5 rounded-full bg-[#e7edf8]" />

          {/* Main Circle */}
          <div className="relative z-10 flex h-41.25 w-41.25 items-center justify-center rounded-full  bg-linear-to-r
    from-[#4D8AF0]
    to-[#4A4EDC] shadow-xl">
            <HousePlus size={58} strokeWidth={1.7} className="text-white" />
          </div>

          {/* Floating Image - Top Left */}
          <FloatingImage
            src={doctorOperation.src}
            alt="Doctor"
            className="left-[8%] top-[8%]"
          />

          {/* Floating Image - Right */}
          <FloatingImage
            src={doctorSurgery.src}
            alt="Doctor"
            className="right-[3%] top-[31%]"
          />

          {/* Floating Image - Bottom Left */}
          <FloatingImage
            src={doctorBp.src}
            alt="Doctor"
            className="bottom-[2%] left-[25%]"
          />

          {/* Floating Image - Bottom Right */}
          <FloatingImage
            src={doctorMask.src}
            alt="Doctor"
            className="bottom-[10%] right-[7%]"
            
          />
        </div>
      </div>
    </section>
  );
}

function FloatingImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-20 h-19.5  w-19.5 overflow-hidden rounded-full border-4 border-white shadow-lg ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}
import Image from "next/image";
import { partner } from "@/src/assets";

const Partners = () => {
  return (
    <section className="w-full border-y border-gray-100 bg-white">
      <div className="w-full">
        <Image
          src={partner}
          alt="Partner Image"
          width={1440}
          height={259}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Partners;
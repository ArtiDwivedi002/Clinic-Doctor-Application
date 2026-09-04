import Image from "next/image";
import {testiuser} from "@/src/assets/index";
const testimonials = [
  {
    id: 1,
    name: "Riki Abdurachman",
    role: "Product Designer",
    message:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: testiuser    ,
  },
  {
    id: 2,
    name: "Riki Abdurachman",
    role: "Product Designer",
    message:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: testiuser,
  },
  {
    id: 3,
    name: "Riki Abdurachman",
    role: "Product Designer",
    message:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: testiuser,
  },
  {
    id: 4,
    name: "Riki Abdurachman",
    role: "Product Designer",
    message:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: testiuser,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-275 px-5 md:px-8">
        
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-2xl font-bold text-[#24314D] md:text-4xl">
            Testimonial by Pasien
          </h2>

          <p className="mx-auto mt-3 max-w-150 text-sm leading-6 text-[#64748B] md:text-base">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
            kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-3xl bg-[#F9FBFC] p-6 shadow-sm md:p-8"
            >
              {/* Message */}
              <p className="text-base italic leading-7 text-[#475569] md:text-lg">
                {testimonial.message}
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={58}
                  height={58}
                  className="h-14.5 w-14.5 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-base font-semibold text-[#4F6FD9]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#64748B]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
import { FaCalendar, FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="bg-[#F9FBFC] py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl  bg-linear-to-r
    from-[#4D8AF0]
    to-[#4A4EDC] px-8 py-14 text-center text-white md:px-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Reservasi Pelayanan kami sekarang
          </h2>

          <p className="mx-auto mt-4 max-w-150 text-sm leading-6 text-blue-100">
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).
          </p>

         <div className="mt-8 flex justify-center gap-4">
  <button className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#4F6FD9]">
    <FaCalendar />
    <span>Cek Jadwal Dokter</span>
  </button>

  <button className="flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white">
    <FaWhatsapp />
    <span>Reservasi</span>
  </button>
</div>

        </div>

      </div>

    </section>
  );
};

export default CTA;
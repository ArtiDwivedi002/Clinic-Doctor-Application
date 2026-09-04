import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Apotek 24 Jam",
    description:
      "Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis",
    icon: "💊",
  },
  {
    title: "Medical Check Up",
    description:
      "Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis",
    icon: "❤️",
  },
  {
    title: "Professional Doctor",
    description:
      "Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis",
    icon: "👨‍⚕️",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#F9FBFC] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Heading */}
        <div className="mb-10 grid grid-cols-1 items-start gap-8 md:grid-cols-2">

       
          <div>
            <h2 className="text-lg font-semibold text-[#0d101d]">
              Daftar Layanan
            </h2>
          </div>

        
          <div>
            <p className="max-w-150 text-sm leading-6 text-gray-500">
              Kami menyediakan berbagai layanan kesehatan dengan tenaga
              profesional untuk menjaga kesehatan Anda dan keluarga.
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                rounded-2xl
                bg-white
                p-7
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] text-2xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#24314D]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {service.description}
              </p>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#4F6FD9] px-5 py-3 text-sm font-medium text-white">
                <FaWhatsapp className="text-lg" />
                <span>Reservasi</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
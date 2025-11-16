import { motion } from "framer-motion";
import heroBackground from "/hero-background.jpg";

export default function AboutUs() {
  return (
    <div className="pt-24 px-6 lg:px-20 bg-white">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide text-stone-800">
          Profil Perusahaan
        </h2>
        <div className="w-24 h-1.5 bg-linear-to-r from-stone-300 to-stone-400 mt-3 rounded-full" />
      </div>

      {/* Content Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[540px]">
            <img
              src={heroBackground}
              alt="Company Image"
              className="rounded-3xl shadow-md object-cover w-full min-h-80"
            />
            {/* Gradient overlay for premium look */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-white/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-stone-700 leading-relaxed text-lg space-y-5"
        >
          <p>
            <span className="font-semibold text-stone-900">
              CV Azka Cahaya Gemilang
            </span>{" "}
            adalah perusahaan distributor bahan kimia yang telah beroperasi
            sejak tahun 2001. Berawal dari penjualan retail berskala kecil,
            perusahaan berkembang dan resmi menjadi badan usaha Komanditer (CV)
            berstatus PKP pada 10 Oktober 2016.
          </p>

          <p>
            Dengan pengalaman profesional dalam impor dan distribusi bahan
            kimia, perusahaan berkomitmen menyediakan produk berkualitas tinggi
            mencakup kategori Industrial Grade dan Food Grade.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto my-14">
        <div className="w-full h-px bg-linear-to-r from-transparent via-stone-300 to-transparent" />
      </div>

      {/* Second Text Section */}
      <div className="max-w-6xl mx-auto items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-stone-700 leading-relaxed text-lg space-y-6"
        >
          <p>
            Perusahaan terus memperluas jaringan distribusi hingga mencakup
            wilayah Jabodetabek, Sukabumi, Cianjur, Bandung, Purwokerto,
            Purbalingga, Bali, dan Sumatra. Dengan dukungan tim pemasaran
            berpengalaman, kami memastikan pelayanan yang cepat dan profesional.
          </p>

          <p>
            Setiap produk yang dikirimkan dilengkapi Certificate of Analysis
            (COA) serta menjalani pengecekan fisik untuk memastikan kualitas
            sesuai standar industri. Langkah ini membantu meminimalkan retur dan
            meningkatkan kepuasan pelanggan.
          </p>

          <p>
            Dengan pelayanan transparan, kualitas terjamin, dan komunikasi yang
            profesional, CV Azka Cahaya Gemilang berkomitmen menjadi mitra
            terpercaya dalam penyediaan bahan baku kimia bagi industri skala
            besar hingga kebutuhan rumah tangga.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

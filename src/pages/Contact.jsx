import { motion } from "framer-motion";
import ContactCards from "../components/ContactCards";
import GoogleMaps from "../components/GoogleMaps";

function Contact() {
  return (
    <>
      <div className="pt-20 px-6 lg:px-20">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-5"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-stone-300 to-stone-400 mt-3 rounded-full" />
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-1 mt-6"
        >
          <p>Hubungi kami untuk mengetahui lebih lanjut mengenai apa yang kami jual dan kerjakan.</p>
          <p>Kami akan menyediakan yang terbaik untuk Anda.</p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <ContactCards />
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <GoogleMaps />
        </motion.div>

      </div>
    </>
  );
}

export default Contact;

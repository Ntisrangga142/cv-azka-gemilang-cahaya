import React from "react";
import { motion } from "framer-motion";
import visionIcon from "/icons/shared-vision.png";
import valueIcon from "/icons/benefits.png";
import heroBackground from "/hero-background.jpg";
import VisiMisiSwitch from "../components/VisiMisiSwitch";
import ValueSwitch from "../components/ValueSwitch";
import KeunggulanKami from "../components/KeunggulanKami";
import ListProduk from "../components/ListProduk";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center gap-5 
                   px-4 md:px-10 py-20 md:py-32 "
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-neutral-300/60 backdrop-grayscale-50 rounded-3xl 
                        py-10 md:py-16 px-6 md:px-12 max-w-3xl w-full">
          <h3 className="text-lg md:text-xl font-semibold tracking-wide">
            WE ARE A CHEMICALS DISTRIBUTOR
          </h3>

          <h1 className="font-bold text-3xl md:text-5xl leading-tight md:leading-[3.5rem] mt-3 mb-5">
            Easy to Get Chemicals With Us
          </h1>

          <ListProduk />
        </div>
      </motion.div>

      {/* COMPANY NAME */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center 
                  px-4 md:px-10 py-10"
      >
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
          CV. AZKA CAHAYA GEMILANG
        </h2>
      </motion.div>

      {/* VISI MISI */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center 
                   px-4 md:px-10 max-w-4xl mx-auto"
      >
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">Visi & Misi</h2>

        <div className="flex items-center justify-center mb-5 mt-2">
          <hr className="w-10 md:w-16 h-0.5 border-stone-300 mr-3" />
          <img src={visionIcon} alt="Vision Icon" className="w-6 md:w-8 opacity-50" />
          <hr className="w-10 md:w-16 h-0.5 border-stone-300 ml-3" />
        </div>

        <VisiMisiSwitch />

        {/* VALUE */}
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide mt-10">Value</h2>

        <div className="flex items-center justify-center mb-5 mt-2">
          <hr className="w-10 md:w-16 h-0.5 border-stone-300 mr-3" />
          <img src={valueIcon} alt="Value Icon" className="w-6 md:w-8 opacity-50" />
          <hr className="w-10 md:w-16 h-0.5 border-stone-300 ml-3" />
        </div>

        <ValueSwitch />

        {/* KEUNGGULAN KAMI */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center 
                     px-4 md:px-10 mt-10 max-w-4xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">Keunggulan Kami</h2>
          <hr className="w-32 md:w-40 h-0.5 border-stone-300 mt-2 mb-5" />

          <KeunggulanKami />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;

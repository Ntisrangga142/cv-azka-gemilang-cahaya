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
        className="flex flex-col items-center justify-center text-center gap-5 px-10 py-25"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-neutral-300/60 backdrop-grayscale-100 rounded-3xl py-30 px-50">
          <h3 className="text-xl font-semibold tracking-wide">
            WE ARE A CHEMICALS DISTRIBUTOR
          </h3>

          <h1 className="font-bold text-5xl text-wrap w-150 leading-20 backdrop-grayscale-100">
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
        className="flex flex-col items-center justify-center text-center gap-5 px-10 pt-10 pb-10 mt-2"
      >
        <h2 className="text-2xl font-semibold tracking-wide">
          CV. AZKA CAHAYA GEMILANG
        </h2>
      </motion.div>

      {/* VISI MISI */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center gap-5 px-10"
      >
        <h2 className="text-2xl font-semibold tracking-wide">Visi & Misi</h2>

        <div className="flex items-center justify-center mb-5">
          <hr className="w-7.5 h-0.5 border-stone-300 mr-2.5" />
          <img src={visionIcon} alt="Vision Icon" className="w-7.5 opacity-50" />
          <hr className="w-7.5 h-0.5 border-stone-300 ml-2.5" />
        </div>

        <VisiMisiSwitch />

        {/* VALUE */}
        <h2 className="text-2xl font-semibold tracking-wide mt-10">Value</h2>

        <div className="flex items-center justify-center mb-5">
          <hr className="w-7.5 h-0.5 border-stone-300 mr-2.5" />
          <img src={valueIcon} alt="Value Icon" className="w-7.5 opacity-50" />
          <hr className="w-7.5 h-0.5 border-stone-300 ml-2.5" />
        </div>

        <ValueSwitch />

        {/* KEUNGGULAN KAMI */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center gap-5 px-10 mt-10"
        >
          <h2 className="text-2xl font-semibold tracking-wide">Keunggulan Kami</h2>
          <hr className="w-25 h-0.5 border-stone-300" />

          <KeunggulanKami />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;

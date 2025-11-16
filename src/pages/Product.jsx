import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Coffee, FlaskConical, Droplet, Download } from "lucide-react";

export default function Product() {
  const [search, setSearch] = useState("");

  const categories = [
    {
      title: "Foods",
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      items: [
        "Acetid Acid",
        "Amonium bicarbonate",
        "Backing Powder",
        "Benzoic Acid",
        "Calsium Propionate",
        "Carfosel",
        "Citric Acid",
        "CMC",
        "CornStarch",
        "Garam (NACL)",
        "Opaque White",
        "Phosporic Acid",
        "Potasium Sorbate",
        "Sacaharine",
        "SAPP(Sod. Acid Piro Phosphate)",
        "Sod. Acetate",
        "Sod. Benzoate (A)",
        "Sod. Benzoate (B)",
        "Sod. Bicarbonate RRC",
        "Sod. Bicarbonate Asahi",
        "Sod. Cyclamate",
        "Sod. Poliposphate",
        "Spong 28",
      ],
    },
    {
      title: "Technicals",
      icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
      items: [
        "ABS",
        "Alkohol",
        "Aluminum Sulphate",
        "Amoniak",
        "Amonium Bifluoride",
        "Amonium Chlorite",
        "Borax RRC",
        "Borax Turket",
        "Calcium Chlorite",
        "Caustic Soda Flake",
        "Chromic Acid",
        "Copper Sulphate",
        "Ferro Sulphate",
        "H2O2",
        "H2SO4",
        "HCL 32%",
        "HF",
        "Kaporite Pail",
        "Kaporite Granular",
        "Kaporite Powder",
        "Kaporite Tablet",
        "KOH",
        "Kotiox",
        "Natrosol",
        "Nikel Sulphate",
        "Nitric Acid",
        "Oxalic Acid",
        "PAC",
        "Phosporic Acid",
        "Soda Ash Dense/Light",
        "STPP RRC",
        "STPP Thailand",
        "Parafin Wax",
        "Poly Uretan",
        "Sod. Hypochlorite",
        "Sod. Metabisulphite",
        "Sod. Nitrite",
        "Sod. Sulphate",
        "Sulfur",
        "Talc",
        "Tartaric Acid",
        "Tawas",
        "TSP",
        "Titanium Dioxide",
        "Tiona",
      ],
    },
    {
      title: "Solvents",
      icon: <Droplet className="w-6 h-6 text-emerald-600" />,
      items: [
        "Aceton",
        "Alkohol / Ethanol",
        "BC (Buthyl Cilosove)",
        "CYC",
        "DMF",
        "DOP",
        "IPA",
        "MEK",
        "Methanol",
        "Normal Hexan",
        "Resin",
        "SBP",
        "SMT",
        "Thinner A",
        "Thinner HG",
        "Thinner ND",
        "Thinner Stoving",
        "Toluen",
        "White Oil",
        "Xylene",
        "Jerigen Kosong",
      ],
    },
  ];

  const filter = (list) =>
    list.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="mt-5 py-16 px-6 lg:px-20 bg-white">
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-semibold text-stone-800 tracking-wide">
          Daftar Produk Utama
        </h2>
        <div className="w-24 h-1.5 bg-linear-to-r from-stone-300 to-stone-400 mt-3 rounded-full" />
      </div>

      {/* Sticky Search */}
      <div className="top-20 z-20 bg-white/90 backdrop-blur-md py-3 mb-10">
        <div className="max-w-3xl mx-auto flex items-center gap-3 border rounded-xl px-4 py-3 shadow-sm">
          <Search className="w-5 h-5 text-stone-500" />
          <input
            type="text"
            placeholder="Cari produk…"
            className="w-full outline-none text-stone-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Preview PDF */}
      <div className="flex justify-end items-center mb-10">
  <a
    href="/katalog-produk.pdf"
    download
    className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 
        rounded-xl shadow-md hover:bg-stone-700 active:scale-95 
        transition-all duration-200"
  >
    <Download className="w-5 h-5" />
    <span className="font-medium">Lihat Katalog Produk</span>
  </a>
</div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              {cat.icon}
              <h3 className="text-xl font-semibold text-stone-800">
                {cat.title}
              </h3>
            </div>

            {/* Product List */}
            <ul className="space-y-2 text-stone-700">
              {filter(cat.items).map((item, i) => (
                <li key={i} className="border-b py-1 text-sm">
                  {item}
                </li>
              ))}

              {filter(cat.items).length === 0 && (
                <p className="text-sm italic text-stone-400 mt-3">
                  Produk tidak ditemukan.
                </p>
              )}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

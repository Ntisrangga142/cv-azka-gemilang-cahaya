import { useState } from "react";

function ValueSwitch() {
  const [selected, setSelected] = useState("value1");

  return (
    <div className="flex flex-col items-center gap-5 px-5 mb-10">
      {/* Switch Button */}
      <div className="flex flex-row gap-3 justify-center items-center">
        
        {/* Button 1 */}
        <button
          onClick={() => setSelected("value1")}
          className={`
            w-32 h-10 text-sm font-semibold flex items-center justify-center
            transition-all duration-300 border rounded cursor-pointer
            ${
              selected === "value1"
                ? "bg-[#fafafb] text-[#2b323a] border-[#f2f2f2]"
                : "bg-transparent text-[#777] border-[#f2f2f2]"
            }
            hover:bg-[#f5f5f5] hover:text-[#2b323a]
            hover:-translate-y-0.5 hover:shadow-sm
          `}
        >
          KUALITAS
        </button>

        {/* Button 2 */}
        <button
          onClick={() => setSelected("value2")}
          className={`
            w-32 h-10 text-sm font-semibold flex items-center justify-center
            transition-all duration-300 border rounded cursor-pointer
            ${
              selected === "value2"
                ? "bg-[#fafafb] text-[#2b323a] border-[#f2f2f2]"
                : "bg-transparent text-[#777] border-[#f2f2f2]"
            }
            hover:bg-[#f5f5f5] hover:text-[#2b323a]
            hover:-translate-y-0.5 hover:shadow-sm
          `}
        >
          RESPONSIF
        </button>

        {/* Button 3 */}
        <button
          onClick={() => setSelected("value3")}
          className={`
            w-32 h-10 text-sm font-semibold flex items-center justify-center
            transition-all duration-300 border rounded cursor-pointer
            ${
              selected === "value3"
                ? "bg-[#fafafb] text-[#2b323a] border-[#f2f2f2]"
                : "bg-transparent text-[#777] border-[#f2f2f2]"
            }
            hover:bg-[#f5f5f5] hover:text-[#2b323a]
            hover:-translate-y-0.5 hover:shadow-sm
          `}
        >
          KOMITMEN
        </button>
      </div>

      {/* Content Area */}
      <div className="mx-50 mt-5 leading-relaxed text-gray-700 text-lg bg-[#fafafb] px-5 pb-5 pt-2.5">
        {selected === "value1" && (
          <div>
            <h3 className="text-lg font-bold leading-6.5 m-2">
              Kualitas Terjamin
            </h3>
            <p className="text-center text-base">
              Kami selalu memastikan setiap produk sesuai standar melalui
              pengecekan fisik dan kelengkapan Certificate of Analysis (COA)
              dari pabrik dalam maupun luar negeri, sehingga kualitas dan
              spesifikasi produk tetap konsisten.
            </p>
          </div>
        )}

        {selected === "value2" && (
          <div>
            <h3 className="text-lg font-bold leading-6.5 m-2">
              Responsif & Andal dalam Distribusi
            </h3>
            <p className="text-center text-base">
              Dengan pengalaman panjang dan dukungan tim pemasaran
              berpengalaman, kami menghadirkan layanan cepat, stok terjaga,
              serta distribusi yang luas mulai dari Jabodetabek hingga berbagai
              daerah di Indonesia.
            </p>
          </div>
        )}

        {selected === "value3" && (
          <div>
            <h3 className="text-lg font-bold leading-6.5 m-2">
              Komitmen pada Kepercayaan Pelanggan
            </h3>
            <p className="text-center text-base">
              Kepercayaan pelanggan adalah prioritas kami. Kami memberikan
              informasi produk yang lengkap, transparan, dan akurat untuk
              memastikan kerja sama yang efektif dan memenuhi kebutuhan bahan
              kimia pelanggan tanpa hambatan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ValueSwitch;

import { useState } from "react";

function VisiMisiSwitch() {
  const [selected, setSelected] = useState("visi");

  return (
    <div className="flex flex-col items-center gap-5 px-4 md:px-8 mb-10 w-full">
      
      {/* Switch */}
      <div className="flex gap-3 justify-center items-center">
        {/* Button VISI */}
        <button
          onClick={() => setSelected("visi")}
          className={`
            w-24 md:w-28 h-10 text-sm md:text-base font-semibold flex items-center justify-center
            transition-all duration-300 border rounded cursor-pointer
            ${
              selected === "visi"
                ? "bg-[#fafafb] text-[#2b323a] border-[#e5e5e5]"
                : "bg-transparent text-[#777] border-[#e5e5e5]"
            }
            hover:bg-[#f5f5f5] hover:text-[#2b323a] hover:-translate-y-0.5 hover:shadow-sm
          `}
        >
          VISI
        </button>

        {/* Button MISI */}
        <button
          onClick={() => setSelected("misi")}
          className={`
            w-24 md:w-28 h-10 text-sm md:text-base font-semibold flex items-center justify-center
            transition-all duration-300 border rounded cursor-pointer
            ${
              selected === "misi"
                ? "bg-[#fafafb] text-[#2b323a] border-[#e5e5e5]"
                : "bg-transparent text-[#777] border-[#e5e5e5]"
            }
            hover:bg-[#f5f5f5] hover:text-[#2b323a] hover:-translate-y-0.5 hover:shadow-sm
          `}
        >
          MISI
        </button>
      </div>

      {/* Content Box */}
      <div className="w-full max-w-screen-lg bg-[#fafafb] rounded-lg p-5 md:p-7 leading-relaxed text-gray-700 text-base md:text-lg shadow-sm">

        {selected === "visi" && (
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3">
              Visi Perusahaan Kami
            </h3>
            <p className="text-justify">
              Menjadi penyedia bahan baku kimia terkemuka di Indonesia dengan kualitas unggul, layanan cepat, dan distribusi andal untuk mendukung kelancaran produksi pelanggan.
            </p>
          </div>
        )}

        {selected === "misi" && (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-bold mb-3">
              Misi Perusahaan Kami
            </h3>

            <ul className="list-decimal list-inside flex flex-col gap-4 text-justify">
              <li>
                Menyediakan dan mendistribusikan berbagai kebutuhan bahan kimia berkualitas tinggi melalui praktik perdagangan yang profesional, aman, dan terpercaya.
              </li>

              <li>
                Memperluas jangkauan distribusi ke seluruh Indonesia untuk melayani industri manufaktur maupun sektor rumah tangga dengan pelayanan yang cepat dan berorientasi pada kepuasan pelanggan.
              </li>

              <li>
                Membangun kemitraan jangka panjang dengan pelanggan melalui komitmen untuk selalu responsif serta memberikan solusi terbaik.
              </li>

              <li>
                Meningkatkan kesejahteraan karyawan dan mendukung pendidikan anak-anak karyawan demi masa depan yang lebih baik.
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default VisiMisiSwitch;

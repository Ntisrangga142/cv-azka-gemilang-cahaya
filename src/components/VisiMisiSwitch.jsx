import { useState } from "react";

function VisiMisiSwitch() {
  const [selected, setSelected] = useState("visi");

  return (
    <div className="flex flex-col items-center gap-5 px-5 mb-10">
      {/* Switch Button */}
      <div className="flex flex-row gap-3 justify-center items-center">
        
        {/* Button VISI */}
        <button
          onClick={() => setSelected("visi")}
          className={`
            w-28 h-10 text-sm font-semibold flex items-center justify-center
            transition-all duration-300 border rounded cursor-pointer
            ${
              selected === "visi"
                ? "bg-[#fafafb] text-[#2b323a] border-[#f2f2f2]"
                : "bg-transparent text-[#777] border-[#f2f2f2]"
            }
            hover:bg-[#f5f5f5] hover:text-[#2b323a]
            hover:-translate-y-0.5 hover:shadow-sm
          `}
        >
          VISI
        </button>

        {/* Button MISI */}
        <button
          onClick={() => setSelected("misi")}
          className={`
            w-28 h-10 text-sm font-semibold flex items-center justify-center
            transition-all duration-300 border rounded cursor-pointer
            ${
              selected === "misi"
                ? "bg-[#fafafb] text-[#2b323a] border-[#f2f2f2]"
                : "bg-transparent text-[#777] border-[#f2f2f2]"
            }
            hover:bg-[#f5f5f5] hover:text-[#2b323a]
            hover:-translate-y-0.5 hover:shadow-sm
          `}
        >
          MISI
        </button>

      </div>

      {/* Content Area */}
      <div className="mx-50 mt-5 leading-relaxed text-gray-700 text-lg bg-[#fafafb] px-5 pb-5 pt-2.5">
        {selected === "visi" && (
          <div>
            <h3 className="text-lg font-bold leading-6.5 m-2">
              Visi Perusahaan Kami
            </h3>
            <p className="text-justify text-base">
              Menjadi penyedia bahan baku kimia terkemuka di Indonesia dengan kualitas unggul, layanan cepat, dan distribusi andal untuk mendukung kelancaran produksi pelanggan.
            </p>
          </div>
        )}

        {selected === "misi" && (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold leading-6.5 m-2">
              Misi Perusahaan Kami
            </h3>

            <ul className="list-decimal list-inside flex flex-col gap-4 text-justify text-base">
              <li>
                Menyediakan dan mendistribusikan berbagai kebutuhan bahan kimia
                berkualitas tinggi melalui praktik perdagangan yang profesional,
                aman, dan terpercaya.
              </li>

              <li>
                Memperluas jangkauan distribusi ke seluruh Indonesia untuk
                melayani industri manufaktur maupun sektor rumah tangga dengan
                pelayanan yang cepat, ramah, dan berorientasi pada kepuasan
                pelanggan.
              </li>

              <li>
                Membangun kemitraan jangka panjang dengan pelanggan melalui
                komitmen untuk selalu responsif, siap memenuhi kebutuhan, serta
                memberikan solusi terbaik kapan pun dibutuhkan.
              </li>

              <li>
                Meningkatkan kesejahteraan karyawan dengan memperlakukan mereka
                sebagai bagian dari keluarga besar perusahaan, serta mendukung
                pendidikan anak-anak karyawan demi masa depan yang lebih baik.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisiMisiSwitch;

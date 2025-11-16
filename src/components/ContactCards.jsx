import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactCards() {
  const phone1 = import.meta.env.VITE_PHONE_1;
  const phone2 = import.meta.env.VITE_PHONE_2;
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL;

    const phoneNumber = import.meta.env.VITE_PHONE_WA; // Nomor WA (format internasional, tanpa +)

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 py-10">
      {/* Card Alamat */}
      <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm">
        <MapPin className="w-10 h-10 text-blue-400 mb-4" />
        <p className="font-semibold leading-relaxed">
          Cluster Blossomvile <br />
          JL. Blossomville 8 Blok W11/3
          <br />
          Mekar Bakti, Panongan, Kab. Tangerang <br />
          15710 <br /> Banten - Indonesia
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Senin - Jumat: 9:00 - 17:00 WIB
        </p>
        <p className="text-sm text-gray-600">Sabtu dan Minggu: Tutup</p>
      </div>
      
      {/* Card Telepon */}
      <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm">
        <Phone className="w-10 h-10 text-blue-400 mb-4" />
        <h3 className="text-lg font-semibold">{phone1}</h3>
        <p className="my-1">Atau</p>
        <h3 className="text-lg font-semibold mb-5">{phone2}</h3>
        <p className="text-sm text-gray-600">Bantuan 24/7 - Online 24 jam</p>
        <a
          onClick={handleClick}
          className="text-sm text-blue-600 underline mt-1 cursor-pointer"
        >
          Hubungi Kami Sekarang
        </a>
      </div>
    </div>
  );
}

import { ShieldCheck, Truck, Handshake } from "lucide-react";

export default function KeunggulanKami() {
  const items = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Produk Berkualitas",
      desc: "Setiap produk dicek ketat dan dilengkapi COA untuk memastikan kualitas terbaik.",
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Distribusi Cepat",
      desc: "Pengiriman cepat dengan jangkauan distribusi luas hingga berbagai daerah di Indonesia.",
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Pelayanan Profesional",
      desc: "Tim berpengalaman siap memberikan layanan responsif dan terpercaya.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-6 pt-5 pb-10 gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-2xl p-6 shadow-md border border-blue-100 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <div className="text-blue-500">{item.icon}</div>
            <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
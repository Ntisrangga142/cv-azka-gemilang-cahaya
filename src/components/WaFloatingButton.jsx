import React from "react";
import { MessageCircle } from "lucide-react";

function WaFloatingButton() {
  const phoneNumber = import.meta.env.VITE_PHONE_WA; // Nomor WA (format internasional, tanpa +)

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-10 right-10 z-50 
        bg-green-500 hover:bg-green-600 
        text-white rounded-full p-4 shadow-xl 
        transition-all duration-300 cursor-pointer
        flex items-center justify-center
      "
    >
      <MessageCircle size={28} />
    </button>
  );
}

export default WaFloatingButton;

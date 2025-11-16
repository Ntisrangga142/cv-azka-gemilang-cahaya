import { Link } from "react-router";

function openGoogleDrive() {
  window.open(import.meta.env.VITE_GOOGLE_DRIVE_URL, "_blank");
}

function ListProduk() {
  return (
    <Link
      to="/product"
      className="relative overflow-hidden bg-blue-400 text-white text-lg font-medium px-6 py-3 rounded-md group hover:text-blue-400 transition-colors duration-500"
    >
      <span
        className="
      absolute inset-0
      bg-white
      scale-y-0
      group-hover:scale-y-100
      rounded-md
      transition-transform duration-500
      origin-center
      z-0
    "
      ></span>

      <span className="relative z-10">List Product</span>
    </Link>
  );
}

export default ListProduk;

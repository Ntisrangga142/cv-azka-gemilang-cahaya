import { useState } from "react";
import { Download, X } from "lucide-react";

export default function PDFPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button Open Preview */}
      <div className="flex justify-end items-center mb-10">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 
                     rounded-xl shadow-md hover:bg-stone-700 active:scale-95 
                     transition-all duration-200"
        >
          <Download className="w-5 h-5" />
          <span className="font-medium">Lihat Katalog Produk</span>
        </button>
      </div>

      {/* Modal Preview */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          
          <div className="bg-white rounded-xl shadow-xl w-[95%] lg:w-[70%] h-[90%] relative p-4 flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-stone-800">Preview Katalog Produk</h3>

              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6 text-stone-600 hover:text-black" />
              </button>
            </div>

            {/* Iframe Preview */}
            <div className="flex-1 border rounded-lg overflow-hidden">
              <iframe
                src="/katalog-produk.pdf"
                className="w-full h-full"
                title="Preview PDF"
              ></iframe>
            </div>

            {/* Download Button */}
            <div className="flex justify-end mt-4">
              <a
                href="/katalog-produk.pdf"
                download
                className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 
                           rounded-lg shadow hover:bg-stone-700 transition"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

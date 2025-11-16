function Footer() {
  return (
    <footer className="w-full bg-[#fafafb] border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* GRID (1 kolom logo + 3 kolom info) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-25">

          {/* LOGO */}
          <div className="flex flex-col gap-3">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-32 select-none"
            />
            <p className="text-sm text-gray-600 font-bold">
              CV AZKA CAHAYA GEMILANG  
            </p>
          </div>

          {/* PERUSAHAAN */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[#2b323a]">Alamat Perusahaan</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Cluster Blossomvile  
              JL. Blossom ville 8 Blok W11/e  
              Kel. Mekar Bakti, Kec Panongan, Kab. Tangerang  
              15710 – Banten, Indonesia
            </p>
          </div>

          {/* GUDANG */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[#2b323a]">Alamat Gudang</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Jln. Hayam Wuruk Raya No. 30  
              Kel. Cibodas, Kec. Cibodas  
              Kota Tangerang – 15138
            </p>
          </div>

          {/* KONTAK */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[#2b323a]">Kontak</h3>

            <ul className="text-sm text-gray-700 leading-relaxed flex flex-col gap-1">
              <li>
                <span className="font-medium">Telepon / Fax:</span><br />
                (+62-21) 29005373
              </li>
              <li>
                <span className="font-medium">Handphone:</span><br />
                08164810771<br />
                085781272163
              </li>
              <li>
                <span className="font-medium">Email:</span><br />
                mentyazka@yahoo.com
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} CV Azka Cahaya Gemilang — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#084469] text-white mt-20 l">
      <div className="container max-w-5xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          
          {/* Informasi Kantor */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Kantor Imigrasi Kelas III Non-TPI Takengon
            </h3>

            <p className="text-sm leading-relaxed text-blue-100 mb-4">
              Jalan Pengulu Gayo, Desa Kebet, Kecamatan Bebesen,  
              Kabupaten Aceh Tengah, Aceh 24471, Indonesia.
            </p>

            {/* <p className="text-sm text-blue-200">
              © {new Date().getFullYear()}  
              <span className="block">
                Direktorat Jenderal Imigrasi  
                Kementerian Imigrasi dan Pemasyarakatan RI
              </span>
            </p> */}
          </div>

          {/* Google Maps */}
          <div className="w-full h-[250px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Kantor Imigrasi Takengon"
              src="https://www.google.com/maps?q=Kantor+Imigrasi+Takengon&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Garis Bawah */}
        <div className="border-t border-blue-700 mt-8 pt-4 text-center text-sm text-blue-200">
          Copyright © 2026 TIM TI Inteldakim Kantor Imigrasi Takengon 
        </div>
      </div>
    </footer>
  );
}

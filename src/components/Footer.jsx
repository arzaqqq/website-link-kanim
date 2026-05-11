import React from "react";
import { MapPin, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#084469] text-white">
      <div className="container max-w-6xl mx-auto px-4 py-10">

        {/* GRID UTAMA */}
        <div className="grid gap-10 lg:grid-cols-3 items-start">

          {/* INFORMASI KANTOR */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 leading-snug">
              Kantor Imigrasi Kelas III Non-TPI Takengon
            </h3>

            <div className="flex items-start gap-3 text-blue-100">
              <MapPin size={18} className="mt-1 shrink-0" />

              <p className="text-sm leading-relaxed">
                Jalan Pengulu Gayo, Desa Kebet, Kecamatan Bebesen,
                Kabupaten Aceh Tengah, Aceh 24471, Indonesia.
              </p>
            </div>
          </div>

          {/* DOWNLOAD M-PASPOR */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">

            {/* HEADER */}
            <div className="flex items-center gap-2 mb-3">
              <Download size={22} />

              <h3 className="text-xl font-semibold">
                Download M-Paspor
              </h3>
            </div>

            {/* DESKRIPSI */}
            <p className="text-sm text-blue-100 leading-relaxed mb-6">
              Unduh aplikasi M-Paspor untuk melakukan pendaftaran
              paspor secara online dengan mudah, cepat, dan aman
              langsung dari smartphone Anda.
            </p>

            {/* BUTTON DOWNLOAD */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">

              {/* GOOGLE PLAY */}
              <a
                href="https://play.google.com/store/apps/details?id=id.go.imigrasi.paspor_online&hl=id&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-auto sm:w-auto"
              >
                <div className="flex items-center justify-center sm:justify-start rounded-xl transition-all duration-300 hover:scale-[1.03]">

                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Download di Google Play"
                    className="w-44 sm:h-14 md:h-16 sm:w-auto object-contain"
                  />
                </div>
              </a>

              {/* APP STORE */}
              <a
                href="https://apps.apple.com/id/app/m-paspor/id1576336459"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-auto sm:w-auto"
              >
                <div className="flex items-center justify-center sm:justify-end rounded-xl transition-all duration-300 hover:scale-[1.03]">

                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download di App Store"
                    className=" w-44 sm:h-14 md:h-16 sm:w-auto object-contain"
                  />
                </div>
              </a>

            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div className="w-full h-[260px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Lokasi Kantor Imigrasi Takengon"
              src="https://www.google.com/maps?q=Kantor+Imigrasi+Takengon&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-blue-700 mt-10 pt-5 text-center text-sm text-blue-200">
          Copyright © 2026 TIM TI Inteldakim Kantor Imigrasi Takengon
        </div>

      </div>
    </footer>
  );
}
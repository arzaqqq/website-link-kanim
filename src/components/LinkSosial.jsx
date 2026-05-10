import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    description: "Ikuti, Suka, Komen, Bagikan! 🔥",
    url: "https://www.instagram.com/imigrasi_takengon",
    image: "/images/instagram.png",
  },
  {
    name: "Tik Tok",
    description: "Kantor Imigrasi Takengon",
    url: "https://www.tiktok.com/@imigrasi_takengon",
    image: "/images/tiktok.png",
  },
  {
    name: "Facebook",
    description: "Informasi & Layanan Publik",
    url: "https://www.facebook.com/kanimtakengon",
    image: "/images/facebook.png",
  },
  {
    name: "youtube",
    description: "Layanan Informasi & Pengaduan",
    url: "https://www.youtube.com/channel/UCLMa2pFfEK2irYHZ2NXMEJQ",
    image: "/images/youtube.png",
  },
  {
    name: "Website Kementerian Imigrasi Takengon",
    description: "Portal Layanan Keimigrasian",
    url: "https://takengon.imigrasi.go.id/",
    image: "/images/internet.png",
  },
  {
  name: "Email Resmi Imigrasi Takengon",
  description: "Untuk keperluan surat-menyurat dan informasi resmi",
  url: "mailto:imigrasi.takengon2@gmail.com",
  image: "/images/email.png",
  }

];

export default function Link() {
  return (
    <section className="mt-20" id="link">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        {/* HEADER */}
<div className="relative text-center mb-14 overflow-hidden">

  {/* BACKGROUND BLUR */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-72 h-72 bg-[#0b5481]/10 blur-3xl rounded-full" />
  </div>

  {/* TOP ORNAMENT */}
  <div className="flex justify-center mb-4">
    <div className="px-5 py-1 rounded-full border border-[#0b5481]/20 bg-[#0b5481]/5 backdrop-blur-sm">
      <span className="text-sm tracking-widest text-[#0b5481] font-semibold uppercase">
        Kantor Imigrasi Kelas III Non TPI Takengon
      </span>
    </div>
  </div>

  {/* FRAME */}
  <div className="relative inline-block px-8">

    {/* KERAWANG GAYO ORNAMENT */}
    <div className="absolute top-0 left-0 w-14 h-14 border-l-4 border-t-4 border-[#0b5481]/70 rounded-tl-2xl" />
    <div className="absolute top-0 right-0 w-14 h-14 border-r-4 border-t-4 border-[#0b5481]/70 rounded-tr-2xl" />
    <div className="absolute bottom-0 left-0 w-14 h-14 border-l-4 border-b-4 border-[#0b5481]/70 rounded-bl-2xl" />
    <div className="absolute bottom-0 right-0 w-14 h-14 border-r-4 border-b-4 border-[#0b5481]/70 rounded-br-2xl" />

    {/* TITLE */}
    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
      Informasi Lebih Lanjut
    </h1>

    {/* LINE */}
    <div className="w-28 h-1 bg-gradient-to-r from-[#0b5481] to-cyan-400 rounded-full mx-auto mt-5 mb-4" />

    {/* SUBTITLE */}
    <p className="text-md md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Kunjungi dan ikuti media informasi resmi untuk mendapatkan
      layanan dan pembaruan terbaru seputar keimigrasian.
    </p>
  </div>
</div>

        {/* Cards */}
        <div className="flex grid md:grid-cols-2 gap-5">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4  border-b-5 border-[#084469] rounded-2xl
                         hover:shadow-lg transition bg-white"
            >
              {/* Icon / Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-contain"
              />

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

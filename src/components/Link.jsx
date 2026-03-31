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
    <section className="mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Informasi lebih lanjuti
          </h1>
          <p className="text-lg md:text-2xl mt-3 text-gray-600">
            Kunjungi & Ikuti kami
          </p>
        </div>

        {/* Cards */}
        <div className="flex grid md:grid-cols-2 gap-5">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 border border-b-5 border-[#084469] rounded-2xl
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

import React, { useEffect, useState } from "react";

const videos = [
  "/video/video-kanim1.mp4",
  // "/video/video2.mp4",
];

const Beranda = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        key={videos[videoIndex]}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[videoIndex]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl  md:text-7xl font-bold">
          Selamat Datang
        </h1>

        <p className="text-lg md:text-2xl mt-4 max-w-3xl">
          Website Link Bio Resmi  
          Kantor Imigrasi Kelas III Non-TPI Takengon
        </p>

        <div className="md:flex gap-6 mt-10">
          <a
            href="https://api.whatsapp.com/send?phone=628116701190"
            target="_blank"
            className=" px-8 py-3 flex justify-center w-[300px] border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Hubungi Kami
          </a>

         <a
          href="#Link"
          className="  group flex justify-center w-[300px] items-center gap-2 px-8 py-3 border border-white rounded-full 
                    text-white hover:bg-white hover:text-black transition mt-5 md:mt-0"
        >
          Lebih Lanjut
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transition-transform mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>

        </div>
      </div>
    </div>
  );
};

export default Beranda;

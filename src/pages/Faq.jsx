import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      tanya: "Bagaimana cara membuat paspor baru?",
      jawab: "Anda perlu mendaftar melalui aplikasi M-Paspor, kemudian membawa KTP, KK, dan akta kelahiran ke kantor imigrasi."
    },
    {
      tanya: "Berapa biaya pembuatan paspor?",
      jawab: "Biaya paspor biasa 48 halaman adalah Rp350.000, sedangkan e-paspor adalah Rp650.000."
    },
    {
      tanya: "Berapa lama proses penyelesaian paspor?",
      jawab: "Prosesnya memakan waktu sekitar 3 sampai 4 hari kerja setelah sesi wawancara dan pembayaran."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Nav />
      <div className="max-w-3xl mx-auto px-4 py-8 font-sans mt-20">
        
        {/* Tombol Kembali di atas judul, sebelah kanan */}
        <div className="flex justify-start mb-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-[#003366] font-medium transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">&#60;</span>
            <span>Kembali</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-600 cursor-pointer shadow-sm
                  ${isActive ? 'bg-[#003366] border-[#003366]' : 'bg-white border-gray-200 hover:border-gray-300'}`}
                onClick={() => toggleFaq(index)}
              >
                {/* Bagian Pertanyaan */}
                <div className="flex justify-between items-center p-5">
                  <span className={`font-semibold text-lg ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {item.tanya}
                  </span>
                  <span className={`text-xl transition-transform duration-600 ${isActive ? 'text-white rotate-180' : 'text-gray-400'}`}>
                    {isActive ? '−' : '+'}
                  </span>
                </div>

                {/* Bagian Jawaban */}
                <div 
                  className={`transition-all duration-600 ease-in-out overflow-hidden
                    ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className={`p-5 pt-0 border-t border-white/10 leading-relaxed ${isActive ? 'text-gray-100' : 'text-gray-600'}`}>
                    {item.jawab}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
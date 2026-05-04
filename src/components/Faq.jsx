import React, { useState, useMemo } from 'react';
import { FiSearch, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    category: 'Paspor RI',
    question: 'Apa syarat untuk pengurusan paspor anak?',
    answer:
      'Untuk paspor anak (di bawah 17 tahun), persyaratannya meliputi: KTP kedua orang tua, Kartu Keluarga, Akta Kelahiran anak, Buku Nikah/Akta Perkawinan orang tua, Paspor lama anak (jika ada), dan kehadiran kedua orang tua saat wawancara.',
  },
  {
    id: 2,
    category: 'Paspor RI',
    question: 'Apa saja syarat untuk penggantian paspor?',
    answer:
      'Untuk penggantian paspor biasa, syarat utamanya adalah KTP Elektronik dan Paspor lama.',
  },
  {
    id: 3,
    category: 'Biaya & Pembayaran',
    question: 'Berapa Biaya membuat paspor?',
    answer:
      'Paspor biasa Rp350.000 dan e-Paspor Rp650.000.',
  },
  {
    id: 4,
    category: 'Visa & Izin Tinggal',
    question:
      'Apakah dokumen persyaratan paspor bisa digantikan oleh dokumen lain?',
    answer:
      'Secara umum tidak, dokumen utama wajib asli.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className={`mb-4 rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'bg-[#0b5481] border-[#0b5481] shadow-lg scale-[1.01]'
          : 'bg-white border-blue-100 hover:shadow-md'
      }`}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span
          className={`font-semibold ${
            isOpen ? 'text-white' : 'text-gray-800'
          }`}
        >
          {faq.question}
        </span>

        {isOpen ? (
          <FiMinus className="text-white text-xl" />
        ) : (
          <FiPlus className="text-gray-400 text-xl" />
        )}
      </button>

      {/* Answer Animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="p-5 border-t border-blue-500 bg-[#0b5481]">
              <p className="text-white text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState(null);

  const filteredFaq = useMemo(() => {
    return faqData.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className=" py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            FAQ
          </h2>
          <p className="text-gray-500">
            Pertanyaan dan Jawaban Layanan Keimigrasian
          </p>
        </div>

        {/* HIGHLIGHT BOX */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white shadow-md border border-blue-100 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-[#0b5481] mb-2">
              Butuh Bantuan?
            </h3>
            <p className="text-gray-600 text-sm">
              Temukan jawaban cepat seputar layanan paspor, visa, dan keimigrasian.
            </p>
          </div>
        </div>

        {/* STATS */}
        {/* <div className="flex justify-center gap-10 mb-10 flex-wrap">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#0b5481]">50+</p>
            <p className="text-xs text-gray-500">Pertanyaan</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#0b5481]">24 Jam</p>
            <p className="text-xs text-gray-500">Respon</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#0b5481]">100%</p>
            <p className="text-xs text-gray-500">Gratis</p>
          </div>
        </div> */}

        {/* SEARCH */}
        <div className="relative mb-8">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            className="w-full pl-12 pr-4 py-4 border border-blue-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#0b5481] outline-none bg-white"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOpenId(null);
            }}
          />
        </div>

        {/* FAQ LIST */}
        {filteredFaq.length > 0 ? (
          filteredFaq.map(faq => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
            />
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            Tidak ditemukan hasil
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
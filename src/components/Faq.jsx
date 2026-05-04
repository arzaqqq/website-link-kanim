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
      className={`mb-3 rounded-xl border transition ${
        isOpen
          ? 'bg-[#0b5481] border-[#0b5481]'
          : 'bg-gray-50 border-blue-900'
      }`}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span className={`font-semibold ${isOpen ? 'text-white' : 'text-gray-800'}`}>
          {faq.question}
        </span>

        {isOpen ? (
          <FiMinus className="text-white text-xl" />
        ) : (
          <FiPlus className="text-gray-400 text-xl" />
        )}
      </button>

      {/* Answer dengan Animasi */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-5 border-t border-blue-500 bg-[#0b5481]">
              <p className="text-white text-sm md:text-base">
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
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', ...new Set(faqData.map(item => item.category))];

  const filteredFaq = useMemo(() => {
    return faqData.filter(item => {
      const matchSearch =
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        activeCategory === 'Semua' || item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
   <>
   
   <div className="max-w-5xl mx-auto px-4 pt-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">FAQ</h2>
        <p className="text-gray-500">
          Pertanyaan dan Jawaban Layanan Keimigrasian
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari pertanyaan..."
          className="w-full pl-12 pr-4 py-4 border-2 border-blue-900 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setOpenId(null);
          }}
        />
      </div>

      {/* Filter */}
      {/* <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenId(null);
            }}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === cat
                ? 'bg-[#0b5481] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* FAQ */}
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
   </>
    
    
  );
};

export default FAQ;
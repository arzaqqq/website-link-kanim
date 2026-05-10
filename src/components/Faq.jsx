import React, { useState, useMemo } from 'react';
import { FiSearch, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    category: 'Paspor RI',
    question: 'Berapa rincian biaya resmi pembuatan paspor elektronik?',
    answer:
      '- Paspor Elektronik (10 Tahun): Rp950.000\n- Paspor Elektronik (5 Tahun): Rp650.000',
  },
  {
    id: 2,
    category: 'Paspor RI',
    question:
      'Apa syarat untuk pengurusan paspor baru atau penggantian paspor?',
    answer:
      'Syarat untuk pengurusan paspor adalah dengan menyiapkan KTP Elektronik, Kartu Keluarga, dan didukung oleh dokumen akta lahir/buku nikah/ijazah asli beserta fotokopi.\n\nUntuk penggantian paspor lama keluaran tahun 2009 ke atas cukup dengan membawa KTP Elektronik dan paspor lama.',
  },
  {
    id: 3,
    category: 'Paspor RI',
    question: 'Apa syarat untuk pengurusan paspor anak?',
    answer:
      'Untuk pengurusan paspor anak (usia di bawah 17 tahun), dokumen asli dan fotokopi yang harus disiapkan adalah:\n\n' +
      '1. KTP asli kedua orang tua (Ayah dan Ibu).\n' +
      '2. Kartu Keluarga (KK).\n' +
      '3. Akta Kelahiran anak.\n' +
      '4. Buku Nikah atau Akta Perkawinan orang tua.\n' +
      '5. Paspor lama anak (jika sudah pernah punya sebelumnya).\n\n' +
      'Catatan Penting: Kedua orang tua wajib hadir mendampingi anak saat proses wawancara di Kantor Imigrasi.',
  },
  {
  id: 4,
  category: 'Biaya & Pembayaran',
  question: 'Berapa biaya membuat paspor?',
  answer:
    '- Paspor Non Elektronik (5 Tahun): Rp350.000\n' +
    '- Paspor Non Elektronik (10 Tahun): Rp650.000\n' +
    '- Paspor Elektronik / e-Paspor (5 Tahun): Rp650.000\n' +
    '- Paspor Elektronik / e-Paspor (10 Tahun): Rp950.000',
},

{
  id: 5,
  category: 'Paspor RI',
  question:
    'Apakah dokumen persyaratan paspor bisa digantikan oleh dokumen lain?',
  answer:
    'Secara umum dokumen utama wajib asli dan lengkap. Jika data seperti nama, tempat lahir, atau tanggal lahir tidak tercantum pada dokumen utama, pemohon dapat melampirkan surat keterangan dari instansi yang berwenang.',
},

{
  id: 6,
  category: 'Biaya & Pembayaran',
  question:
    'Apakah ada layanan agar paspor selesai di hari yang sama?',
  answer:
    'Ada. Layanan Percepatan Paspor selesai pada hari yang sama dikenakan biaya Rp1.000.000.\n\nBiaya tersebut belum termasuk biaya buku paspor.',
},

{
  id: 7,
  category: 'Biaya & Pembayaran',
  question:
    'Berapa denda jika paspor hilang atau rusak?',
  answer:
    '- Denda paspor hilang: Rp1.000.000\n' +
    '- Denda paspor rusak: Rp500.000\n' +
    '- Paspor hilang/rusak karena keadaan kahar: Rp0',
},

{
  id: 8,
  category: 'Paspor RI',
  question:
    'Apa perbedaan paspor elektronik dan non elektronik?',
  answer:
    'Paspor elektronik (e-Paspor) memiliki chip elektronik yang menyimpan data biometrik pemegang paspor sehingga lebih aman dan mendukung fasilitas autogate di beberapa negara dan bandara tertentu.',
},

{
  id: 9,
  category: 'Paspor RI',
  question:
    'Bagaimana cara mengajukan permohonan paspor?',
  answer:
    'Permohonan paspor dapat dilakukan melalui aplikasi M-Paspor atau secara manual di Kantor Imigrasi dengan membawa dokumen persyaratan yang lengkap.',
},
  {
  id: 10,
  category: 'Visa & Izin Tinggal',
  question: 'Apa itu Izin Tinggal Kunjungan (ITK)?',
  answer:
    'Izin Tinggal Kunjungan (ITK) adalah izin tinggal yang diberikan kepada Orang Asing yang masuk ke Indonesia menggunakan Visa Kunjungan, Visa on Arrival (VoA), Bebas Visa Kunjungan, atau dalam keadaan tertentu sesuai ketentuan imigrasi.',
},

{
  id: 11,
  category: 'Visa & Izin Tinggal',
  question: 'Siapa saja yang dapat memperoleh Izin Tinggal Kunjungan (ITK)?',
  answer:
    '- Pemegang Visa Kunjungan\n- Pemegang Visa on Arrival (VoA)\n- Pengguna Bebas Visa Kunjungan\n- Awak alat angkut\n- Orang asing dalam keadaan darurat\n- Anak yang lahir di Indonesia dari orang tua pemegang ITK',
},
{
  id: 12,
  category: 'Paspor RI',
  question:
    'Apa saja tahapan pembuatan paspor di Kantor Imigrasi?',
  answer:
    '- Pemeriksaan dokumen\n' +
    '- Pembayaran biaya paspor\n' +
    '- Pengambilan foto dan sidik jari\n' +
    '- Wawancara\n' +
    '- Verifikasi dan adjudikasi',
},

{
  id: 13,
  category: 'Biaya & Pembayaran',
  question:
    'Di mana dan bagaimana cara membayar biaya paspor?',
  answer:
    'Pembayaran dilakukan menggunakan kode billing yang didapat setelah pendaftaran di aplikasi M-Paspor.\n\nPembayaran dapat dilakukan melalui:\n- ATM\n- Mobile Banking\n- Teller Bank\n- Kantor Pos',
},

{
  id: 14,
  category: 'Paspor RI',
  question:
    'Apakah paspor bisa berlaku hingga 10 tahun?',
  answer:
    'Ya. Paspor Republik Indonesia tersedia dengan masa berlaku 5 tahun dan 10 tahun sesuai jenis paspor yang dipilih.',
},

{
  id: 15,
  category: 'Paspor RI',
  question:
    'Apakah pengajuan paspor wajib menggunakan aplikasi M-Paspor?',
  answer:
    'Disarankan menggunakan aplikasi M-Paspor untuk pendaftaran dan antrean online, namun dalam kondisi tertentu permohonan juga dapat dilakukan secara manual di Kantor Imigrasi.',
},

{
  id: 16,
  category: 'Visa & Izin Tinggal',
  question: 'Apakah Visa on Arrival (VoA) bisa diperpanjang?',
  answer:
    'Ya. Visa on Arrival (VoA) dengan indeks Visa B dapat diperpanjang satu kali selama 30 hari sehingga total masa tinggal menjadi paling lama 60 hari.',
},

{
  id: 17,
  category: 'Visa & Izin Tinggal',
  question: 'Berapa lama masa berlaku Visa on Arrival (VoA)?',
  answer:
    '- VoA Indeks Visa B: 30 hari dan dapat diperpanjang 1 kali\n- VoA Indeks Visa F: 7 hari dan tidak dapat diperpanjang',
},

{
  id: 18,
  category: 'Visa & Izin Tinggal',
  question: 'Berapa lama masa tinggal Visa Kunjungan Satu Kali Perjalanan?',
  answer:
    'Visa Kunjungan Satu Kali Perjalanan (Single Entry Visa/Indeks C) diberikan selama 60 hari dan dapat diperpanjang hingga total masa tinggal paling lama 180 hari.',
},

{
  id: 19,
  category: 'Visa & Izin Tinggal',
  question: 'Apa syarat dokumen untuk perpanjangan ITK?',
  answer:
    '- Paspor atau dokumen perjalanan yang masih berlaku\n- Surat penjaminan dari penjamin (jika ada)\n- Surat pernyataan tujuan berada di Indonesia',
},

{
  id: 20,
  category: 'Visa & Izin Tinggal',
  question: 'Kapan pengajuan perpanjangan ITK dapat dilakukan?',
  answer:
    'Perpanjangan ITK dapat diajukan paling cepat 14 hari sebelum masa berlaku ITK berakhir dan paling lambat sebelum izin tinggal habis.',
},

{
  id: 21,
  category: 'Visa & Izin Tinggal',
  question: 'Berapa lama proses perpanjangan Izin Tinggal Kunjungan?',
  answer:
    'Proses perpanjangan ITK diselesaikan paling lama 3 hari kerja setelah pembayaran diterima. Untuk negara Calling Visa paling lama 5 hari kerja.',
},

{
  id: 22,
  category: 'Visa & Izin Tinggal',
  question: 'Berapa biaya resmi perpanjangan ITK?',
  answer:
    '- ITK 30 Hari: Rp500.000\n- ITK 60 Hari: Rp2.000.000\n- ITK 180 Hari: Rp6.000.000',
},

{
  id: 23,
  category: 'Visa & Izin Tinggal',
  question: 'Apakah pemohon dianggap overstay jika pembayaran dilakukan sebelum ITK berakhir?',
  answer:
    'Tidak. Orang Asing tidak dianggap overstay apabila pembayaran biaya perpanjangan ITK dilakukan sebelum masa berlaku ITK berakhir.',
},
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className={`mb-4 rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'bg-[#0b5481] border-[#0b5481] shadow-lg scale-[1.01]'
          : 'bg-white hover:shadow-md border-b-[3px] border-[#084469]'
      }`}
    >
      {/* QUESTION */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 p-5 text-left"
      >
        <span
          className={`font-semibold text-sm md:text-base ${
            isOpen ? 'text-white' : 'text-gray-800'
          }`}
        >
          {faq.question}
        </span>

        {isOpen ? (
          <FiMinus className="text-white text-xl shrink-0" />
        ) : (
          <FiPlus className="text-gray-400 text-xl shrink-0" />
        )}
      </button>

      {/* ANSWER */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 border-t border-blue-400 bg-[#0b5481]">
              <p className="text-white text-sm md:text-base leading-relaxed whitespace-pre-line">
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

  // CATEGORY LIST
  const categories = [
    'Semua',
    ...new Set(faqData.map(item => item.category)),
  ];

  // FILTER FAQ
  const filteredFaq = useMemo(() => {
    return faqData.filter(item => {
      const matchSearch =
        item.question
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.answer
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchCategory =
        activeCategory === 'Semua' ||
        item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            FAQ
          </h2>

          <p className="text-lg md:text-2xl text-gray-500">
            Pertanyaan dan Jawaban Layanan Keimigrasian
          </p>
        </div>

        {/* INFO BOX */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white shadow-lg border-b-[5px] border-blue-700 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-[#0b5481] mb-2">
              Butuh Bantuan?
            </h3>

            <p className="text-gray-600 text-sm">
              Temukan jawaban cepat seputar layanan paspor,
              visa, dan keimigrasian.
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mb-6">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOpenId(null);
            }}
            className="w-full pl-12 pr-4 py-4 border-2 border-blue-700 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#0b5481] outline-none bg-white"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map(category => (
           <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenId(null);
              }}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#0b5481] text-white shadow-md'
                  : 'bg-white border border-gray-300 text-gray-600 hover:border-[#0b5481]'
              }`}
            >
              {category}
            </button>
          ))}
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
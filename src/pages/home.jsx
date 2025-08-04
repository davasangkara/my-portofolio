import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaRocket } from 'react-icons/fa';

export default function Home() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-b from-[#EDE9FE] via-white to-[#EDE9FE] 
                 text-center px-4"
    >
      {/* Profile Image */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src="/images/dava.jpg" 
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                     rounded-full shadow-2xl border-4 border-[#C4B5FD] 
                     transition-transform duration-300 group-hover:scale-105"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#C4B5FD] opacity-20 blur-2xl group-hover:opacity-30 transition"></div>
      </motion.div>

      {/* Heading */}
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4338CA] mt-6 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Hi, Saya <span className="text-[#5B21B6]">M Daffa Alfikri</span>
      </motion.h1>

      {/* Description */}
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mb-6 leading-relaxed px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Seorang <span className="text-[#5B21B6] font-semibold">Frontend Developer</span> 
        dan <span className="text-[#5B21B6] font-semibold">Mahasiswa Informatika</span> 
        yang berfokus pada pembuatan aplikasi web dan mobile dengan desain elegan, 
        pengalaman pengguna yang menyenangkan, serta performa yang tangguh.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.a 
          href="#projects" 
          className="px-5 sm:px-6 py-3 bg-[#5B21B6] text-white rounded-lg shadow-md 
                     hover:bg-[#4C1D95] transition flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaRocket /> Lihat Proyek Saya
        </motion.a>
        <motion.a 
          href="/cv.pdf" 
          download="CV_M_Daffa_Alfikri.pdf"
          className="px-5 sm:px-6 py-3 bg-white text-[#4338CA] rounded-lg border 
                     border-[#4338CA] shadow-sm hover:bg-[#F3F4F6] 
                     transition flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> Download CV
        </motion.a>
      </motion.div>
    </section>
  );
}

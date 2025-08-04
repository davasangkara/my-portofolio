import React from "react";
import { motion } from "framer-motion";

const projects = [
  
  {
    title: "Forum Diskusi Mahasiswa",
    desc: "Aplikasi mobile forum diskusi dengan sistem voting cerdas berbasis Firebase.",
    img: "/images/forum.jpg",
    link: "https://github.com/username/forum-diskusi",
  },
  {
    title: "Aplikasi Kesehatan Fisik",
    desc: "Aplikasi pelacakan aktivitas fisik dengan fitur monitoring detak jantung.",
    img: "/images/kesehatan.jpg",
    link: "https://github.com/pemweb9/FetalHealth.git",
  },
  {
    title: "Aplikasi Kasir",
    desc: "Aplikasi kasir berbasis web menggunakan Flask dan database.",
    img: "/images/kasir.jpg",
    link: "https://github.com/username/aplikasi-kasir",
  },
  {
    title: "Website Desa",
    desc: "Website untuk pengelolaan informasi dan layanan digital desa.",
    img: "/images/desa.jpg",
    link: "https://github.com/username/website-desa",
  },
  {
    title: "Klasifikasi Image Buah - CNN",
    desc: "Model Convolutional Neural Network (CNN) untuk klasifikasi jenis buah.",
    img: "/images/buah.jpg",
    link: "https://github.com/davasangkara/Classification_Fruits.git",
  },
  {
    title: "Klasifikasi Real Estate - ANN",
    desc: "Artificial Neural Network (ANN) untuk mengklasifikasikan harga dan jenis properti.",
    img: "/images/real.jpg",
    link: "https://github.com/davasangkara/Real-Estate-Prediction---ANN.git",
  },
  {
    title: "Skin Tone Detector - CNN",
    desc: "Model CNN untuk mendeteksi dan mengelompokkan warna kulit manusia.",
    img: "/images/skintone.jpg",
    link: "https://github.com/davasangkara/skintonee.git",
  },
  {
    title: "Market Analysis",
    desc: "Analisis asosiasi pasar (MBA) untuk menemukan pola pembelian konsumen.",
    img: "/images/market_mba.jpg",
    link: "https://github.com/username/market-analysis",
  },
  {
    title: "Klasifikasi Penyakit Jantung - ANN",
    desc: "Artificial Neural Network (ANN) untuk mengklasifikasikan risiko penyakit jantung.",
    img: "/images/jantung.jpg",
    link: "https://github.com/davasangkara/Association_Market_Analyst_MBA.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-[#E6E9FF] to-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-[#4338CA] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Proyek Saya
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl border 
                       border-[#EDE9FE] overflow-hidden transition transform 
                       hover:scale-105 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="aspect-video w-full">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                />
              </div>
            </a>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-[#5B21B6]">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
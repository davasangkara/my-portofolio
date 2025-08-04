import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "UI/UX Fundamentals",
    img: "/images/1.png",
    link: "https://example.com/certificate/ml",
    download: "/certificates/cert_ui/ux.pdf",
  },
  {
    title: "Frontend Development with React.js",
    img: "/images/2.png",
    link: "https://example.com/certificate/react",
    download: "/certificates/cert_react.pdf",
  },
  {
    title: "Market MBA",
    img: "/images/3.png",
    link: "https://example.com/certificate/python",
    download: "/certificates/cert_python.pdf",
  },
  {
    title: "English Score",
    img: "/images/4.jpg",
    link: "https://example.com/certificate/python",
    download: "/certificates/cert_python.pdf",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-white to-[#E6E9FF]"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-[#4338CA] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Sertifikat & Penghargaan
      </motion.h2>

      {/* Grid Certificates */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl 
                       border border-[#EDE9FE] overflow-hidden 
                       transition transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            onClick={() => setSelected(cert)}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#5B21B6]">
                {cert.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 text-2xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-[#4338CA] mb-4">
              {selected.title}
            </h3>
            <div className="flex gap-4">
              <a
                href={selected.download}
                download
                className="px-4 py-2 bg-[#5B21B6] text-white rounded-lg flex items-center gap-2 hover:bg-[#4C1D95]"
              >
                <FaDownload /> Download
              </a>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-[#4338CA] rounded-lg border 
                           border-[#4338CA] flex items-center gap-2 hover:bg-[#F3F4F6]"
              >
                <FaExternalLinkAlt /> Lihat Online
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

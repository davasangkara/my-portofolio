import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Proyek", href: "#projects" },
    { name: "Sertifikat", href: "#certificates" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md 
                 shadow-md z-50 transition-colors"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.h1
          className="text-2xl font-bold text-[#4338CA] dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          M Daffa Alfikri
        </motion.h1>

        <ul className="flex gap-6 text-[#4338CA] dark:text-white font-medium">
          {links.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href={link.href}
                className="hover:text-[#5B21B6] dark:hover:text-purple-300 transition"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

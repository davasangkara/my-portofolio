import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const text = `Halo, saya ${name} (${email}).%0A%0A${message}`;
    const phoneNumber = "6283816164817"; 
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 
                 bg-gradient-to-b from-[#EDE9FE] to-white"
    >
      <motion.h2
        className="text-4xl font-bold text-[#4338CA] mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Hubungi Saya
      </motion.h2>

      <motion.form
        onSubmit={handleWhatsApp}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border 
                   border-[#EDE9FE] space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <input id="name" type="text" placeholder="Nama Anda"
          className="w-full p-3 rounded-lg border border-[#DDD6FE] focus:ring-2 focus:ring-[#C4B5FD]" />
        <input id="email" type="email" placeholder="Email Anda"
          className="w-full p-3 rounded-lg border border-[#DDD6FE] focus:ring-2 focus:ring-[#C4B5FD]" />
        <textarea id="message" placeholder="Pesan" rows="4"
          className="w-full p-3 rounded-lg border border-[#DDD6FE] focus:ring-2 focus:ring-[#C4B5FD]" />
        <button type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-lg shadow-md 
                     hover:bg-green-600 transition flex items-center justify-center gap-2 animate-bounce">
          <FaWhatsapp /> Kirim via WhatsApp
        </button>
      </motion.form>

      <motion.div
        className="mt-6 flex gap-6 text-[#5B21B6] text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <a href="#" className="hover:text-[#0077B5]" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/davasangkara" className="hover:text-black" title="GitHub"><FaGithub /></a>
        <a href="https://www.instagram.com/davandaa_/profilecard/?igsh=MWRocTRoZmlocjdqeg==" className="hover:text-[#E1306C]" title="Instagram"><FaInstagram /></a>
        <a href="mailto:mdaffalfikri26.com" className="hover:text-red-500" title="Email"><FaEnvelope /></a>
      </motion.div>
    </section>
  );
}

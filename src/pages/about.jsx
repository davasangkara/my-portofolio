import React from "react";
import { motion } from "framer-motion";
import { FaPhp, FaPython, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiKotlin, SiFlutter, SiJupyter } from "react-icons/si";

export default function About() {
  const skills = [
    { icon: <FaPhp size={40} color="#777BB4" />, name: "PHP" },
    { icon: <SiKotlin size={40} color="#7F52FF" />, name: "Kotlin" },
    { icon: <SiFlutter size={40} color="#02569B" />, name: "Flutter" },
    { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
    { icon: <FaJs size={40} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact size={40} color="#61DAFB" />, name: "React.js" },
    { icon: <SiJupyter size={40} color="#F37626" />, name: "Jupyter Notebook" },
    { icon: <FaGitAlt size={40} color="#F05032" />, name: "Git" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 
                 bg-gradient-to-b from-white to-[#E6E9FF] text-center"
    >
      <motion.h2
        className="text-4xl font-bold text-[#4338CA] mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Tentang Saya
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Saya adalah seorang <span className="text-[#5B21B6] font-semibold">mahasiswa 
        Informatika</span> yang berfokus pada pengembangan aplikasi web dan mobile 
        dengan desain modern, pengalaman pengguna yang intuitif, dan performa yang 
        tangguh. Saya memiliki kemampuan dalam berbagai bahasa pemrograman dan 
        framework seperti <span className="text-[#5B21B6] font-semibold">PHP, Kotlin, Flutter, 
        Python, JavaScript, dan React.js</span>. 

        Selain itu, saya juga berpengalaman dalam analisis data dan machine learning 
        menggunakan <span className="text-[#5B21B6] font-semibold">Jupyter Notebook</span>, 
        serta menguasai manajemen versi dan kolaborasi proyek menggunakan 
        <span className="text-[#5B21B6] font-semibold"> Git</span>. Dengan keterampilan ini, 
        saya berkomitmen untuk terus berkembang dan menciptakan solusi teknologi 
        yang bermanfaat.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow 
                       hover:shadow-lg border border-[#EDE9FE] cursor-pointer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {skill.icon}
            <span className="mt-2 text-[#4338CA] font-semibold">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

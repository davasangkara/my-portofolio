import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#EDE9FE] border-t border-[#DDD6FE] text-center py-4 text-gray-700 hover:text-[#5B21B6] transition">
      © {new Date().getFullYear()} M Daffa Alfikri. Dibuat dengan ❤️ dan React.
    </footer>
  );
}

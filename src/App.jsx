import React from 'react';
import Navbar from './components/navbar';
import DarkModeToggle from "./components/darkmodetoogle";
import Home from './pages/home';
import Certificates from "./components/Certificates";
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

export default function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar dengan tombol dark mode */}
      <div className="flex justify-end p-4">
        <DarkModeToggle />
      </div>
      <Navbar />
      
      {/* Sections */}
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 dark:bg-gray-800 dark:text-white mt-10">
        © {new Date().getFullYear()} Daffa. All rights reserved.
      </footer>
    </div>
  );
}

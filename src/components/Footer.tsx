import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#182e4a] px-4 md:px-16 py-6">
      <h1 className="font-bold text-white text-lg md:text-3xl">
        BlueFilms <span className="font-light">&copy; 2023</span>
      </h1>
      <h3 className="text-gray-300 mt-2 text-sm md:text-base">
        Desenvolvido por{" "}
        <a target="_blank" href="https://github.com/matheus-ferreira1">
          @matheus-ferreira1
        </a>
      </h3>
    </footer>
  );
};

export default Footer;

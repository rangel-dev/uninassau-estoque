import React from "react";

const Footer = () => {
    return (
      <footer className="bg-blue-400">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.83 19.2047C37.2352 19.237 36.6469 19.0679 36.16 18.7247..." fill="currentColor" />
            </svg>
          </div>
  
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
            Feito com ❤️ para a comunidade.
          </p>
  
          <nav className="mt-6 flex justify-center gap-6 md:gap-8">
            <a className="text-white transition hover:text-gray-900" href="#">Sobre</a>
            <a className="text-white transition hover:text-gray-900" href="#">Serviços</a>
            <a className="text-white transition hover:text-gray-900" href="#">Contato</a>
          </nav>
  
          <p className="mt-12 text-center    text-sm text-white">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
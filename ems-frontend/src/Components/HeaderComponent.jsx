import React from "react";

export const HeaderComponent = () => {
  return (
    <header className="bg-gradient-to-r from-[#272757] to-[#505081] shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Brand */}
        <h1 className="text-2xl playwrite-us-modern tracking-wide select-none">
          <span className="text-[#8686AC] hover:text-white">Staff</span>
          <span className="text-[#8686AC] hover:text-white">Sync</span>
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/itsnehakv/Employee-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline px-4 py-2 text-sm josefin-sans-link text-white border rounded-md hover:bg-[#8686AC] hover:text-white transition duration-200"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nehakvallappil"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline px-4 py-2 text-sm josefin-sans-link text-white border border-gray-700 rounded-md hover:bg-[#8686AC] transition duration-200"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

// import React from "react";

export const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto py-4 bg-gradient-to-r from-[#272757] to-[#505081] shadow-inner">
      <div className="flex flex-col text-center md:text-left">
        <span className="text-[#b3b3d6] text-sm josefin-sans-link">
          StaffSync — Employee Management Simplified
        </span>
        <br />
        <span className="text-[#9a9ac7] text-xs josefin-sans-link">
          © {year} StaffSync. All Rights Reserved.
        </span>
      </div>
      <div className="mt-2 flex justify-center md:justify-end">
        {/* Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/itsnehakv/Employee-Management-System"
            target="_blank"
            rel="noreferrer"
            className="text-[#b3b3d6] hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nehakvallappil"
            target="_blank"
            rel="noreferrer"
            className="text-[#b3b3d6] hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

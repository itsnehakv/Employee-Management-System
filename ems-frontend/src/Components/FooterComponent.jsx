// import React from "react";

export const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto py-4 bg-gradient-to-r from-[#272757] to-[#505081] shadow-inner fixed bottom-0 w-full">
      <div className="flex flex-col text-center md:text-left">
        <span className="text-[#b3b3d6] text-sm josefin-sans-link">
          StaffSync — Employee Management Simplified
        </span>
        <br />
        <span className="text-[#9a9ac7] text-xs josefin-sans-link">
          © {year} StaffSync. All Rights Reserved.
        </span>
        <div className="flex justify-center gap-6 mt-2">
          <kbd className="px-2 py-1 text-xs font-semibold rounded-md bg-[#3f3f6a] text-[#dcdcff] shadow-sm hover:bg-[#505081] transition">
            <a
              href="https://github.com/itsnehakv/Employee-Management-System"
              target="_blank"
              rel="noreferrer"
              className="text-[#b3b3d6] hover:text-white transition no-underline"
            >
              GitHub
            </a>
          </kbd>

          <kbd className="px-2 py-1 text-xs font-semibold rounded-md bg-[#3f3f6a] text-[#dcdcff] shadow-sm hover:bg-[#505081] transition">
            <a
              href="https://www.linkedin.com/in/nehakvallappil"
              target="_blank"
              rel="noreferrer"
              className="text-[#b3b3d6] hover:text-white transition no-underline"
            >
              LinkedIn
            </a>
          </kbd>
        </div>
      </div>
      <div className="mt-2 flex justify-center md:justify-end">
        {/* Links */}
        <div className="flex gap-4 text-sm"></div>
      </div>
    </footer>
  );
};

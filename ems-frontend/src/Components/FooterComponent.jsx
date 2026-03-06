import React from "react";

export const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className="footer mt-auto py-3">
        <span className="text-muted">
          © {year} StaffSync. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

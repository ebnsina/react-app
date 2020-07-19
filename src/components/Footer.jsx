import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-5">
      <p className="text-center">
        &copy; Ebn Sina &bull; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

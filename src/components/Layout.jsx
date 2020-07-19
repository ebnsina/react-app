import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

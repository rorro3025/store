import { ToastContainer } from "react-toastify";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="page-content">
        <ToastContainer />
        {children}
      </div>
      <Footer />
      <style jsx>
        {`
           {
            .page-content {
              min-height: 700px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Layout;

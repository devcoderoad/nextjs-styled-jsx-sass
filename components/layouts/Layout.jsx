import React from "react";

/* Components */
import NavLeft from './nav/NavLeft';
import NavBar from './nav/NavBar';
import Footer from './foot/Footer';

// components/Layout.js
function Layout(props) {
  return (
    <>
    <div className="page-layout">
      {props.children}      
    </div>
    <Footer/>
    <style jsx global>{` @import "assets/scss/main"; `}</style>
    <style jsx>{`
        .page {
          &-layout {
              height: 100vh;
          }
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
      `}
    </style>
    </>
  );
}

export default Layout;

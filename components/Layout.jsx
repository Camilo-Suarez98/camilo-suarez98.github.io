import { useContext } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "/context/ThemeContext";

const Layout = ({ title, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>{title} - Camilo S</title>
        <link rel="icon" href="/icono-portf.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <meta name="description" content="Explore my project portfolio to discover my experience and skills in software development. Find examples of web sites i have created." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
      </Head>
      <div className={theme === 'light' ? 'dark' : 'light'}>
        <Header />

        <div className="w-3/4 m-auto h-full ls:mt-0 flex flex-col justify-evenly flex-wrap">
          {children}
        </div>

        <Footer />
      </div>
    </div >
  );
};

export default Layout;

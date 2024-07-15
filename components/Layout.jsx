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
        <meta name="description" content="Explore my project portfolio to discover my experience and skills in software development. Find examples of web sites i have created." />
        <link rel="icon" href="/icono-portf.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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

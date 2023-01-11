import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/icono-portf.png"
import React, { useContext, useState } from "react"
import {ThemeContext} from "../context/ThemeContext"

const Layout = ({ title, children }) => {
  const themeMode = useContext(ThemeContext)
  const [dark, setDark] = useState(themeMode)

  return(
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
        <link rel="stylesheet" href="style.css" />
      </Head>
      <div className={dark === '🌞' ? '🌚' : '🌞'}>
        <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-3 mb-10">
          <div className="container px-4 mx-auto flex items-center justify-between sm:flex-col sm:justify-center">
            <div className="relative px-4 sm:w-auto sm:static sm:justify-center">
              <a href="/" className="flex items-center w-40 text-sm font-bold leading-relaxed cursor-pointer inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800">
                <Image className="image" src={logo} alt="Page's logo" width={40} height={40} />
                Camilo Suárez
              </a>
            </div>
            <button onClick={() => {
              setDark(dark === '🌞' ? '🌚' : '🌞')
              }}
            >
              {dark}
            </button>
            
            <button className="burger absolute right-0 top-5 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent hidden outline-none focus:outline-none" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>

            <div className="flex flex-grow items-center sm:justify-center sm:text-center" id="example-navbar-warning">
              <ul className="flex list-none ml-auto sm:flex-col sm:justify-start">
                <li className="nav-item">
                  <Link href="/" title="Home">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/portfolio" title="Portfolio">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75">
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" title="Contact">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="w-full h-full flex flex-col justify-evenly">
          {children}
        </div>
      </div>     
    </div>
  )
}

export default Layout

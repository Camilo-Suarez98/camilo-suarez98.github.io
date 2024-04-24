import { useContext } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import FocusLock from "react-focus-lock";

import { ThemeContext } from "../context/ThemeContext";
import logo from "/public/icono-portf.png";
import BurgerMenu from "./BurgerMenu";
import useToggleMenu from "../utils/useToggleMenu";
import useEscapeKey from "../utils/useEscapeKey";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [value, toggleValue] = useToggleMenu(false);

  useEscapeKey(toggleValue);

  return (
    <nav className="nav-color w-full relative flex flex-wrap items-center justify-between px-2 py-3 ls:pb-0 ls:px-0">
      <div className="container px-12 mx-auto flex items-center justify-between sm:flex-col sm:justify-center ls:px-0">
        <div className="flex relative px-4 sm:w-auto sm:static sm:justify-center">
          <a href="/" className="flex items-center text-sm font-bold leading-relaxed cursor-pointer mr-4 py-2 whitespace-nowrap uppercase text-gray-800 sm:mr-0">
            <Image className="image" src={logo} alt="Page's logo" width={40} height={40} />
          </a>
        </div>

        <button onClick={toggleValue} className="hidden ls:inline burger" type="button">
          <BurgerMenu />
        </button>

        <div className="flex flex-grow items-center z-50 transition justify-end duration-500 sm:justify-center sm:text-center ls:w-full ls:absolute ls:top-12 ls:-bottom-72 ls:m-auto">
          <FocusLock>
            <ul className={!value ? 'ls:hidden flex list-none ml-auto transition-all duration-300' : 'menu-burger fixed inset-0 p-4 list-none ml-auto transition-all duration-300 ls:flex-col sm:justify-start ls:w-full ls:m-auto ls:items-center'}>
              <NavLink href="/" title="Home" />
              <NavLink href="/portfolio" title="Projects" />
              <NavLink href="/contact" title="Contact" />
              <li className="w-full">
                <a
                  href="https://drive.google.com/file/d/15h6n_X03FUTc6x5KbXa-MhcUPUVQ_lXg/view"
                  target="_blank"
                  className="border-resume px-3 py-2 border-2 sm:border-4 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 transition duration-500 hover:text-blue-700 ls:w-full ls:py-5 ls:justify-center"
                >
                  CV
                </a>
              </li>
              <li className="w-full px-3 py-2 flex justify-center items-center">
                <button onClick={toggleTheme}>
                  {theme === 'light' ? '🌝' : '🌚'}
                </button>
              </li>
              {value &&
                <li className="w-full px-3 py-2 flex justify-center items-center">
                  <button
                    className="close-btn flex items-center justify-center gap-2 p-2 cursor-pointer border-none rounded-md"
                    onClick={toggleValue}>
                    <span className="text-xl font-black">X</span> Dismiss
                  </button>
                </li>
              }
            </ul>
          </FocusLock>
        </div>
      </div>
    </nav>
  );
};

export default Header;

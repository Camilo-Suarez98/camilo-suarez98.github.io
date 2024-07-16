import Link from "next/link";

const NavLink = ({ href, children, background }) => {
  return (
    <li className="w-full">
      <Link
        href={href}
        className="px-3 py-2 flex items-center text-sm uppercase font-bold rounded-lg leading-snug text-gray-800 transition duration-500 hover:text-blue-700 ls:w-full ls:py-5 ls:justify-center"
        style={{ backgroundColor: background }}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;

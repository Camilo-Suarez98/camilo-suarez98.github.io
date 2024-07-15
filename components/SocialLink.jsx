import Link from "next/link";

const SocialLink = ({ url = '', icon, socialName }) => {
  return (
    <Link
      href={url}
      className="p-4 link flex flex-col transition-all duration-500" target="_blank"
    >
      <i className={icon}></i>
      {socialName}
    </Link>
  );
};

export default SocialLink;

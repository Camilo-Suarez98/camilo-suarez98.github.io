import Link from "next/link";

const SocialLink = ({ url = '', icon, hoverColor }) => {
  return (
    <Link
      href={url}
      className={`${hoverColor} link px-4 flex flex-col transition-all duration-500`} target="_blank"
    >
      <i className={icon}></i>
    </Link>
  );
};

export default SocialLink;

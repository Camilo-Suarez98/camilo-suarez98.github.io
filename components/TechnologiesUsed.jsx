import Image from "next/image";

const TechnologiesUsed = ({ href, icon, technologyName }) => {
  return (
    <div className="ls:py-4 transition-all duration-300 hover:-translate-y-3">
      <a href={href} target="_blank" className="flex flex-col items-center justify-center ">
        <Image src={icon} width={50} height={50} alt={technologyName} />
        <h3>{technologyName}</h3>
      </a>
    </div>
  );
};

export default TechnologiesUsed;

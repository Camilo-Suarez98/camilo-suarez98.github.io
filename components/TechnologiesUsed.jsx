import Image from "next/image";

const TechnologiesUsed = ({ icon, technologyName }) => {
  return (
    <div className="flex flex-col items-center justify-center ls:py-4 transition-all duration-300 hover:-translate-y-3">
      <Image src={icon} width={50} height={50} alt={technologyName} />
      <h3>{technologyName}</h3>
    </div>
  );
};

export default TechnologiesUsed;

import SocialLink from "./SocialLink";

const Social = () => {
  return (
    <div className="text-gray-800 pb-6 w-full text-center pt-1 flex justify-center ls:mt-6 ls:pt-0 xl:pb-10">
      <div className="socials flex flex-col">
        <SocialLink
          url="https://www.linkedin.com/in/camilosc98/"
          icon="fab fa-linkedin fa-2x icon"
        />
      </div>
      <div className="flex flex-col">
        <SocialLink
          url="https://github.com/Camilo-Suarez98"
          icon="fab fa-github fa-2x icon"
        />
      </div>
    </div>
  );
};

export default Social;

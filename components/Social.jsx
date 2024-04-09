import SocialLink from "./SocialLink";

const Social = () => {
  return (
    <div className="text-gray-800 mt-28 pb-14 w-full text-center flex justify-center ls:mt-6 ls:pt-0 xl:mt-20 xl:pt-24 xl:pb-10">
      <div className="socials flex flex-col">
        <SocialLink
          url="https://www.linkedin.com/in/camilosc98/"
          icon="fab fa-linkedin fa-3x icon"
          socialName="LinkedIn"
        />
      </div>
      <div className="flex flex-col">
        <SocialLink
          url="https://github.com/Camilo-Suarez98"
          icon="fab fa-github fa-3x icon"
          socialName="GitHub"
        />
      </div>
    </div>
  );
};

export default Social;

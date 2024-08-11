import SocialLink from "./SocialLink";

const Social = () => {
  return (
    <div className="text-gray-800 mt-72 pb-6 w-full text-center flex justify-center ls:mt-6 ls:pt-0 xl:pb-10 lg:pt-[42rem]">
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

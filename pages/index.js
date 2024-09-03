import Image from "next/image";

import { IconCloudDemo } from "../components/IconCloudDemo";
import Layout from "../components/Layout";
import Buttons from "../components/Buttons";
import Social from "../components/Social";
import TitlePage from "../components/TitlePage";
import BioDescription from "/components/BioDescription";
import profileImage from "../public/profile.jpeg";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-around items-center h-auto mt-12 w-full ls:h-5/6 md:mt-16 lg:mt-24">
          <div className="flex items-center animate-fadeInTop">
            <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35" height="35" />
            <TitlePage level={1} value="Hi! I'm..." />
          </div>
          <img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=600&height=100&lines=Camilo+Suárez,;FullStack+Developer,;Love+to+learn+new+stuffs..<3" />
          <div className="flex flex-1 flex-row items-center mb-14 lg:flex-col lg:mb-0">
            <div className="shrink">
              <BioDescription />
            </div>
            <div className="lg:animate-none 2xl:animate-fadeInRight">
              <Image
                src={profileImage}
                className="rounded-full"
                alt="Profile Image of Camilo"
              />
            </div>
          </div>
          <Buttons />
        </div>
        <Social />
        <h3 className="text-center text-2xl">Technologies I have used 👨🏻‍💻</h3>
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>
      </Layout>
    </>
  );
};
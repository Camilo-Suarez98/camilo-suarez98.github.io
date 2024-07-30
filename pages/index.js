import Layout from "../components/Layout";
import Buttons from "../components/Buttons";
import Social from "../components/Social";
import TitlePage from "../components/TitlePage";
import { IconCloudDemo } from "../components/IconCloudDemo";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-around items-center mt-12 h-80 w-full ls:h-5/6 md:mt-16 lg:mt-24">
          <div className="flex items-center">
            <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35" height="35" />
            <TitlePage level={1} value="Hi! I'm..." />
          </div>
          <img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=600&height=100&lines=Camilo+Suárez,;Self-taught+Front-End+Developer,;Love+to+learn+new+stuffs..<3" />
          <p className="text-2xl text-gray-500 pb-12 text-center">
            I'm a dedicated Frontend Developer located in Bucaramanga, Col 🇨🇴.
            <br />
            I am always looking for challenges that allow me to keep learning and evolving in this exciting field 💻.
            <br />
            🚀 I specialize in crafting exceptional web experiences, with a focus on user-centric design and robust functionality. My skill set includes: HTML, CSS, JavaScript, React, Next, GIT, TailwindCSS, styled-components and SASS.
          </p>
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

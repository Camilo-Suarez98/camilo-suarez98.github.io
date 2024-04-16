import Layout from "../components/Layout";
import Buttons from "../components/Buttons";
import Social from "../components/Social";
import TitlePage from "../components/TitlePage";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-around items-center mt-20 h-80 w-full ls:h-5/6 md:mt-16 lg:mt-24 2xl:mt-20">
          <TitlePage level={1} value="Hi!👋 I'm Camilo" />
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
      </Layout>
    </>
  );
};

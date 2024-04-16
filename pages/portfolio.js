import Layout from "../components/Layout";
import Projects from "../components/Projects";
import TopArrow from "../components/TopArrow";
import TitlePage from "../components/TitlePage";

const portfolio = () => {
  return (
    <>
      <Layout title="Projects">
        <TitlePage level={1} value="Projects" />
        <Projects />
        <TopArrow />
      </Layout>
    </>
  );
};

export default portfolio;

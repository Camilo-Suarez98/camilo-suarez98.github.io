import Layout from "../components/Layout";
import Projects from "../components/Projects";
import TitlePage from "../components/TitlePage";

const portfolio = () => {
  return (
    <Layout title="Projects">
      <div className="animate-fadeInTop mt-12 mb-6">
        <TitlePage level={1} value="Projects" />
      </div>
      <Projects />
    </Layout>
  );
};

export default portfolio;

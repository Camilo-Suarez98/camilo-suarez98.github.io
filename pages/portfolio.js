import Layout from "/components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Projects from "/components/Projects";
import TopArrow from "../components/TopArrow";
import TitlePage from "../components/TitlePage";

const queryClient = new QueryClient();

const portfolio = () => {
  return (
    <>
      <Layout title="Projects">
        <TitlePage level={1} value="Projects" />
        <QueryClientProvider client={queryClient}>
          <Projects />
        </QueryClientProvider>
        <TopArrow />
      </Layout>
    </>
  );
};

export default portfolio;

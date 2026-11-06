import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Fleet />
    </Layout>
  );
};

export default Home;

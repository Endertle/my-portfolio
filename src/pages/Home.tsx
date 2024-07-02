import Footer from "@/components/layout/Footer";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import MyProjects from "./sections/MyProjects";

function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MyProjects />
      <Contact />
      <Footer />
    </main>
  );
}
export default Home;

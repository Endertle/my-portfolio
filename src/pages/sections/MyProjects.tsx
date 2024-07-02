import Container from "@/components/layout/Container";
import MyProjectsCarousel from "@/components/sections/MyProjects/MyProjectsCarousel";
import MyProjectsIntroduction from "@/components/sections/MyProjects/MyProjectsIntroduction";

function MyProjects() {
  return (
    <section id="projects" className="h-svh bg-zinc-50">
      <Container>
        <div className="w-full h-full flex flex-col gap-10 items-center">
          <MyProjectsIntroduction />
          <MyProjectsCarousel />
        </div>
      </Container>
    </section>
  );
}
export default MyProjects;

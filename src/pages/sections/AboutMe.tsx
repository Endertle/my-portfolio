import Container from "@/components/layout/Container";
import AboutMeIntroduction from "@/components/sections/AboutMe/AboutMeIntroduction";
import AboutMePhoto from "@/components/sections/AboutMe/AboutMePhoto";
import AboutMeInfo from "@/components/sections/AboutMe/AboutMeInfo";

function AboutMe() {
  return (
    <section id="about" className="min-h-svh bg-zinc-200">
      <Container>
        <div className="w-full h-full  space-y-16">
          <AboutMeIntroduction />
          <div className="flex flex-col items-center gap-10 lg:flex-row-reverse">
            <AboutMeInfo />
            <AboutMePhoto />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default AboutMe;

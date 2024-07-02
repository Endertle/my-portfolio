import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import HeroIntroduction from "@/components/sections/Hero/HeroIntroduction";
import HeroPhoto from "@/components/sections/Hero/HeroPhoto";

function Hero() {
  return (
    <section className="h-svh overflow-hidden bg-zinc-50">
      <Header />
      <Container>
        <div className="flex flex-col-reverse gap-16 lg:flex-row justify-center items-center lg:justify-between">
          <HeroIntroduction />
          <HeroPhoto />
        </div>
      </Container>
    </section>
  );
}
export default Hero;

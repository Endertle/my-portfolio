import { Button } from "@/components/ui/button";

function HeroIntroduction() {
  return (
    <div className="flex flex-col gap-4 lg:max-w-xl lg:justify-between">
      <h1 className="font-bold text-4xl">Kenneth Alina</h1>
      <h3 className="font-semibold text-2xl text-zinc-600">
        Frontend Developer
      </h3>
      <p className="text-zinc-500">
        I'm a passionate frontend developer with a strong focus on building
        intuitive and visually appealing user interfaces. I love crafting
        responsive and accessible web applications that deliver seamless
        experiences.
      </p>
      <div className="flex flex-col gap-4 md:flex-row w-full">
        <Button asChild className="w-full">
          <a href={"#projects"}>View Projects</a>
        </Button>
        <Button asChild variant={"ghost"} className="border w-full">
          <a href={"#contact"}>Contact Me</a>
        </Button>
      </div>
    </div>
  );
}
export default HeroIntroduction;

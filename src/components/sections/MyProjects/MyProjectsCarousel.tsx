import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MyProjectsCard from "./MyProjectsCard";

function MyProjectsCarousel() {
  return (
    <div className="w-[90vw] max-w-6xl px-10 flex justify-center">
      <Carousel
        className="w-full max-w-sm md:max-w-fit"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[100%] md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <MyProjectsCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default MyProjectsCarousel;

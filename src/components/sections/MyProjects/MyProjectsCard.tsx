import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import myPhoto from "@/assets/my-photo.jpg";
import { Button } from "@/components/ui/button";

function MyProjectsCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <div className="w-full h-full overflow-hidden rounded-md">
          <img
            src={myPhoto}
            alt=""
            className="max-h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardTitle className="text-lg">
          Online Pre-Enrollment System for STI College Calamba
        </CardTitle>
        <CardDescription className="h-20 text-ellipsis overflow-hidden">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          fuga? Natus ab porro vitae, eaque vero voluptatum, laboriosam autem
          quam nostrum aliquam repudiandae ea ratione iste necessitatibus, omnis
          in tempore?
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-2 flex-col sm:flex-row">
        <Button className="w-full">Live Demo</Button>
        <Button variant={"ghost"} className="border w-full">
          Github
        </Button>
      </CardFooter>
    </Card>
  );
}
export default MyProjectsCard;

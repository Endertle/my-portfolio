import myPhoto from "@/assets/my-photo.jpg";

function AboutMePhoto() {
  return (
    <div className="bg-zinc-100 rounded w-full h-80 md:w-96 md:h-96 xl:w-[30rem] xl:h-[30rem] overflow-hidden">
      <img src={myPhoto} alt="my photo" />
    </div>
  );
}
export default AboutMePhoto;

import AboutMeInfoCard from "./AboutMeInfoCard";

type InfoType = {
  title: string;
  content: string;
};

type InfosType = InfoType[];

const infomations: InfosType = [
  {
    title: "Skill",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorem reiciendis quidem hic eum natus, iusto nulla facilis voluptate omnis.",
  },
  {
    title: "Experience",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, exercitationem temporibus, quae asperiores est corrupti dolorum, quis quisquam assumenda tenetur eveniet ea facere. Ipsa repudiandae quidem, asperiores quasi iusto dicta repellat illum porro natus pariatur, totam quis quo! Libero voluptates vitae possimus! Fugit ea quae accusamus natus id. Dolores, provident.",
  },
  {
    title: "Education",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur, fugit tempora architecto sunt ullam velit explicabo nostrum! Ea sit provident omnis alias atque inventore, blanditiis autem facilis repudiandae maxime.",
  },
];

function AboutMeInfo() {
  return (
    <div className="flex flex-col gap-4">
      {infomations.map((information) => (
        <AboutMeInfoCard
          key={information.title}
          title={information.title}
          content={information.content}
        />
      ))}
    </div>
  );
}
export default AboutMeInfo;

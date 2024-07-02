import SectionDescription from "../SectionDescription";

const section = {
  name: "My Projects",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem beatae obcaecati quam eveniet! Recusandae numquam commodi eos inventore blanditiis nulla consequatur sapiente voluptatibus molestias? Optio minus dolorem vel molestias tenetur laudantium quis doloremque ab maiores delectus veniam nulla, ducimus quaerat?",
};

function MyProjectsIntroduction() {
  return (
    <SectionDescription description={section.description} name={section.name} />
  );
}
export default MyProjectsIntroduction;

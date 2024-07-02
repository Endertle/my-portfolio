import SectionDescription from "../SectionDescription";

const section = {
  name: "Get in Touch",
  description:
    "I'm always excited to discuss new projects and opportunities. Feel free to reach out!",
};

function ContactIntroduction() {
  return (
    <SectionDescription description={section.description} name={section.name} />
  );
}
export default ContactIntroduction;

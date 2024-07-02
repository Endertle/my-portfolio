import Container from "@/components/layout/Container";
import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactIntroduction from "@/components/sections/Contact/ContactIntroduction";

function Contact() {
  return (
    <section id="contact" className="bg-zinc-200">
      <Container>
        <div className="w-full h-full flex flex-col gap-10">
          <ContactIntroduction />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
export default Contact;

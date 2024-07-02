import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  return (
    <form className="mx-auto w-full max-w-md space-y-2">
      <Input type="text" placeholder="Name" className="w-full" />
      <Input type="email" placeholder="Email" className="w-full" />
      <Textarea placeholder="Message" className="w-full" />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
export default ContactForm;

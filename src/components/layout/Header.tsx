import Navbar from "./Navbar";
import Logo from "@/assets/kaa-logo.svg?react";

function Header() {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center font-semibold text-zinc-700">
      <Logo className="w-12 h-12" />
      <Navbar />
    </header>
  );
}
export default Header;

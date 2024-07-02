type NavigationType = {
  name: string;
  link: string;
};
type NavigationsType = NavigationType[];

const navigations: NavigationsType = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8">
        {navigations.map((navigation) => (
          <li key={navigation.name}>
            <a href={navigation.link}>{navigation.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;

import NavItem from "../components/NavItem";

export default function Nav({ dir, scheme }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };
  const pickedDir = dirs[dir];
  return (
    <div>
      <ul className={`flex ${pickedDir}`}>
        <NavItem scheme={scheme} href="#profile">
          Profile
        </NavItem>
        <NavItem scheme={scheme} href="#skills">
          Skills
        </NavItem>
        <NavItem scheme={scheme} href="#projects">
          Projects
        </NavItem>
        <NavItem scheme={scheme} href="#contact">
          Contact
        </NavItem>
      </ul>
    </div>
  );
}

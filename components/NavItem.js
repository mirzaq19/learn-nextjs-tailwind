export default function NavItem({ children, href, scheme }) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <li className={`${pickedScheme} text-lg transition font-semibold`}>
      <a href={href}>{children}</a>
    </li>
  );
}

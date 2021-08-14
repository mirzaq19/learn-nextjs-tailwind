export default function Button({ className, variant, children, pill, href }) {
  const addClassName = className ? `${className}` : "";

  const variants = {
    "outline-yellow": `border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black`,
    yellow: `bg-yellow-500 hover:bg-yellow-600 text-black`,
    black: `bg-black hover:bg-opacity-90 text-white`,
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={`transition font-semibold px-12 py-3 inline-block ${
        pill ? "rounded-full" : ""
      } ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}

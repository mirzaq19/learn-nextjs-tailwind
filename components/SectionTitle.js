export default function SectionTitle({ left, children }) {
  return (
    <h2
      className={`text-2xl font-mono font-semibold ${
        !left ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default function ContactItem({ label, value, icon, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`flex items-start py-2 ${addClassName}`}>
      <img src={`/icons/${icon}`} alt={icon} className="w-8" />
      <div className="ml-4">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}

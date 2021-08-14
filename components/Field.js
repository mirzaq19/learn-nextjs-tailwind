export default function Field({ label, name, type, className }) {
  const addClassName = className ? `${className}` : "";
  const formControlClassName = `bg-transparent border-2 border-primarygray-300 py-2 px-3 w-full ${addClassName}`;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block mb-2 font-semibold">
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === "textarea" && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}

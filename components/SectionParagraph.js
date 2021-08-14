export default function SectionParagraph({ left, children }) {
  return (
    <p className={`text-lg mt-2 text-gray-500 ${!left && "text-center"}`}>
      {children}
    </p>
  );
}

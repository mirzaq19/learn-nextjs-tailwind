export default function ProjectItem({ name, desc, img }) {
  return (
    <article className="text-center">
      <img src={`/img/${img}`} alt="project1" className="w-full rounded-lg" />
      <h3 className="text-2xl font-semibold mt-4 my-1">{name}</h3>
      <p className="text-lg text-gray-400">{desc}</p>
    </article>
  );
}

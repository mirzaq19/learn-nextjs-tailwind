import SectionTitle from "../components/SectionTitle";
import SectionParagraph from "../components/SectionParagraph";
import ProjectItem from "../components/ProjectItem";

export default function SectionProjects() {
  return (
    <section id="projects">
      <div className="container mx-auto py-20  px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa Project Bikinan Saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="Hasten"
              desc="Explore landing page"
              img="p1.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="Resources"
              desc="Explore resource page"
              img="p2.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="Resources"
              desc="Explore resource page"
              img="p2.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="Hasten"
              desc="Explore landing page"
              img="p1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

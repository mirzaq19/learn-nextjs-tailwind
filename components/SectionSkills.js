import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
  return (
    <section className="py-20 bg-primarygray" id="skills">
      <div className="container mx-auto  px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa Kemampuan Saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Menengah"
              image="nodejs-icon.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="javascript.svg"
              imageClassName="rounded-full h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Lanjutan"
              image="react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="javascript.svg"
              imageClassName="rounded-full h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Lanjutan"
              image="react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Menengah"
              image="nodejs-icon.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Lanjutan"
              image="react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Menengah"
              image="nodejs-icon.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="javascript.svg"
              imageClassName="rounded-full h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

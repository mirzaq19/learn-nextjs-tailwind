import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[612px] xl:h-[600px] lg:h-[500px] md:h-[500px] pb-20 lg:pb-0">
      <div className="container mx-auto px-10 2xl:px-0">
        <Navbar />
        <div className="text-center xl:mt-20 md:mt-10">
          <h1 className="lg:text-3xl md:text-2xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-white text-opacity-60 lg:text-lg md:text-base 2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 mx-auto mt-6">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button href="#profile" variant="yellow" className="mt-10" pill>
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}

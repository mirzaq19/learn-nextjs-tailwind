import { useState } from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Button from "../components/Button";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" dir="horizontal" />
        </div>
        <div className="w-3/12 hidden md:block text-right">
          <Button href="#contact" variant="outline-yellow" pill>
            Kontak
          </Button>
        </div>
        <div className="w-9/12 text-right md:hidden">
          <img
            src="/icons/menu.svg"
            alt="menu"
            className="inline-block"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>
      <div
        className={`fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all ${
          offCanvas ? "right-0" : "-right-full"
        }`}
      >
        <img
          src="/icons/x.svg"
          alt="Close"
          className="absolute top-8 right-8 w-7"
          onClick={() => setOffCanvas(false)}
        />
        <Nav scheme="dark" dir="vertical" />
      </div>
    </>
  );
}

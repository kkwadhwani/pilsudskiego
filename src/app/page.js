import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navigation";
import Bannner from "./components/banner";
import AboutMe from "./components/aboutme";

export default function Home() {
  return (
    <main>
      <div
        style={{ backgroundColor: "#FAFAFA" }}
        className=" bg-red-300 h-screen "
      >
        <Navigation />
        <Bannner />
        <AboutMe />
      </div>
    </main>
  );
}

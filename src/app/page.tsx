import Image from "next/image";
import Hero from "./component/Hero";
import Services from "./component/services";

export default function Home() {
  return <div>
    <Hero/>
    <Services/>
  </div>;
}


import Image from "next/image";
import Hero from "./component/Hero";
import Services from "./component/services";
import Promotion from "./component/promotion";

export default function Home() {
  return <div>
    <Hero/>
    <Services/>
    <Promotion/>
  </div>;
}

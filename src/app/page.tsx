import Image from "next/image";
import Hero from "./component/Hero";
import Services from "./component/services";
import Promotion from "./component/promotion";
import Categories from "./component/categories";
import BestSelling from "./component/BestSelling";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Promotion />
      <Categories />
      <BestSelling />
    </div>
  );
}

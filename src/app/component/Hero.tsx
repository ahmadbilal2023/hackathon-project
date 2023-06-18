
import React from "react";
import { Button } from "../../../components/ui/button";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] custome-img">
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold text-mywhite tracking-tight lg:text-5xl">
              Futuristic <span className="text-myorange"> Clothes </span>
            </h1>
            <p className="mb-5 scroll-m-20 text-lg font-semibold tracking-tight text-mywhite">
              Upgrade your Wardrobe with Sleek $ Stylish Apparels and Top-Notch
              Shoes
            </p>
            <Button className="outline outline-offset-4 outline-2">
              <FaShoppingBag className="mr-2 h-6 w-6 text-myorange" /> <span className="text-mywhite"> Shop Now </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

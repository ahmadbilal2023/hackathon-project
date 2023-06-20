"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { FaShoppingBag } from "react-icons/fa";
import TypingEffect from "../../../varientVault/TypingEffect";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[80vh] custome-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="mb-5 scroll-m-20 text-4xl font-extrabold text-mywhite tracking-tight lg:text-5xl">
              <TypingEffect />
              Futuristic <span className="text-myorange"> Clothes </span>
            </div>
            <p className="mb-5 scroll-m-20 text-lg font-semibold tracking-tight text-mywhite">
              Upgrade your Wardrobe with Sleek $ Stylish Apparels and Top-Notch
              Shoes
            </p>
            <Button className="outline outline-offset-4 outline-2 group hover:rounded-3xl duration-300 hover:outline-myorange">
              <FaShoppingBag className="mr-2 h-6 w-6 group-hover:text-myorange group-hover:animate-bounce" />{" "}
              <span className="text-mywhite"> Shop Now </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

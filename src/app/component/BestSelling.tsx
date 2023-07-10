"use client";
import React from "react";
import BestSellingVarient from "../../../varientVault/BestSelling";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { FaShoppingCart } from "react-icons/fa";

const BestSelling = () => {
  return (
    <div className="mb-28 mt-28">
      {/* Heading */}
      <div className="text-center mb-10">
        <BestSellingVarient key={0} />
        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* Best selling product card here */}
      <div className="w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
        <div className="rounded block overflow-hidden">
          <Image
            alt="tshirt"
            width={400}
            height={400}
            src={"/pictures/BS1.jpg"}
            className="h-[360px]"
          />
        </div>
        <div className="mt-4">
          <h2 className="scroll-m-20 border-b line-clamp-1 text-myblackHead pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
            Women Red Printed Shirt
          </h2>
          <p
            className="mt-2 scroll-m-20 text-sm font-semibold
             tracking-tight text-myblackpara line-clamp-1"
          >
           SUMMER COLLECTION
          </p>
          <p
            className="mt-2 scroll-m-20 text-base font-semibold
             tracking-tight text-myblackHead line-clamp-1"
          >
            $150
          </p>
        </div>
        <div>
          <Button
            className="group bg-myblackHead hover:bg-transparent
           text-mywhite hover:text-myblackHead mt-2 scroll-m-20 
           text-base font-semibold
           tracking-tight rounded-xl absolute bottom-2 right-2"
          >
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
            Add to Cart
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default BestSelling;

"use client";
import React from "react";

import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
}) => {
  return (
    <div className="w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
        {/* Image div */}
        <div className="rounded block overflow-hidden">
          <Image
            alt={alt}
            width={400}
            height={400}
            src={src}
            className="h-[360px] hover:scale-125 duration-500"
          />
        </div>
        {/* typography div */}
        <div className="mt-4">
          {title && (
            <h2 className="scroll-m-20 border-b line-clamp-1 text-myblackHead pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
              {title}
            </h2>
          )}
          {description && (
            <p
              className="mt-2 scroll-m-20 text-sm font-semibold
         tracking-tight text-myblackpara line-clamp-1"
            >
              {description}
            </p>
          )}
          {price && (
            <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myblackHead line-clamp-1">
              ${price}
            </p>
          )}
        </div>
      </Link>
      <div>
        {/* Buttons Div */}
        <Button
          className="group bg-myblackHead hover:bg-transparent
       text-mywhite hover:text-myblackHead mt-2 scroll-m-20 
       text-base font-semibold
       tracking-tight rounded-xl absolute bottom-2 right-2"
        >
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
          Add to Cart
        </Button>
        <Button
          className="group bg-myblackHead hover:bg-transparent
       text-mywhite hover:text-myblackHead mt-2 scroll-m-20 
       text-base font-semibold
       tracking-tight rounded-xl absolute bottom-2 left-2"
        >
          <FaHeart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default BestSellingCard;

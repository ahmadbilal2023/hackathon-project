"use client";
import React from "react";
import CategoryVarient from "../../../varientVault/categoryVarient";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mb-28 mt-28">
      {/* Heading */}
      <div className="text-center mb-10">
        <CategoryVarient key={0} />
        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* categories starts from here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="#">
            <Image
              alt="Tops"
              width={350}
              height={350}
              src={"/pictures/c1.jpg"}
              className="rounded-xl group-hover:scale-125 duration-500 h-[410px]"
            />
            <div
              className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2
             scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackHead/70 
             text-center text-mywhite w-full"
            >
              <h1 className="uppercase">tops</h1>
            </div>
            <div
              className="block lg:hidden absolute duration-500 bottom-16
             scroll-m-20 z-[100] text-4xl font-extrabold tracking-tight bg-myblackHead/70 
             text-center text-mywhite w-full"
            >
              <h1 className="uppercase">tops</h1>
            </div>
          </Link>
        </div>
        {/* category 2 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="#">
            <Image
              alt="Tops"
              width={350}
              height={350}
              src={"/pictures/c2.jpg"}
              className="rounded-xl group-hover:scale-125 duration-500 h-[410px]"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackHead/70 text-center text-mywhite w-full">
              <h1 className="uppercase">pants</h1>
            </div>
            <div
              className="block lg:hidden absolute duration-500 bottom-16
             scroll-m-20 z-[100] text-4xl font-extrabold tracking-tight bg-myblackHead/70 
             text-center text-mywhite w-full"
            >
              <h1 className="uppercase">pants</h1>
            </div>
          </Link>
        </div>
        {/* category 3 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="#">
            <Image
              alt="Tops"
              width={350}
              height={350}
              src={"/pictures/c3.jpg"}
              className="rounded-xl group-hover:scale-125 duration-500 h-[410px]"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackHead/70 text-center text-mywhite w-full">
              <h1 className="uppercase">Accessories</h1>
            </div>
            <div
              className="block lg:hidden absolute duration-500 bottom-16
             scroll-m-20 z-[100] text-4xl font-extrabold tracking-tight bg-myblackHead/70 
             text-center text-mywhite w-full"
            >
              <h1 className="uppercase">accessories</h1>
            </div>
          </Link>
        </div>
        {/* category 4 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="#">
            <Image
              alt="Tops"
              width={350}
              height={350}
              src={"/pictures/c4.jpg"}
              className="rounded-xl group-hover:scale-125 duration-500 h-[410px]"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myblackHead/70 text-center text-mywhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
            <div
              className="block lg:hidden absolute duration-500 bottom-16
             scroll-m-20 z-[100] text-4xl font-extrabold tracking-tight bg-myblackHead/70 
             text-center text-mywhite w-full"
            >
              <h1 className="uppercase">shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

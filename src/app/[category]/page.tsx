"use client";
import React from "react";
import BestSellingVarient from "../../../varientVault/BestSelling";
import BestSellingCard from "../component/BestSellingCard";

const Category = () => {
  const bestSell = [
    {
      src: "/pictures/BS1.jpg",
      alt: "white T-shirt",
      title: "Red Printed T.Shirt",
      description: "Best quality t.shirt for Women",
      price: 150,
      category:"tops",
      slug:"white top"
      
    },
    {
      src: "/pictures/BS3.jpg",
      alt: "Black Printed Shirt",
      title: "Red Printed T.Shirt",
      description: "Best quality t.shirt for Women",
      price: 200,
      category:"tops",
      slug:"black top"
    },
    {
      src: "/pictures/BS2.jpg",
      alt: "Black Pumpees",
      title: "Black Pumpees",
      description: "Top Notch Shoes for Women",
      price: 250,
      category:"tops",
      slug:"white top"
    },
  ]
  return (
    <div className="mt-[50px] mb-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-myblackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize">
          tops of women
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* Category start here */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items, i) => (
          <BestSellingCard
            key={i}
            src={items.src}
            alt={items.alt}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

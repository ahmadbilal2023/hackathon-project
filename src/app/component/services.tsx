"use client";
import React from "react";
import BlinkingText from "../../../varientVault/GradualSpacing";
import MultiDirection from "../../../varientVault/GradualSpacing";
import GradualSpacing from "../../../varientVault/GradualSpacing";
import Image from "next/image";
import Delivery2 from "../../../public/pictures/delivery2.png";
import customerservice from "../../../public/pictures/customerService.png";
import moneyback from "../../../public/pictures/moneyback.png";

const Services = () => {
  return (
    <section className="body-font mb-28 mt-28">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <GradualSpacing key={0} />
          <div className="flex mt-2 justify-center">
            <div className="w-28 h-1 rounded-full bg-myorange inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Delivery portion */}
          <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="inline-flex items-center justify-center  mb-5 flex-shrink-0"></div>
            <Image src={Delivery2} alt="delivery" width={100} height={100} />
            <div className="flex-grow">
              <h2 className="group-hover:text-myorange duration-300 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl mb-2">
                Free Delivery
              </h2>
              <p className=" text-myblackHead line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight transition-colors">
                The process of delivering products begins with a confluence of
                innovation, technology, and market sense. How a company sells
                its product is vital in shaping the brands sustainability. In
                essence, a proactive strategy is necessary to persuade end
                customers to purchase a product.
              </p>
            </div>
          </div>
          {/* 24/7 services */}
          <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="inline-flex items-center justify-center  mb-5 flex-shrink-0"></div>
            <Image
              src={customerservice}
              alt="delivery"
              width={100}
              height={100}
            />
            <div className="flex-grow">
              <h2 className="group-hover:text-myorange duration-300 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl mb-2">
                Customer Help
              </h2>
              <p className=" text-myblackHead line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight transition-colors">
                Customer service is the direct one-on-one interaction between a
                consumer making a purchase and a representative of the company
                that is selling it. Most retailers see this direct interaction
                as a critical factor in ensuring buyer satisfaction and
                encouraging repeat business.
              </p>
            </div>
          </div>
          {/* Money Back */}
          <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="inline-flex items-center justify-center  mb-5 flex-shrink-0"></div>
            <Image src={moneyback} alt="delivery" width={100} height={100} />
            <div className="flex-grow">
              <h2 className="group-hover:text-myorange duration-300 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl mb-2">
                Money Back Gurantee
              </h2>
              <p className=" text-myblackHead line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight transition-colors">
                A Money Back Guarantee Policy is essentially a promise by your
                company that if a consumer buys a product or service from you
                and it is wrong, broken, or the consumer is unsatisfied, their
                money will be refunded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

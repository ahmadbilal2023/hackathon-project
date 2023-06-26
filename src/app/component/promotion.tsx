"use client";
import React from "react";
import PromotionVarient from "../../../varientVault/promotionVarient";
import P1TypingEffect from "../../../varientVault/p1TypingEffect";

const Promotion = () => {
  return (
    <div className="mb-28 mt-28">
      <div className="text-center mb-10">
        <PromotionVarient key={0} />
        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* promotion  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* first child */}
        <div className="hero h-[25rem] w-[90%] mx-auto promo-1 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="lg:text-5xl text-2xl text-myorange">
                <P1TypingEffect />
              </div>
              <p className="mb-5 scroll-m-20 border-b pb-2 lg:text-xl text-base font-semibold tracking-tight transition-colors first:mt-0">
                Flash Sale, get upto 60% off on the Season Varient.
              </p>
            </div>
          </div>
        </div>
        <div className="hero h-[25rem] w-[90%] mx-auto promo-2 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="lg:text-5xl text-2xl text-myorange">
                <P1TypingEffect />
              </div>
              <p className="mb-5 scroll-m-20 border-b pb-2 lg:text-xl text-base font-semibold tracking-tight transition-colors first:mt-0">
                Flash Sale, get upto 60% off on the Season Varient.
              </p>
            </div>
          </div>
        </div>
        <div className="hero h-[25rem] w-[90%] mx-auto promo-3 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="lg:text-5xl text-2xl text-myorange">
                <P1TypingEffect />
              </div>
              <p className="mb-5 scroll-m-20 border-b pb-2 lg:text-xl text-base font-semibold tracking-tight transition-colors first:mt-0">
                Flash Sale, get upto 60% off on the Season Varient.
              </p>
            </div>
          </div>
        </div>
        <div className="hero h-[25rem] w-[90%] mx-auto promo-4 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="lg:text-5xl text-2xl text-myorange">
                <P1TypingEffect />
              </div>
              <p className="mb-5 scroll-m-20 border-b pb-2 lg:text-xl text-base font-semibold tracking-tight transition-colors first:mt-0">
                Flash Sale, get upto 60% off on the Season Varient.
              </p>
            </div>
          </div>
        </div>
        <div className="hero h-[25rem] w-[90%] mx-auto promo-5 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="lg:text-5xl text-2xl text-myorange">
                <P1TypingEffect />
              </div>
              <p className="mb-5 scroll-m-20 border-b pb-2 lg:text-xl text-base font-semibold tracking-tight transition-colors first:mt-0">
                Flash Sale, get upto 60% off on the Season Varient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;

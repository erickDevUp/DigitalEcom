import HeroIlu from "@/icon/ilustration";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="background-radial-gradient mb-10 overflow-hidden">
      <div className="px-6 py-2 text-center md:px-12 lg:py- lg:text-left">
        <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0 z-10">
              <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                The best offer <br />
                <span className="text-[hsl(218,81%,75%)]">
                  for your business
                </span>
              </h1>
              <button className="bg-transparent transition-colors hover:bg-[#ad1fff] text-[hsl(218,81%,75%)] font-semibold hover:text-white py-2 px-16 border border-[hsl(218,81%,75%)] hover:border-transparent rounded">
                Shop
              </button>
            </div>
            <div className="relative mb-12 lg:mb-0">
              <div
                id="radius-shape-1"
                className="absolute rounded-full shadow-lg"
              ></div>
              <div id="radius-shape-2" className="absolute shadow-lg"></div>
              <div className="relative md:px-12">
                <HeroIlu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

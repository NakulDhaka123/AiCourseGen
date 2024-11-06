"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { HiChevronDoubleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="pt-28"> {/* Added padding to move the page content down */}
      <section className="h-screen flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl px-4 pt-20 pb-10 lg:flex lg:items-center lg:flex-col">
          <div className="mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
              <span className="text-white"> AI Course </span>Generator.
              <strong className="mt-12 font-medium text-3xl text-white sm:block">
                Custom Learning paths, Powered By AI.
              </strong>
            </h1>

            <p className="mt-4 text-xm relaxed">
              Unlock personalized education with AI-driven course creation.
              Tailor your learning journey to fit your unique goals and pace.
            </p>

            <div className="mt-20 flex flex-wrap justify-center gap-4 cursor-pointer">
              <Link href={"/explore-course"}>
                <Button variant="startButton" size="lg">
                  Let's Explore <HiChevronDoubleRight className="text-xl" />
                </Button>
              </Link>
            </div>

            {/* Full Width Iframe Section with 3D Hover Effect */}
            <div className="relative mt-12 lg:w-[1200px] h-[700px] p-1 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-violet-500 via-pink-500 to-purple-500 animate-gradient-border">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300">
                <iframe
                  src="https://sayandip.framer.website/"
                  title="Framer Website"
                  className="w-[calc(100%+2.1rem)] h-full rounded-2xl" // Increase width by using calc
                  style={{ overflow: 'hidden', border: 'none', marginLeft: '-1rem' }} // Add marginLeft to center the iframe
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes gradient-border {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-border {
          animation: gradient-border 4s linear infinite;
          background-size: 200% 200%;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        }

        .hover:scale-[1.03]:hover {
          transform: scale(1.03) translateY(-5px);
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default Hero;

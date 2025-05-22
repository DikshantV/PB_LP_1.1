"use client";

import ProductImage from "@/public/assests/Product Image1.png";
import Pyramid from "@/public/assests/pyramid.png";
import Tube from "@/public/assests/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoBell, GoGoal } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

const featureDetails = [
  {
    title: "Voice-Based Mock Interviews",
    detail:
      "Engage in realistic, AI-powered voice interviews that simulate real interview scenarios. Receive instant feedback on your speaking style, tone, pacing, and clarity to help you improve your communication skills and boost your confidence.",
  },
  {
    title: "Personalized Interview Paths",
    detail:
      "Get a tailored interview preparation plan based on your role, experience, and preferred tech stack. Our AI curates questions and challenges that match your goals, ensuring efficient and focused prep.",
  },
  {
    title: "Smart Coding Interface",
    detail:
      "Solve coding problems in a real-time, interactive environment. Receive AI-powered hints, code reviews, and feedback to sharpen your problem-solving skills and ace technical interviews.",
  },
  {
    title: "Real-Time Feedback & Insights",
    detail:
      "Track your progress with actionable, AI-driven insights. Identify strengths and areas for improvement, and monitor your readiness for interviews with detailed analytics.",
  },
];

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const [hoverTab, setHoverTab] = useState<{ title: string; detail: string } | null>(null);

  return (
    <div
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-t from-[#acbae8] to-white flex flex-col items-center overflow-x-hidden pb-24"
    >
      <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Smarter Interview Prep
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          AI-Powered Interview Prep Built Just for You
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          PrepBettr is your AI-powered interview preparation assistant
          designed to help candidates stand out — not just blend in.
        </div>
      </div>
      <div className="relative ">
        <motion.img
          src={Pyramid.src}
          alt="Pyramid Image"
          className="absolute -right-24 -top-20 w-72 h-72 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <Image src={ProductImage} alt="Product Image" className="px-1" />
        <motion.img
          src={Tube.src}
          alt="Tube Image"
          className="absolute w-72 h-72 top-64 -left-28 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 max-w-[1400px] lg:px-28">
        {[0, 1, 2, 3].map((idx) => (
          <div className="mt-16" key={idx}>
            {idx === 0 && <LuLeaf className="text-2xl mb-3" />}
            {idx === 1 && <GoGoal className="text-2xl mb-3" />}
            {idx === 2 && <MdLockOutline className="text-2xl mb-3" />}
            {idx === 3 && <GoBell className="text-2xl mb-3" />}
            <div className="font-bold text-2xl">{featureDetails[idx].title}</div>
            <div className="text-lg my-2">
              {featureDetails[idx].detail.split(".")[0] + "."}
            </div>
            <button
              className="text-lg font-medium flex items-center gap-1 text-blue-700 hover:underline focus:outline-none"
              onClick={() => setHoverTab(featureDetails[idx])}
            >
              Learn more <FaArrowRight className="inline h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
      {hoverTab && (
        <div
          className="fixed z-50 top-0 left-0 w-screen h-screen flex items-start justify-center"
          onClick={() => setHoverTab(null)}
          style={{ background: "rgba(0,0,0,0.08)" }}
        >
          <div
            className="mt-24 bg-white shadow-xl rounded-2xl p-7 w-[90vw] max-w-md border border-blue-200 animate-fade-in font-medium text-base md:text-lg text-[#001E80]"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)", fontFamily: 'inherit' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="font-bold text-2xl md:text-2xl text-transparent bg-gradient-to-b from-black to-[#002499] bg-clip-text tracking-tighter mb-3">
              {hoverTab.title}
            </div>
            <div className="text-[#222] text-base md:text-lg leading-relaxed opacity-90">
              {hoverTab.detail}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;

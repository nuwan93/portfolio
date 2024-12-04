"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In my career, I have enjoyed roles such as{" "}
        <span className="font-medium">
          leading the data onboarding team & providing technical support
        </span>{" "}
        at Pirsee, <span className="font-medium">teaching</span> at the Sri
        Lanka Institute of Information Technology and{" "}
        <span className="font-medium">software development</span> at Pension
        Department. My education, with a{" "}
        <span className="italic">
          Bachelor's in IT and a Master's in Information Systems
        </span>{" "}
        underway, has been a great support in my work. What excites me most
        about programming is solving tricky problems,{" "}
        <span className="font-medium">
          there's nothing quite like the satisfaction of cracking a tough
          challenge.
        </span>
      </p>

      <p>
        When I step away from the screen, I{" "}
        <span className="font-medium">spend time with my dog</span>, whose
        playful energy is a source of joy. I also keep fit with{" "}
        <span className="font-medium">regular gym sessions.</span> These
        activities are not just hobbies; they recharge me, bringing balance and
        fresh energy to my professional life.
      </p>
    </motion.section>
  );
}

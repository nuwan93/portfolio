"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaHackerrank } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import me from "@/public/me.png";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const waveMotion = {
    rotate: [0, 10, -10, 10, -10, 0], // Waving motion
    scale: 1,
    transition: { repeat: Infinity, duration: 1.5 },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={me}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl cursor-default"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: waveMotion.rotate,
              transition: {
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
                when: "beforeChildren",
                staggerChildren: 0.5,
              },
            }}
            whileHover={waveMotion} // Apply waving motion on hover
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold">Hello, I'm Nuwan.</span> I'm a{" "}
        <span className="font-bold">
          <Typewriter
            options={{
              strings: ["software developer", "freelancer", "team leader"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>{" "}
        with diverse experience across{" "}
        <span className="italic">multiple tech domains.</span> I love
        <span className="font-semibold"> solving problems.</span>{" "}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          <a
            className="bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/nuwan-wickramarachchi-a193a9151/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-slate-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/nuwan93"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            className="bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.upwork.com/freelancers/~010dce4fada3c6da88"
            target="_blank"
          >
            <BiLogoUpwork />
          </a>
          <a
            className="bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://stackoverflow.com/users/20621894/nuwan-wickramarachchi?tab=profile"
            target="_blank"
          >
            <FaStackOverflow />
          </a>
          <a
            className="bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.hackerrank.com/profile/nuwanwick99"
            target="_blank"
          >
            <FaHackerrank />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

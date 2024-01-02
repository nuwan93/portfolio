import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pcrqaImg from "@/public/pce-qa.png";
import scrapyImg from "@/public/scrapy.png";
import pdfToJsonImg from "@/public/pdf-json.png";
import { GoOrganization } from "react-icons/go";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Timeline",
    hash: "#timeline",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bsc (Hons) Degree In Information Technology",
    location: "Sri Lanka Institute of Information Technology",
    description:
      "This degree provided a strong foundation in both theoretical and practical aspects of information technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
  {
    title: "Software Engineer (Intern)",
    location: "Department of Pensions",
    description:
      "I specialized in developing standalone applications using JavaFX. This role involved not only building but also deploying these applications.",
    icon: React.createElement(GoOrganization),
    date: "2016 - 2017",
  },
  {
    title: "Instructor",
    location: "Sri Lanka Institute of Information Technology",
    description:
      "I conducted practical lab sessions, marked assignments, and evaluated student projects, contributing significantly to the hands-on learning and assessment of students.",
    icon: React.createElement(GoOrganization),
    date: "2018",
  },
  {
    title: "Head, Support Team And Software Developer",
    location: "AssetOwl/ Pirsee",
    description:
      "I led the support team and contributed as a Software Developer, implementing code scripts using Python and collaborating on React projects. My responsibilities also included overseeing customer data onboarding.",
    icon: React.createElement(GoOrganization),
    date: "2020 - 2023",
  },
  {
    title: "Msc In Information Systems",
    location: "University of Jyväskylä",
    description:
      "I am deepening my understanding of advanced IT concepts and systems analysis. This program is equipping me with cutting-edge skills and knowledge,",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PCR-QA",
    description:
      "A web application for handling property inspection data. It enables efficient editing, organization, and quality assurance of JSON files,",
    tags: ["React", "TypeScript", "Redux", "Semantic UI", "Netlify"],
    imageUrl: pcrqaImg,
    code: "https://github.com/nuwan93/pcr-qa/tree/main",
    demo: "https://pcr-qa.netlify.app/",
  },
  {
    title: "Web Scraper",
    description:
      "A web scraping solution, that extract and uploads data, ensuring a effective onboarding process.",
    tags: ["Python", "Scrapy", "SQLite", "Playwright"],
    imageUrl: scrapyImg,
    code: "https://github.com/nuwan93/inspection-manager/tree/main",
    demo: null,
  },
  {
    title: "PDF/ CSV to JSON",
    description:
      "An app that converts PDF and Excel files into a predefined JSON format.",
    tags: ["Python", "openpyxl", "pymongo", "Excel macro"],
    imageUrl: pdfToJsonImg,
    code: "https://github.com/nuwan93/PDF-to-JSON/tree/main",
    demo: null,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Framer Motion",
  "Redux",
  "Node",
  "Express",
  "Python",
  "Scrapy",
  "Playwright",
  "Git",
  "AWS",
  "SQLite",
  "MongoDB",
] as const;

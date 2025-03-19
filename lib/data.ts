import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import desertgreeningresearchImg from "@/public/desertgreening.png";
import cropdatabase from "@/public/cropdatabase.png";
import swissenterprisesdatabaseImg from "@/public/swissenterprisesdatabase.png";
import biodiversityimpactassessmenttoolImg from "@/public/biodiversityportfolio.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Scientist - Agro-Insurance",
    location: "AXA Climate / Zurich - Paris",
    description:
      "Led a project from inception that significantly improved data processing efficiency by creating a novel global database of crop yield data stored on AWS servers. Translated business needs into IT solutions, mining large datasets, and processing data. Utilized Google Earth satellite data to predict missing values using advanced ML models such as Gradient Boosting, Random Forests, and K-means. Conducted extensive feature engineering and collaborated with experts to explain causal inferences. Developed user-friendly dashboards via Streamlit to browse data and draw correlation maps for capacity spread.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - Nov 2023",
  },
  {
    title: "Teacher Assistant - Operations Management Course",
    location: "HEC - UNIL / Lausanne",
    description:
      "Assisted a class of 60 students by giving courses and guiding them through practical case studies. Supported semester projects by explaining qualitative and quantitative operations management concepts to individual students. Topics included supply chain management, layout management, MRP, Stock Management, Statistical Process Control",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2021 - Jan 2023",
  },
  {
    title: "Biodiversity Consultant - Investment Management",
    location: "Asteria Investment Managers / Geneva",
    description:
      "As an SMT student, collaborated with Asteria Investment Managers in the context of the E4S Transformative Projects. Developed a python tool to assess the biodiversity impact of Asteria's portfolios.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Jan 2023",
  },
  {
    title: "Co-Founder and IT Manager",
    location: "LadyMustache / Lugano",
    description:
      "Developed and managed an e-commerce website on multiple platforms. Automated warehouse storage and product shipping processes. Conducted market analysis and tracked advertisement performance with A/B testing. Organized events to attract customers and increase brand awareness.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2019 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Swiss Enterprises Database",
    description:
      "A SaaS platform that leverages AI and a comprehensive database of Swiss enterprise contacts to enhance marketing efforts.",
    tags: ["Flask", "Webscraping", "SQL", "AWS", "Cursor", "LLM"],
    imageUrl: swissenterprisesdatabaseImg,
  },
  {
    title: "Crop Yield Database",
    description:
      "Created a novel global database of crop yield data and developed ML models using Google Earth satellite data for yield reconstruction.",
    tags: ["Machine Learning", "AWS", "Python", "Data Analysis", "Agriculture"],
    imageUrl: cropdatabase,
  },
  {
    title: "Biodiversity Impact Assessment Tool",
    description:
      "Developed a Python tool to assess the biodiversity impact of investment portfolios for Asteria Investment Managers.",
    tags: ["Python", "Data Analysis", "Sustainability", "Investment", "Biodiversity"],
    imageUrl: biodiversityimpactassessmenttoolImg,
  },
  {
    title: "Desert Greening Research",
    description:
      "Co-authored research paper exploring desert greening as a potential solution to climate change, analyzing its effects on carbon sequestration, albedo change, and cloud cover. Published in Climate Informatics, 2022.",
    tags: ["Climate Science", "Data Analysis", "Research", "Python", "Machine Learning"],
    imageUrl: desertgreeningresearchImg,
  },
] as const;

export const skillsData = [
  "Python",
  "R",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Power BI",
  "Tableau",
  "AWS S3",
  "AWS SageMaker",
  "Microsoft Office",
  "Stata",
  "Mathematica",
  "SAP ByDesign",
  "WordPress",
  "Adobe",
  "Canva",
  "Project Management",
  "Sustainability",
  "Business Intelligence",
] as const;

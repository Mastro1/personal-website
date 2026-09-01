import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import desertgreeningresearchImg from "@/public/desertgreening.png";
import cropdatabase from "@/public/cropdatabase.png";
import alpbaseImg from "@/public/alpbase.png";
import biodiversityimpactassessmenttoolImg from "@/public/biodiversityportfolio.png";
import satlitImg from "@/public/SatLit.png";
import alphaytImg from "@/public/alphayt.png";

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
    title: "Data Engineer - Parametric",
    location: "Africa Specialty Risks / London - Remote",
    description:
      "Working within the Parametric team, in close collaboration with the Head of Innovation, underwriters, and external scientific collaborators, contributing to the development and delivery of data-driven parametric risk solutions. Conducting applied scientific research at the intersection of geosciences and insurance/risk management, supporting the design and development of parametric insurance products, and providing in-depth analytical support to underwriting activities. Working extensively with satellite and geospatial data and managing team data infrastructure, including database creation and maintenance.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Present",
  },
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
    title: "AlpBase",
    description:
      "SaaS platform that monitors the Swiss Commercial Registry across all cantons and delivers newly registered companies, relocations, and liquidations to subscribers every week.",
    tags: ["Next.js", "Web Scraping", "SQL", "Stripe", "SaaS", "Supabase"],
    imageUrl: alpbaseImg,
    link: "https://www.alpbase.ch/en",
  },
  {
    title: "AlphaYT",
    description:
      "An independent, automated audit platform that tracks stock picks from finance YouTube channels.",
    tags: ["AI", "LLM", "Next.js", "Data Pipeline", "Finance"],
    imageUrl: alphaytImg,
    link: "https://alphayt.com/",
  },
  {
    title: "SatLit",
    description:
      "Open-source, no-code Streamlit dashboard for extracting satellite and climate data from Google Earth Engine.",
    tags: ["Python", "Streamlit", "Google Earth Engine", "Remote Sensing", "Open Source"],
    imageUrl: satlitImg,
    link: "https://github.com/Mastro1/SatLit",
  },
  {
    title: "Crop Yield Database",
    description:
      "Created a novel global database of crop yield data and developed ML models using Google Earth satellite data for yield reconstruction.",
    tags: ["Machine Learning", "AWS", "Python", "Data Analysis", "Agriculture"],
    imageUrl: cropdatabase,
    link: "",
  },
  {
    title: "Biodiversity Impact Assessment Tool",
    description:
      "Developed a Python tool to assess the biodiversity impact of investment portfolios for Asteria Investment Managers.",
    tags: ["Python", "Data Analysis", "Sustainability", "Investment", "Biodiversity"],
    imageUrl: biodiversityimpactassessmenttoolImg,
    link: "",
  },
  {
    title: "Desert Greening Research",
    description:
      "Co-authored research paper exploring desert greening as a potential solution to climate change, analyzing its effects on carbon sequestration, albedo change, and cloud cover. Published in Climate Informatics, 2022.",
    tags: ["Climate Science", "Data Analysis", "Research", "Python", "Machine Learning"],
    imageUrl: desertgreeningresearchImg,
    link: "",
  },
] as const;

export const skillsData = [
  "Python",
  "R",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Agentic Engineering",
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

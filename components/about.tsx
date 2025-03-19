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
        I thrive at the intersection of <span className="font-medium">technology, sustainability, and business strategy</span>. 
        Holding an <span className="font-medium">MSc in Sustainable Management and Technology</span> from EPFL, IMD Business School, 
        and UNIL-HEC, I bring a unique mix of technical expertise and strategic vision to every project. My core skills include{" "}
        <span className="font-medium">Python, R, SQL, Machine Learning, and Data Analysis</span>, which I use to develop innovative, 
        high-impact solutions.
      </p>

      <p className="mb-3">
        Beyond my technical abilities, I excel at bridging the gap between research, execution, and business impact. 
        Whether it's mining and analyzing massive datasets, developing scalable AI models, or leading agile projects, 
        I ensure technology translates into real-world value.
      </p>

      <p className="mb-3">
        Fluent in <span className="font-medium">Italian (native), English, and French</span>, with intermediate proficiency in Russian. 
        When I'm not working, you'll find me tinkering with the latest tech, staying active at the gym, or traveling to discover 
        new places and perspectives.
      </p>

      <p>
        I believe in the <span className="font-medium">transformative power of data</span> and constantly seek ways to push 
        the boundaries of what's possible.
      </p>
    </motion.section>
  );
}

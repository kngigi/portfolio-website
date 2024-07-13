"use client";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useInView, motion } from "framer-motion";

const PROJECT_DATA = [
  {
    id: "1",
    title: "CaseCobra",
    description:
      "A responsive web application that allows users to upload a picture and design personalized phone cases.",
    image: "/casecobra.jpg",
    gitUrl: "https://github.com/kngigi/casecobra",
    demoUrl: "https://casecobra-rouge-seven.vercel.app/",
  },
  {
    id: "2",
    title: "Brainwave",
    description:
      "An AI web application landing page to showcase modern UI/UX design.",
    image: "/brainwave.jpg",
    demoUrl: "https://brainwave-nine-tan.vercel.app/",
    gitUrl: "https://github.com/kngigi/Brainwave-landing-page",
  },
  {
    id: "3",
    title: "Edusity",
    description: "A responsive university web application landing page",
    image: "/edusity.jpg",
    demoUrl: "https://edusity-page.vercel.app/",
    gitUrl: "https://github.com/kngigi/edusity-page",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section ref={ref}>
      <h2 className="text-4xl font-bold text-white mb-4 text-left md:text-center">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
        {PROJECT_DATA.map((project, index) => (
          <motion.li
            key={project.id}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              imgUrl={project.image}
              description={project.description}
              title={project.title}
              gitUrl={project.gitUrl}
              demoUrl={project.demoUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

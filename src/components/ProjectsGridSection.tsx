"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useTranslation } from "@/hooks/useTranslation";
import { handleImage } from "@/lib/config";

export interface ProjectData {
  _id: string;
  hero: {
    category: { en: string; sv: string };
    industry: { en: string; sv: string };
    description: { en: string; sv: string };
    image: string;
    _id: string;
  };
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const { language } = useTranslation();

  const category = project.hero.category[language as "en" | "sv"] ?? project.hero.category.en;
  const title = project.hero.industry[language as "en" | "sv"] ?? project.hero.industry.en;
  const description = project.hero.description[language as "en" | "sv"] ?? project.hero.description.en;
  const image = project.hero.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/projects/${project._id}`}
        className="group block relative overflow-hidden bg-[#0A0A0A]"
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/2] overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={ handleImage(image)}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-6 right-6 text-white/20 text-6xl font-light">
            {String(index + 1).padStart(2, "0")}
          </div>
          <motion.div
            className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-[#2BCC07] bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-6 h-6 text-[#2BCC07]" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8 border-l-2 border-transparent group-hover:border-[#2BCC07] transition-all duration-300 lg:min-h-[220px] flex flex-col justify-between">
          <div>
            <p
              className="text-[#2BCC07] mb-2 md:mb-3 tracking-widest uppercase"
              style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
            >
              {category}
            </p>
            <h3
              className="text-white mb-2 md:mb-3 group-hover:text-[#2BCC07] transition-colors duration-300"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h3>
            <p
              className="text-white/70 mb-2 md:mb-5"
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-white/60 group-hover:text-[#2BCC07] transition-colors duration-300">
            <span style={{ fontSize: "0.875rem", fontWeight: 400 }}>
              View Project
            </span>
            <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }}>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsSectionHeader({ projectData }: { projectData: any }) {
  const { language } = useTranslation();
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 lg:mt-0"
      >
        <div className="flex items-center gap-8 mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-[2px] origin-left bg-[#2BCC07]"
          />
          <p
            className="tracking-[0.3em] uppercase"
            style={{ fontSize: "0.875rem", color: "#2BCC07" }}
          >
            {projectData?.hero?.subtitle?.[language]}
          </p>
        </div>
        <h2
          className="text-white mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {projectData?.hero?.title?.[language]}
        </h2>
        <p
          className="text-white/70 max-w-3xl"
          style={{
            fontSize: "1.125rem",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          {projectData?.hero?.description?.[language]}
        </p>
      </motion.div>
    </div>
  );
}

/**
 * Renders a chunk of 2 projects side-by-side.
 * `chunkIndex` is used to pick the correct pair from the full projectData array.
 */
export function ProjectsChunkSection({
  projectData,
  chunkIndex,
}: {
  projectData: ProjectData[];
  chunkIndex: number;
}) {
  const start = chunkIndex * 2;
  const chunk = projectData.slice(start, start + 2);

  return (
    <div className="container mx-auto px-6 lg:px-12 h-full flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
        {chunk.map((project, i) => (
          <ProjectCard
            key={project._id}
            project={project}
            index={start + i}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Utility: given a flat array, returns how many 2-item chunks are needed.
 * Use this in the page to generate the correct number of slides.
 */
export function getProjectChunkCount(projectData: ProjectData[]): number {
  return Math.ceil((projectData?.length ?? 0) / 2);
}
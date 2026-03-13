"use client";

import { FullPageSlider } from "@/components/FullPageSlider";
import { ProjectsHeroSection } from "@/components/ProjectsHeroSection";
import {
  ProjectsChunkSection,
  ProjectsSectionHeader,
  getProjectChunkCount,
  type ProjectData,
} from "@/components/ProjectsGridSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { withoutAuthAxios } from "@/lib/config";
import { useQuery } from "@tanstack/react-query";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1712903911104-cf22c142c04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBkaXNwbGF5JTIwcG9ydGZvbGlvJTIwcHJvamVjdHMlMjBzaG93Y2FzZXxlbnwxfHx8fDE3NzAxOTkyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080";

const fetchProject = async () => {
  const res = await withoutAuthAxios().get("/project");
  return res.data.data || [];
};

export default function ProjectsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: fetchProject,
  });

  const project = data?.project || [];
  const projectData: ProjectData[] = data?.projectData || [];

  // How many 2-column slides do we need?
  const chunkCount = getProjectChunkCount(projectData);

  // Build the project grid slides dynamically
  const projectSlides = Array.from({ length: chunkCount }, (_, chunkIndex) => ({
    background: "black" as const,
    content: (
      <ProjectsChunkSection
        projectData={projectData}
        chunkIndex={chunkIndex}
      />
    ),
    scrollable: true,
  }));

  return (
    <FullPageSlider
      heroImage={HERO_IMAGE}
      contactImage={CONTACT_IMAGE}
      topSlot={<AnimatedBackground />}
      slides={[
        {
          background: "hero",
          content: (
            <ProjectsHeroSection
              projectData={project[0] || {}}
              backgroundImage={HERO_IMAGE}
              part="content"
            />
          ),
        },
        {
          background: "black",
          content: <ProjectsSectionHeader projectData={project[0] || {}} />,
        },
        // Dynamically generated slides — 2 projects per slide
        ...projectSlides,
        {
          background: "contact",
          content: <ContactSection part="content" />,
        },
      ]}
    />
  );
}
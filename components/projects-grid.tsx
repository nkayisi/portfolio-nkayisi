import { Package } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./section-title";

const projects = [
  {
    title: "Portfolio",
    href: "https://nkayisi.com",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, and Shadcn UI.",
    imgSrc: "/images/projects/portfolio.webp",
  },
  {
    title: "Health Winning World",
    href: "https://hww-invest.com",
    description:
      "An informational system for a health and wellness company based on the mlm business model.",
    imgSrc: "/images/projects/hww.webp",
  },
  {
    title: "Volontaires pour la Protection de la Faune et Flore",
    href: "https://volontaires.org",
    description: "A website for a conservation organization.",
    imgSrc: "/images/projects/vpff.webp",
  },
  {
    title: "Health Success International",
    href: "https://hww-company.com",
    description: "A website for a health and wellness company.",
    imgSrc: "/images/projects/hsi.webp",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="flex flex-col gap-8">
      
      {/* Section Title */}
      <SectionTitle
        title="Recent Projects"
        description="I've worked on a variety of projects, from small personal websites to large-scale enterprise applications."
        icon={<Package className="w-5 h-5" />}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border border-border rounded-lg p-4"
          >
            <h4 className="font-semibold">{project.title}</h4>
            <p className="text-muted-foreground text-sm font-normal leading-normal">
              {project.description}
            </p>
            <div className="relative flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
              <Image
                className="object-cover hover:scale-105 transition-all duration-300"
                src={project.imgSrc}
                alt={project.title}
                width={400}
                height={250}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

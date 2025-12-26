"use client";

import { Package, ExternalLink, ArrowUpRight, Globe, Smartphone, Layers } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./section-title";
import { useLingui } from '@lingui/react';
import { useState } from "react";

type ProjectCategory = "all" | "web" | "mobile";

interface Project {
  href: string;
  imgSrc: string;
  category: ProjectCategory;
  stack: string[];
}

const getProjects = (): Project[] => [
  {
    href: "https://nkayisi.com",
    imgSrc: "/images/projects/portfolio.png",
    category: "web",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lingui"]
  },
  {
    href: "https://hww-invest.com",
    imgSrc: "/images/projects/hww-landingpage.png",
    category: "web",
    stack: ["Next.js", "Django", "Django MPTT", "PostgreSQL"]
  },
  {
    href: "https://hww-invest.com",
    imgSrc: "/images/projects/hww.webp",
    category: "web",
    stack: ["Next.js", "Django", "Django REST Framework", "PostgreSQL"]
  },
  {
    href: "https://jeunesse.pme.cd/",
    imgSrc: "/images/projects/village-opportunites.png",
    category: "web",
    stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL"]
  },
  {
    href: "https://vpf-site.netlify.app/",
    imgSrc: "/images/projects/vpff.webp",
    category: "web",
    stack: ["Nuxt.js", "Tailwind CSS", "Prisma"]
  },
  {
    href: "https://hww-company.com",
    imgSrc: "/images/projects/hsi.webp",
    category: "web",
    stack: ["Vue.js", "Django", "PostgreSQL"]
  },
  {
    href: "https://idcommercedetail.cd/",
    imgSrc: "/images/projects/id-commercant.png",
    category: "web",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    href: "https://artisansrdc.cd/",
    imgSrc: "/images/projects/rencontre-artisants.png",
    category: "web",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    href: "https://tableronde.cd/",
    imgSrc: "/images/projects/table-ronde.png",
    category: "web",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    href: "https://eneo.nkayisi.com/",
    imgSrc: "/images/projects/eneo.png",
    category: "web",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"]
  },
  {
    href: "/",
    imgSrc: "/images/projects/mobile/recette-routiere.png",
    category: "mobile",
    stack: ["React Native", "Django", "PostgreSQL"]
  },
  {
    href: "/",
    imgSrc: "/images/projects/mobile/table-ronde.png",
    category: "mobile",
    stack: ["React Native", "Node.js", "Prisma", "PostgreSQL"]
  }
];

export default function ProjectsGrid() {
  const { _ } = useLingui();
  const projects = getProjects();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all" as ProjectCategory, label: _({ id: 'projects.category.all', message: 'All' }), icon: <Layers className="w-4 h-4" /> },
    { id: "web" as ProjectCategory, label: _({ id: 'projects.category.web', message: 'Web' }), icon: <Globe className="w-4 h-4" /> },
    { id: "mobile" as ProjectCategory, label: _({ id: 'projects.category.mobile', message: 'Mobile' }), icon: <Smartphone className="w-4 h-4" /> },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getDisplayedProjects = () => {
    if (showAll || activeCategory !== "all") {
      return filteredProjects;
    }
    const webProjects = projects.filter(p => p.category === "web").slice(0, 4);
    const mobileProjects = projects.filter(p => p.category === "mobile");
    return [...webProjects, ...mobileProjects];
  };

  const displayedProjects = getDisplayedProjects();
  const hasMoreProjects = activeCategory === "all" && !showAll && projects.length > displayedProjects.length;

  return (
    <div className="flex flex-col gap-8">
      {/* Section Title */}
      <SectionTitle
        title={_({
          id: 'projects.title',
          message: 'Recent Projects'
        })}
        description={_({
          id: 'projects.description',
          message: 'I\'ve worked on a variety of projects, from small personal websites to large-scale enterprise applications.'
        })}
        icon={<Package className="w-5 h-5" />}
      />

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${activeCategory === category.id
              ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20"
              : "border-border bg-card/50 hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
              }`}
          >
            <span className={`transition-transform duration-300 ${activeCategory === category.id ? "scale-110" : "group-hover:scale-110"
              }`}>
              {category.icon}
            </span>
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {displayedProjects.map((project, index) => (
          <a
            key={index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-full border rounded-xl border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 ${project.category === "mobile"
              ? "h-[700px] sm:h-[650px] max-w-[350px] mx-auto overflow-hidden"
              : "h-[200px] aspect-square overflow-hidden"
              }`}
          >
            {/* Project Image */}
            <div className={project.category === "mobile" ? "relative w-full h-full flex items-center justify-center p-4" : "w-full h-full"}>
              {project.category === "mobile" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[90%] h-[95%] bg-black rounded-[3rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden">
                    {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[28px] bg-black rounded-b-3xl z-10"></div> */}
                    <Image
                      className="w-full h-full object-cover"
                      src={project.imgSrc}
                      alt="Project"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              )}
              {project.category !== "mobile" && (
                <Image
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={project.imgSrc}
                  alt="Project"
                  width={600}
                  height={400}
                />
              )}
            </div>

            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* External Link Icon */}
            <div className="absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
              <ExternalLink className="w-4 h-4 text-primary" />
            </div>

            {/* Tech Stack Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-semibold rounded-md bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {hasMoreProjects && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <span className="text-sm font-medium">
              {_({ id: 'projects.showAll', message: 'Voir tous les projets' })}
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      )}
    </div>
  );
}

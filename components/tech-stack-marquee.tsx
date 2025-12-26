"use client";

import Image from "next/image";

const technologies = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg", invert: true },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Python", icon: "/icons/python_2.svg" },
    { name: "Django", icon: "/icons/django.svg" },
    { name: "Vue.js", icon: "/icons/vuejs.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Git", icon: "/icons/git_2.svg" },
];

export default function TechStackMarquee() {
    return (
        <div className="w-full overflow-hidden py-4 sm:py-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10"></div>

            <div className="flex animate-scroll">
                {[...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={index}
                        className="group flex-shrink-0 mx-3 sm:mx-6 flex flex-col items-center gap-1 sm:gap-2"
                    >
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border bg-card/50 backdrop-blur-sm p-2 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={48}
                                height={48}
                                className={`w-full h-full object-contain ${tech.invert ? 'dark:invert' : ''}`}
                            />
                        </div>
                        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

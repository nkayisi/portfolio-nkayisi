"use client";

import { Home, Briefcase, GraduationCap, Mail, Folder } from "lucide-react";
import { useState, useEffect } from "react";
import { useLingui } from '@lingui/react';

export default function QuickLinks() {
    const { _ } = useLingui();
    const [activeSection, setActiveSection] = useState("");

    const links = [
        {
            id: "hero",
            icon: <Home className="w-4 h-4" />,
            label: _({ id: 'nav.home', message: 'Home' })
        },
        {
            id: "skills",
            icon: <GraduationCap className="w-4 h-4" />,
            label: _({ id: 'nav.skills', message: 'Skills' })
        },
        {
            id: "projects",
            icon: <Folder className="w-4 h-4" />,
            label: _({ id: 'nav.projects', message: 'Projects' })
        },
        {
            id: "experience",
            icon: <Briefcase className="w-4 h-4" />,
            label: _({ id: 'nav.experience', message: 'Experience' })
        },
        {
            id: "contact",
            icon: <Mail className="w-4 h-4" />,
            label: _({ id: 'nav.contact', message: 'Contact' })
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(links[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [links]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            {/* Desktop Navigation - Left Side */}
            <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
                {links.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="group relative"
                        aria-label={link.label}
                    >
                        <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${activeSection === link.id
                                ? "border-primary bg-primary/10 scale-110"
                                : "border-border bg-card/50 hover:border-primary/50 hover:bg-primary/5"
                                }`}
                        >
                            <div className={`transition-colors duration-300 ${activeSection === link.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                }`}>
                                {link.icon}
                            </div>
                        </div>

                        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card border border-border rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap shadow-lg">
                            <span className="text-xs font-medium text-foreground">{link.label}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Mobile Navigation - Bottom Bar */}
            <div className=" bottom-0 left-0 right-0 z-40 hidden">
                <div className="flex justify-around items-center px-2 py-2 backdrop-blur-xs">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="group relative flex flex-col items-center px-3 py-1"
                            aria-label={link.label}
                        >
                            <div
                                className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${activeSection === link.id
                                    ? "bg-primary/10 scale-110"
                                    : "hover:bg-primary/5"
                                    }`}
                            >
                                <div className={`transition-colors duration-300 ${activeSection === link.id ? "text-primary" : "text-muted-foreground"
                                    }`}>
                                    {link.icon}
                                </div>
                            </div>
                            <span className={`text-[10px] font-medium transition-colors duration-300 ${activeSection === link.id ? "text-primary" : "text-muted-foreground"
                                }`}>
                                {link.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

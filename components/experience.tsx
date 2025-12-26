"use client";

import { Expand } from "lucide-react";
import SectionTitle from "./section-title";
import { useLingui } from '@lingui/react';

type TranslationFunction = (params: { id: string; message: string }) => string;

const getExperiences = (_: TranslationFunction) => [
    {
        title: _({
            id: 'experience.fullstack_web_dev',
            message: 'Full-stack Web Developer'
        }),
        description: _({
            id: 'experience.fullstack_web_dev_desc',
            message: 'I design and develop applications tailored to the needs of SMEs and large companies, ensuring their performance and scalability. I also deploy and secure scalable applications on servers, guaranteeing their reliability and operational continuity.'
        }),
        year: "2023 - " + _({
            id: 'experience.today',
            message: 'Today'
        }),
        company: "Quantum Vertex SA",
        location: _({
            id: 'experience.kinshasa_drc',
            message: 'Kinshasa, Democratic Republic of Congo'
        }),
        color: "secondary",
    },
    {
        title: _({
            id: 'experience.frontend_dev',
            message: 'Front-end Developer'
        }),
        description: _({
            id: 'experience.frontend_dev_desc',
            message: 'Developed dynamic and responsive web applications using React, Next.js, and TypeScript. Collaborated with cross-functional teams to integrate payment systems like Google and Stripe, delivering seamless user experiences for diverse clients.'
        }),
        year: "2022 - 2023",
        company: "AG-ConsultTech",
        location: _({
            id: 'experience.remote',
            message: 'Remote'
        }),
        color: "blue-300",
    },
    {
        title: _({
            id: 'experience.fullstack_dev',
            message: 'Full-stack Developer'
        }),
        description: _({
            id: 'experience.fullstack_dev_desc',
            message: 'Built and maintained robust web applications across the entire stack. Leveraged modern frameworks and cloud technologies to deliver scalable solutions, ensuring high performance and reliability for business-critical projects.'
        }),
        year: "2020 - 2022",
        company: "Hebel Corporation",
        location: _({
            id: 'experience.beni_drc',
            message: 'Beni, Democratic Republic of Congo'
        }),
        color: "primary",
    },
];



export function Experience() {
    const { _ } = useLingui();
    const experiences = getExperiences(_);

    return (
        <div className="flex flex-col gap-8">
            <SectionTitle
                title={_({
                    id: 'experience.title',
                    message: 'Recent Experience'
                })}
                description={_({
                    id: 'experience.description',
                    message: 'My professional experience covers software architecture and full-stack development, delivering scalable web and mobile applications as well as impactful solutions for businesses of all sizes.'
                })}
                icon={<Expand className="w-5 h-5" />}
            />
            <div className="relative flex flex-col gap-6">
                <div className="absolute left-[11px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

                {experiences.map((experience, index) => (
                    <div
                        key={experience.title}
                        className="group relative flex flex-row gap-6 border border-border hover:border-primary/50 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-x-1"
                        style={{
                            animationDelay: `${index * 150}ms`
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                        <div className="relative z-10 flex items-center justify-center">
                            <div className="absolute w-6 h-6 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center min-w-6 min-h-6 rounded-full border-2 border-background shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <div className="w-2 h-2 bg-background rounded-full"></div>
                            </div>
                        </div>

                        <div className="relative flex flex-col gap-3 flex-1 z-10">
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                    {experience.year}
                                </span>
                            </div>

                            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                                {experience.title}
                            </h4>

                            <span className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                                <span className="text-primary">●</span>
                                {experience.company} - {experience.location}
                            </span>

                            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                {experience.description}
                            </p>
                        </div>

                        <div className="absolute top-2 right-2 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
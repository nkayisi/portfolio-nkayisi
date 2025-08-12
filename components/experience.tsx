"use client";

import { Expand } from "lucide-react";
import SectionTitle from "./section-title";
import { useLingui } from '@lingui/react';

const getExperiences = (_: any) => [
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
            <div className="flex flex-col gap-4">
                {experiences.map((experience) => (
                    <div key={experience.title} className="flex flex-row gap-5 border border-slate-200 dark:border-slate-900 bg-zinc-50 dark:bg-gray-950 rounded-lg p-6">
                        <div className={`bg-slate-200 dark:bg-primary/35 flex items-center justify-center border border-border min-w-6 min-h-12 rounded-full`}></div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-500 italic">{experience.year}</span>
                            <h4 className="font-medium">{experience.title}</h4>
                            <span className="text-xs text-gray-500 italic">
                                {experience.company} - {experience.location}</span>
                            <p className="text-sm font-thin leading-relaxed">
                                {experience.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
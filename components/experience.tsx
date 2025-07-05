import { IconDownload } from "@tabler/icons-react";
import { Expand } from "lucide-react";
import SectionTitle from "./section-title";

const experiences = [
    {
        title: "Full-stack Web Developer",
        description:
            "I design and develop applications tailored to the needs of SMEs and large companies, ensuring their performance and scalability. I also deploy and secure scalable applications on servers, guaranteeing their reliability and operational continuity.",
        year: "2023 - Today",
        company: "Quantum Vertex SA",
        location: "Kinshasa, Democratic Republic of Congo",
        color: "secondary",
    },
    {
        title: "Front-end Developer",
        description: "Developed dynamic and responsive web applications using React, Next.js, and TypeScript. Collaborated with cross-functional teams to integrate payment systems like Google and Stripe, delivering seamless user experiences for diverse clients.",
        year: "2023 - 2024",
        company: "AG-ConsultTech",
        location: "Remote",
        color: "blue-300",
    },
    {
        title: "Full-stack Developer",
        description: "Built and maintained robust web applications across the entire stack. Leveraged modern frameworks and cloud technologies to deliver scalable solutions, ensuring high performance and reliability for business-critical projects.",
        year: "2020 - 2023",
        company: "Hebel Corporation",
        location: "Beni, Democratic Republic of Congo",
        color: "primary",
    },
];



export function Experience() {
    return (
        <div className="flex flex-col gap-8">
            <SectionTitle
                title="Experience"
                description="I've completed several training programs to enhance my skills and stay up-to-date with the latest technologies."
                icon={<Expand className="w-6 h-6" />}
            />
            <div className="flex flex-col gap-4">
                {experiences.map((experience) => (
                    <div key={experience.title} className="flex flex-row gap-5 border border-slate-200 dark:border-slate-900 bg-zinc-50 dark:bg-gray-950 rounded-lg p-6">
                        <div className={`bg-slate-200 dark:bg-background flex items-center justify-center border border-border min-w-8 min-h-12 rounded-full`}></div>
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
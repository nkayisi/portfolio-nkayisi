"use client";

import { Brain } from "lucide-react";
import { Button } from "./ui/moving-border";
import { IconDownload } from "@tabler/icons-react";
import React from "react";
import SectionTitle from "./section-title";
import { useLingui } from '@lingui/react';

const getTrainings = (_: any) => [
  {
    title: "Udemy",
    subtitle: _({
      id: 'training.udemy.subtitle',
      message: 'AI application development with React, Next.js, TypeScript, Google and Stripe'
    }),
    description: _({
      id: 'training.udemy.description',
      message: 'Completed an in-depth training focused on building AI-powered web applications. Acquired hands-on experience in integrating advanced APIs, payment solutions, and deploying scalable, production-ready projects using the latest technologies.'
    }),
    year: 2024,
    certificate: "https://www.udemy.com/certificate/UC-1234567890/",
  },
  {
    title: "OpenClassrooms",
    subtitle: _({
      id: 'training.openclassrooms.subtitle',
      message: 'Mettre en place une architecture microservices'
    }),
    description: _({
      id: 'training.openclassrooms.description',
      message: 'Gained practical expertise in designing, deploying, and managing microservices-based systems. Learned to optimize application scalability, maintainability, and resilience through service orchestration.'
    }),
    year: 2023,
    certificate: "https://www.openclassrooms.com/certificate/1234567890",
  },
  {
    title: "Kubernetes Inc.",
    subtitle: _({
      id: 'training.kubernetes.subtitle',
      message: 'Certification Google Cloud, Twilio and Slack'
    }),
    description: _({
      id: 'training.kubernetes.description',
      message: 'Developed skills in deploying and managing cloud infrastructure, integrating messaging services, and automating workflows to enhance application functionality and scalability.'
    }),
    year: 2019,
    certificate: "https://www.kubernetsinc.com/certificate/1234567890",
  },
];

export default function FurtherTraining() {
  const { _ } = useLingui();
  const trainings = getTrainings(_);

  return (
    <div className="flex flex-col gap-8">
      {/* Section Title */}
      <SectionTitle
        title={_({
          id: 'training.title',
          message: 'Further Training'
        })}
        description={_({
          id: 'training.description',
          message: 'I\'ve completed several training programs to enhance my skills and stay up-to-date with the latest technologies.'
        })}
        icon={<Brain className="w-5 h-5" />}
      />

      {/* Further Training Details */}
      <div className="flex flex-col gap-4">
        {trainings.map((training) => (
          <div key={training.title} className="flex flex-col gap-2 border border-border rounded-lg p-4">
            <div className="flex flex-row gap-3 flex-wrap justify-between items-center">
              <h4 className="font-semibold">{training.title}</h4>
              <div className="flex flex-row gap-2">
                <Button
                  variant="outline"
                  className="text-[10px] leading-tight tracking-[-0.015em] py-2 px-3.5 min-w-0 !text-primary"
                >
                  <IconDownload className="w-4 h-4 mr-2" />
                  {_({
                    id: 'training.get_certificate',
                    message: 'Get my certificate'
                  })}
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground text-sm font-normal leading-normal">
                {training.subtitle}
              </p>
              <p className="text-sm font-thin leading-relaxed">
                {training.description}
              </p>
              <span className="text-muted-foreground text-sm font-thin italic w-fit rounded-full px-4 py-1 border border-border">
                {training.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

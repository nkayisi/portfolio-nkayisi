"use client";

import { Brain } from "lucide-react";
import { Button } from "./ui/moving-border";
import { IconDownload } from "@tabler/icons-react";
import React from "react";
import SectionTitle from "./section-title";
import { useLingui } from '@lingui/react';

type TranslationFunction = (params: { id: string; message: string }) => string;

const getTrainings = (_: TranslationFunction) => [
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
      <div className="flex flex-col gap-6">
        {trainings.map((training, index) => (
          <div
            key={training.title}
            className="group relative flex flex-col gap-4 border border-border hover:border-primary/50 rounded-xl p-6 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-row gap-3 flex-wrap justify-between items-start">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {training.title}
                  </h4>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {training.year}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Button
                  variant="outline"
                  className="text-xs leading-tight tracking-[-0.015em] py-2 px-4 min-w-0 !text-primary hover:scale-105 transition-transform duration-300"
                >
                  <IconDownload className="w-4 h-4 mr-2" />
                  {_({
                    id: 'training.get_certificate',
                    message: 'Get my certificate'
                  })}
                </Button>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <p className="text-muted-foreground text-sm font-medium leading-normal group-hover:text-foreground/90 transition-colors duration-300">
                {training.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {training.description}
              </p>
            </div>

            <div className="absolute top-2 right-2 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

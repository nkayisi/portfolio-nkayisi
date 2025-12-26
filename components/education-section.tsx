"use client";

import { MapPin, School } from "lucide-react";
import React from "react";
import SectionTitle from "./section-title";
import { useLingui } from '@lingui/react';

export default function EducationSection() {
  const { _ } = useLingui();

  return (
    <div className="flex flex-col gap-8">
      {/* Section Title */}
      <SectionTitle
        title={_({
          id: 'education.title',
          message: 'Education'
        })}
        description={_({
          id: 'education.description',
          message: 'I\'ve studied at the Christian Bilingual University of Congo (UCBC), where I earned a Bachelor\'s (B.Sc +4) degree in Computer Engineering.'
        })}
        icon={<School className="w-6 h-6" />}
      />

      {/* Education Details */}
      <div className="group relative flex flex-col gap-4 border border-border hover:border-primary/50 rounded-xl p-6 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
            {_({
              id: 'education.location',
              message: 'Location'
            })}
          </h4>
        </div>

        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500 z-10 border border-border/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6476354050697!2d29.489468375308434!3d0.5299808994648484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x176100a3749b3145%3A0x7a8c3762f7d03179!2sUniversite%20Chretienne%20Bilingue%20du%20Congo!5e0!3m2!1sen!2sus!4v1751413903617!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={_({
              id: 'education.map_title',
              message: 'Christian Bilingual University of Congo - Beni, DRC'
            })}
          />
        </div>

        <div className="absolute bottom-2 right-2 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}

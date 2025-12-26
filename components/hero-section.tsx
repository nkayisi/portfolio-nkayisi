'use client'

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useLingui } from '@lingui/react';


export default function HeroSection() {
  const { _ } = useLingui();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "discovery-call" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div className="w-full relative pt-8">
      <div className="w-full sm:px-10 px-4 flex flex-col gap-8 justify-center items-center">

        <div className="relative group animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
          <Image
            className="relative object-fill rounded-full ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 group-hover:scale-105"
            src="/images/profile.jpg"
            alt={_({
              id: 'photo.alt',
              message: 'Photo of me'
            })}
            width={150}
            height={150}
            priority
          />
          <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg animate-in zoom-in duration-700 delay-300">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm/6 text-center font-[family-name:var(--font-geist-mono)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-in fade-in duration-1000 delay-300">
            {_({
              id: 'hero.greeting',
              message: 'Hi, I\'m Nelson K. Kayisi'
            })}
          </h1>
          <p className="tracking-[-.01em] text-muted-foreground leading-7 max-w-2xl">
            <code className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-3 py-1.5 rounded-lg font-[family-name:var(--font-geist-mono)] font-semibold border border-primary/30 hover:border-primary/50 transition-colors duration-300 inline-flex items-center gap-1">
              {_({
                id: 'role.fullstack',
                message: 'Full-stack Developer'
              })}
            </code>{" "}
            {_({
              id: 'role.and',
              message: 'and'
            })} <code className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-3 py-1.5 rounded-lg font-[family-name:var(--font-geist-mono)] font-semibold border border-primary/30 hover:border-primary/50 transition-colors duration-300 inline-flex items-center gap-1">
              {_({
                id: 'role.architect',
                message: 'Software Architect'
              })}
            </code>{" "}
            {_({
              id: 'hero.description',
              message: 'with years of experience in building web and mobile applications. Passionate about AI and creating beautiful and functional user experiences.'
            })}
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center flex-row flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <a
            href="#"
            rel="noopener noreferrer"
            data-cal-namespace="discovery-call"
            data-cal-link="nkayisi/discovery-call"
            data-cal-config='{"layout":"month_view"}'
            className="group/cta"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="dark:bg-black bg-primary/30 cursor-pointer text-primary flex items-center space-x-2 px-6 py-2 text-sm sm:text-base group-hover/cta:scale-105 transition-transform duration-300"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {_({
                id: 'cta.available',
                message: 'I\'m available for work'
              })}
            </HoverBorderGradient>
          </a>

          <a
            href="#contact"
            className="group/mail"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="dark:bg-black bg-primary/30 cursor-pointer text-primary flex items-center space-x-2 p-2 text-sm sm:text-base group-hover/mail:scale-105 transition-transform duration-300"
            >
              <Mail className="w-7 h-7 group-hover/mail:rotate-12 transition-transform duration-300" />
            </HoverBorderGradient>
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-4 sm:gap-6 group overflow-x-auto sm:overflow-visible sm:justify-center pt-14 pb-10 text-sm/6 text-center font-[family-name:var(--font-geist-mono)] px-4 animate-in fade-in duration-1000 delay-700 scrollbar-hide">
        <Image
          className="object-cover min-w-[250px] sm:w-[400px] h-[140px] -rotate-6 rounded-lg group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-lg border border-border hover:shadow-primary/20 hover:shadow-2xl"
          src="/images/img_1.webp"
          alt={_({
            id: 'images.about',
            message: 'About me'
          })}
          width={400}
          height={250}
        />
        <Image
          className="object-cover min-w-[250px] sm:w-[400px] h-[140px] rotate-6 rounded-lg group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 delay-75 shadow-lg border border-border hover:shadow-primary/20 hover:shadow-2xl"
          src="/images/img_2.webp"
          alt={_({
            id: 'images.about',
            message: 'About me'
          })}
          width={400}
          height={250}
        />
        <Image
          className="object-cover min-w-[250px] sm:w-[400px] h-[140px] -rotate-6 rounded-lg group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 delay-150 shadow-lg border border-border hover:shadow-primary/20 hover:shadow-2xl"
          src="/images/img_3.webp"
          alt={_({
            id: 'images.about',
            message: 'About me'
          })}
          width={400}
          height={250}
        />
      </div>
      <div className="w-full sm:px-10 px-4 flex flex-col text-muted-foreground leading-relaxed animate-in fade-in duration-1000 delay-1000">
        <p className="mb-4 hover:text-foreground transition-colors duration-300">
          {_({
            id: 'about.expertise',
            message: 'I specialize in modern mobile and web technologies and love building applications that make a difference. My expertise includes React/Next.js, Vue.js/Nuxt.js, JavaScript/TypeScript, React Native and Python/Django.'
          })}
        </p>
        <p className="hover:text-foreground transition-colors duration-300">
          {_({
            id: 'about.personal',
            message: 'When I\'m not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.'
          })}
        </p>
      </div>
    </div>
  );
}

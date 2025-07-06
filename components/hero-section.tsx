'use client'

import { ThemeToggle } from "@/components/theme-toggle";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


export default function HeroSection() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <div className="w-full relative pt-16">
      <div className="w-full sm:px-10 px-4 flex flex-col gap-8 justify-center items-center">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <Image
          className="object-fill rounded-full ring-4 ring-primary/20"
          // src="https://placehold.co/100x100.png"
          src="/images/profile.jpg"
          alt="Photo of me"
          width={150}
          height={150}
          priority
        />
        <div className="flex flex-col gap-4 text-sm/6 text-center font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-2xl font-bold text-foreground">
            Hi, I'm <span className="text-primary">Nelson Kayisi</span>
          </h1>
          <p className="tracking-[-.01em] text-muted-foreground">
            <code className="bg-muted text-muted-foreground px-2 py-1 rounded-md font-[family-name:var(--font-geist-mono)] font-semibold border border-border">
              Full-stack developer
            </code>{" "}
            with years of experience in building web and mobile applications.
            Passionate about creating beautiful and functional user experiences.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-row flex-wrap">
          <a
            href="#"
            rel="noopener noreferrer"
            data-cal-namespace="discovery-call"
            data-cal-link="nkayisi/discovery-call"
            data-cal-config='{"layout":"month_view"}'
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="dark:bg-black bg-primary/30 cursor-pointer text-primary flex items-center space-x-2 px-6 py-2 text-sm sm:text-base"
            >
              I'm available for work
            </HoverBorderGradient>
          </a>

          <a
            href="#contact"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="dark:bg-black bg-primary/30 cursor-pointer text-primary flex items-center space-x-2 p-2 text-sm sm:text-base"
            >
              <Mail className="w-7 h-7" />
            </HoverBorderGradient>
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-6 group sm:overflow-visible overflow-auto pt-14 pb-10 text-sm/6 text-center font-[family-name:var(--font-geist-mono)] px-4">
        <Image
          className="object-cover w-[400px] h-[140px] -rotate-5 rounded-lg group-hover:rotate-0 transition-all duration-300 shadow-lg border border-border"
          // src="https://placehold.co/400x250.png"
          src="/images/img_1.webp"
          alt="About me"
          width={400}
          height={250}
        />
        <Image
          className="object-cover w-[400px] h-[140px] rotate-5 rounded-lg group-hover:rotate-0 transition-all duration-300 shadow-lg border border-border"
          // src="https://placehold.co/400x250.png"
          src="/images/img_2.webp"
          alt="About me"
          width={400}
          height={250}
        />
        <Image
          className="object-cover w-[400px] h-[140px] -rotate-5 rounded-lg group-hover:rotate-0 transition-all duration-300 shadow-lg border border-border"
          // src="https://placehold.co/400x250.png"
          src="/images/img_3.webp"
          alt="About me"
          width={400}
          height={250}
        />
      </div>
      <div className="w-full sm:px-10 px-4 flex flex-col text-muted-foreground leading-relaxed">
        <p className="mb-4">
          I specialize in modern web technologies and love building applications
          that make a difference. My expertise includes React, Next.js,
          JavaScript, TypeScript, and Python.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open source projects, or sharing knowledge with the
          developer community.
        </p>
      </div>
    </div>
  );
}

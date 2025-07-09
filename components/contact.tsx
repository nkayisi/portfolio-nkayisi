"use client";

import SectionTtitle from "@/components/section-title";
import { Contact } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div id="contact" className="flex flex-col gap-6 pb-12">
      <SectionTtitle
        title="Let's work together"
        description="Book a discovery call with me to discuss your needs, ask your questions, and explore how we can support your projects."
        icon={<Contact className="w-5 h-5" />}
      />

      <div className="flex flex-col gap-8">
        <div>
          <Button
            variant="outline"
            className="max-w-max text-sm leading-tight tracking-[-0.015em] py-2 px-3.5 min-w-0 !text-primary"
            data-cal-namespace="discovery-call"
            data-cal-link="nkayisi/discovery-call"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a discovery call
          </Button>
        </div>

        <a
          href="mailto:nelsonkayisirirya5@gmail.com"
          target="_blank"
          className="max-w-md sm:min-w-md mx-auto shadow-2xl bg-slate-50 dark:bg-black/50 -rotate-12 relative inline-flex flex-col border border-border rounded-lg p-8 hover:scale-95 duration-500"
        >
          <Image
            src="/icons/pin.png"
            alt="Profile"
            width={200}
            height={500}
            className="absolute -top-5 -right-1 w-10 h-10"
          />

          <div>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-lg text-muted-foreground font-semibold">
                Nelson K. Kayisi
              </h1>
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={200}
                height={500}
                className="w-22 h-32 object-cover border-7 rotate-12"
              />
            </div>

            <div>
              <span className="text-accent-foreground font-thin">Email me</span>
              <h3>nelsonkayisirirya5@gmail.com</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

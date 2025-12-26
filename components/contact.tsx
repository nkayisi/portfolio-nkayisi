"use client";

import SectionTtitle from "@/components/section-title";
import { Contact } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useLingui } from '@lingui/react';

export function ContactSection() {
  const { _ } = useLingui();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div id="contact" className="flex flex-col gap-8 pb-12">
      <SectionTtitle
        title={_({
          id: 'contact.title',
          message: 'Let\'s work together'
        })}
        description={_({
          id: 'contact.description',
          message: 'Book a discovery call with me to discuss your needs, ask your questions, and explore how we can support your projects.'
        })}
        icon={<Contact className="w-5 h-5" />}
      />

      <div className="flex flex-col gap-8">
        <div className="group">
          <Button
            variant="outline"
            className="max-w-max text-sm leading-tight tracking-[-0.015em] py-3 px-5 min-w-0 !text-primary hover:scale-105 transition-transform duration-300"
            data-cal-namespace="discovery-call"
            data-cal-link="nkayisi/discovery-call"
            data-cal-config='{"layout":"month_view"}'
          >
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {_({
              id: 'contact.book_call',
              message: 'Book a discovery call'
            })}
          </Button>
        </div>

        <a
          href="mailto:nelsonkayisirirya5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group max-w-md sm:min-w-md mx-auto shadow-2xl bg-gradient-to-br from-card/90 to-card backdrop-blur-sm -rotate-6 hover:rotate-0 relative inline-flex flex-col border border-border hover:border-primary/50 rounded-xl p-8 hover:scale-105 duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <Image
            src="/icons/pin.png"
            alt={_({
              id: 'contact.pin_alt',
              message: 'Pin'
            })}
            width={200}
            height={500}
            className="absolute -top-5 -right-1 w-10 h-10 group-hover:rotate-12 transition-transform duration-300"
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-lg text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                Nelson K. Kayisi
              </h1>
              <Image
                src="/images/profile.jpg"
                alt={_({
                  id: 'contact.profile_alt',
                  message: 'Profile'
                })}
                width={200}
                height={500}
                className="w-22 h-32 object-cover border-4 border-border rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg"
              />
            </div>

            <div className="mt-4">
              <span className="text-muted-foreground text-sm font-medium">{_({
                id: 'contact.email_me',
                message: 'Email me'
              })}</span>
              <h3 className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">nelsonkayisirirya5@gmail.com</h3>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        </a>
      </div>
    </div>
  );
}

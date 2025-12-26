"use client";

import { Facebook, Github, Twitter } from "lucide-react";
import React from "react";
import { useLingui } from '@lingui/react';

export default function Footer() {
  const { _ } = useLingui();

  return (
    <footer className="w-full flex flex-col gap-6 border-t border-border/50 py-10 font-[family-name:var(--font-geist-mono)] text-sm/6 text-center text-muted-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-50"></div>

      <div className="relative z-10 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm overflow-hidden"
          href="https://twitter.com/nkayisi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={_({
            id: 'footer.twitter_label',
            message: 'Follow me on Twitter'
          })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Twitter className="w-5 h-5 relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </a>
        <a
          className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm overflow-hidden"
          href="https://github.com/nkayisi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={_({
            id: 'footer.github_label',
            message: 'View my GitHub profile'
          })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Github className="w-5 h-5 relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </a>
        <a
          className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm overflow-hidden"
          href="https://facebook.com/nelsonkayisirirya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={_({
            id: 'footer.facebook_label',
            message: 'Connect with me on Facebook'
          })}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Facebook className="w-5 h-5 relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </a>
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"></div>
        <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          © {new Date().getFullYear()} Nelson Kayisi. {_(
            {
              id: 'footer.rights',
              message: 'All rights reserved.'
            }
          )}
        </p>
      </div>
    </footer>
  );
}

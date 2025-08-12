"use client";

import { Facebook, Github, Twitter } from "lucide-react";
import React from "react";
import { useLingui } from '@lingui/react';

export default function Footer() {
  const { _ } = useLingui();

  return (
    <footer className="w-full flex flex-col gap-3 border-t border-border py-6 font-[family-name:var(--font-geist-mono)] text-sm/6 text-center text-muted-foreground">
      <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-110"
          href="https://twitter.com/nkayisi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={_({
            id: 'footer.twitter_label',
            message: 'Follow me on Twitter'
          })}
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-110"
          href="https://github.com/nkayisi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={_({
            id: 'footer.github_label',
            message: 'View my GitHub profile'
          })}
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-110"
          href="https://facebook.com/nelsonkayisirirya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={_({
            id: 'footer.facebook_label',
            message: 'Connect with me on Facebook'
          })}
        >
          <Facebook className="w-4 h-4" />
        </a>
      </div>
      <p className="italic">
        © {new Date().getFullYear()} Nelson Kayisi. {_(
          {
            id: 'footer.rights',
            message: 'All rights reserved.'
          }
        )}
      </p>
    </footer>
  );
}

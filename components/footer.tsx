import { Facebook, Github, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-3 border-t border-border py-6 font-[family-name:var(--font-geist-mono)] text-sm/6 text-center text-muted-foreground">
      <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-110"
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-110"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-110"
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-4 h-4" />
        </a>
      </div>
      <p className="italic">
        &copy; {new Date().getFullYear()} Nelson Kayisi. All rights reserved.
      </p>
    </footer>
  );
}

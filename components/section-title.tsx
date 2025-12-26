import React from "react";

export default function SectionTitle({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-4 text-muted-foreground leading-relaxed group">
      <div className="flex flex-row gap-4 flex-wrap justify-between items-center">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="relative text-primary text-sm font-bold flex items-center gap-3 uppercase tracking-wider">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              {icon}
            </span>
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
        </div>
        {children && <div className="animate-in fade-in duration-500">{children}</div>}
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
        <p className="text-muted-foreground text-sm font-normal leading-relaxed pt-3 group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

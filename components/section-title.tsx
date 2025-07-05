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
    <div className="w-full flex flex-col gap-2 text-muted-foreground leading-relaxed">
      <div className="flex flex-row gap-4 flex-wrap justify-between items-center">
        <h3 className="text-primary text-sm flex items-center gap-2 uppercase">
          {icon}
          {title}
        </h3>
        {children && <div className="">{children}</div>}
      </div>
      <p className="text-muted-foreground text-sm font-normal leading-normal">
        {description}
      </p>
    </div>
  );
}

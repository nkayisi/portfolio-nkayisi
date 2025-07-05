import { Star } from "lucide-react";
import React from "react";
import SectionTitle from "./section-title";

export default function Recommendations() {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Section Title */}
      <SectionTitle
        title="Recommendations"
        description="I've received several recommendations from my colleagues and clients."
        icon={<Star className="w-6 h-6" />}
      />

      {/* Recommendations Details */}
    </div>
  );
}

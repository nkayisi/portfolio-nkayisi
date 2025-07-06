"use client";

import { Star } from "lucide-react";
import React from "react";
import SectionTitle from "./section-title";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",
    name: "Charles Muhongya",
    title: "PO - Hebel Corporation",
    image: "",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows.",
    name: "William Shakespeare",
    title: "Vamos K. Masingo - CEO Health Winning World",
    image: "",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "Vice President - VPFF",
    image: "",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "CEO Health Success International",
    image: "",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest.",
    name: "Herman Melville",
    title: "CEO Health Success International",
    image: "",
  },
];

export default function Recommendations() {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Section Title */}
      <SectionTitle
        title="Recommendations"
        description="I’ve received several recommendations from my colleagues and clients, who have praised my professionalism, technical expertise."
        icon={<Star className="w-5 h-5" />}
      />

      {/* Recommendations Details */}
      <div className="h-max rounded-2xl flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

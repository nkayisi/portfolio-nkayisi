"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 lg:bottom-8 right-8 z-50 group flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary/50 bg-card/90 backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Back to top"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300" />
        </button>
    );
}

"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div
                className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </div>
    );
}

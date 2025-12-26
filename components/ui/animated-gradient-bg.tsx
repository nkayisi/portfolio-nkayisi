"use client";

import { useEffect, useRef } from "react";

export function AnimatedGradientBg() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let time = 0;

        const animate = () => {
            time += 0.005;

            const gradient = ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const hue1 = (time * 50) % 360;
            const hue2 = (time * 50 + 120) % 360;
            const hue3 = (time * 50 + 240) % 360;

            gradient.addColorStop(0, `hsla(${hue1}, 70%, 50%, 0.1)`);
            gradient.addColorStop(0.5, `hsla(${hue2}, 70%, 50%, 0.1)`);
            gradient.addColorStop(1, `hsla(${hue3}, 70%, 50%, 0.1)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-30 mix-blend-soft-light"
        />
    );
}

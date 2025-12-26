"use client";

import { useEffect, useState, useRef } from "react";
import { Code2, Briefcase, Award, Users } from "lucide-react";
import { useLingui } from '@lingui/react';

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    return <div ref={ref}>{count}+</div>;
}

export default function StatsSection() {
    const { _ } = useLingui();

    const stats = [
        {
            icon: <Code2 className="w-6 h-6" />,
            value: 41,
            label: _({
                id: 'stats.projects',
                message: 'Projects Completed'
            }),
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            value: 5,
            label: _({
                id: 'stats.experience',
                message: 'Years Experience'
            }),
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Award className="w-6 h-6" />,
            value: 4,
            label: _({
                id: 'stats.certifications',
                message: 'Certifications'
            }),
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Users className="w-6 h-6" />,
            value: 25,
            label: _({
                id: 'stats.clients',
                message: 'Happy Clients'
            }),
            color: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden"
                    style={{
                        animationDelay: `${index * 100}ms`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} p-[2px] mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                            <div className="text-primary">
                                {stat.icon}
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        <AnimatedNumber value={stat.value} />
                    </div>

                    <p className="relative z-10 text-[10px] sm:text-xs text-muted-foreground text-center mt-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {stat.label}
                    </p>

                    <div className="absolute top-2 right-2 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
            ))}
        </div>
    );
}

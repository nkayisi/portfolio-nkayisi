"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleThemeChange = (newTheme: string) => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setTheme(newTheme as "light" | "dark" | "system")
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-full border border-border">
      <button
        onClick={() => handleThemeChange("light")}
        className={cn(
          "p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110",
          theme === "light"
            ? "bg-primary text-primary-foreground shadow-lg scale-105"
            : "text-muted-foreground hover:text-foreground hover:bg-accent",
          isAnimating && "animate-pulse"
        )}
        title="Mode clair"
        disabled={isAnimating}
      >
        <Sun className={cn(
          "h-4 w-4 transition-all duration-300",
          isAnimating && "animate-spin"
        )} />
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={cn(
          "p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110",
          theme === "dark"
            ? "bg-primary text-primary-foreground shadow-lg scale-105"
            : "text-muted-foreground hover:text-foreground hover:bg-accent",
          isAnimating && "animate-pulse"
        )}
        title="Mode sombre"
        disabled={isAnimating}
      >
        <Moon className={cn(
          "h-4 w-4 transition-all duration-300",
          isAnimating && "animate-spin"
        )} />
      </button>
      <button
        onClick={() => handleThemeChange("system")}
        className={cn(
          "p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110",
          theme === "system"
            ? "bg-primary text-primary-foreground shadow-lg scale-105"
            : "text-muted-foreground hover:text-foreground hover:bg-accent",
          isAnimating && "animate-pulse"
        )}
        title="Mode système"
        disabled={isAnimating}
      >
        <Monitor className={cn(
          "h-4 w-4 transition-all duration-300",
          isAnimating && "animate-spin"
        )} />
      </button>
    </div>
  )
}
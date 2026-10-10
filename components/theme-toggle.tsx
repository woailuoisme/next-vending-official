"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
	const { setTheme } = useTheme();
	const [isDark, setIsDark] = useState<boolean>(false);
	const [mounted, setMounted] = useState<boolean>(false);

	// On mount, check initial theme & observe DOM class mutations
	useEffect(() => {
		setMounted(true);

		const checkDark = () => {
			setIsDark(document.documentElement.classList.contains("dark"));
		};
		checkDark();

		const observer = new MutationObserver(checkDark);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		// Check current DOM state directly
		const currentlyDark = document.documentElement.classList.contains("dark");
		const nextDark = !currentlyDark;
		const nextTheme = nextDark ? "dark" : "light";

		// 1. Instantly synchronously mutate DOM class for zero latency
		if (nextDark) {
			document.documentElement.classList.add("dark");
			document.documentElement.style.colorScheme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.style.colorScheme = "light";
		}

		// 2. Persist in localStorage
		try {
			localStorage.setItem("theme", nextTheme);
		} catch {}

		// 3. Notify next-themes provider
		try {
			setTheme(nextTheme);
		} catch {}

		// 4. Update local state
		setIsDark(nextDark);
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className={cn(
				"relative size-9 rounded-full border border-border/80 bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90 hover:scale-105 shrink-0 select-none",
				className,
			)}
			title={
				isDark
					? "切换为浅色模式 / Switch to Light Mode"
					: "切换为深色模式 / Switch to Dark Mode"
			}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			{mounted ? (
				isDark ? (
					<Moon className="size-4 text-sky-400 transition-transform duration-200 rotate-0 scale-100" />
				) : (
					<Sun className="size-4 text-amber-500 transition-transform duration-200 rotate-0 scale-100" />
				)
			) : (
				// SSR static fallback
				<>
					<Sun className="size-4 text-amber-500 dark:hidden" />
					<Moon className="size-4 text-sky-400 hidden dark:block" />
				</>
			)}
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}

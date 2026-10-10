"use client";

import { ChefHat, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n";

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [sheetOpen, setSheetOpen] = useState(false);
	const { t } = useI18n();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/90 backdrop-blur-md py-3 border-b border-border/70 shadow-xs"
					: "bg-background/40 backdrop-blur-xs py-4 sm:py-5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-3">
				{/* Zone 1: Brand Wordmark */}
				<Link
					href="/"
					className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
				>
					<div className="size-9 sm:size-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-primary/25 transition-transform group-hover:scale-105 shrink-0">
						<ChefHat className="size-5 text-white" />
					</div>
					<div className="flex flex-col">
						<span className="text-base sm:text-xl font-bold tracking-tight text-foreground flex items-center gap-1.5 whitespace-nowrap">
							智膳科技
							<span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-md bg-brand-primary/10 text-brand-primary">
								PRO
							</span>
						</span>
						<span className="text-[9px] sm:text-[10px] font-bold text-muted-foreground tracking-wider uppercase">
							{t.nav.brandSub}
						</span>
					</div>
				</Link>

				{/* Zone 2: Primary Nav Links (Desktop) */}
				<nav className="hidden lg:flex items-center gap-7 font-medium text-sm text-muted-foreground shrink-0">
					<Link
						href="/#solution"
						className="hover:text-brand-primary transition-colors whitespace-nowrap"
					>
						{t.nav.solutions}
					</Link>
					<Link
						href="/#hardware"
						className="hover:text-brand-primary transition-colors whitespace-nowrap"
					>
						{t.nav.hardware}
					</Link>
					<Link
						href="/#software"
						className="hover:text-brand-primary transition-colors whitespace-nowrap"
					>
						{t.nav.software}
					</Link>
					<Link
						href="/faq"
						className="hover:text-brand-primary transition-colors whitespace-nowrap flex items-center gap-1.5 font-semibold text-foreground/90"
					>
						<span>{t.nav.faq}</span>
						<span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
					</Link>
					<Link
						href="/#about"
						className="hover:text-brand-primary transition-colors whitespace-nowrap"
					>
						{t.nav.about}
					</Link>
				</nav>

				{/* Zone 3: Controls (Theme + Language + CTA + Mobile Hamburger) */}
				<div className="flex items-center gap-2 sm:gap-3 shrink-0">
					{/* Language Selector */}
					<LanguageToggle />

					{/* 1-Click Dark/Light Mode Switcher */}
					<ThemeToggle />

					{/* Primary Action Button (Tablets & Desktops) */}
					<div className="hidden md:inline-flex">
						<Link href="/#cta">
							<Button className="bg-brand-primary text-white font-semibold rounded-full px-4 sm:px-5 h-9 hover:bg-brand-primary/90 shadow-xs transition-all hover:shadow-brand-primary/20 text-xs sm:text-sm">
								<Sparkles className="size-3.5 mr-1.5" />
								{t.nav.bookDemo}
							</Button>
						</Link>
					</div>

					{/* Mobile Menu Hamburger (Mobile & Tablet) */}
					<div className="lg:hidden">
						<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
							<SheetTrigger
								render={
									<Button
										variant="outline"
										size="icon"
										className="size-9 rounded-xl border-border/80"
										aria-label="Toggle navigation menu"
									/>
								}
							>
								<Menu className="size-4 text-foreground" />
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] sm:w-[360px] p-6 flex flex-col justify-between bg-card text-card-foreground border-border"
							>
								<div>
									<SheetHeader className="text-left mb-6 pb-4 border-b border-border/70">
										<SheetTitle className="flex items-center gap-2 text-lg font-bold text-foreground">
											<div className="size-8 bg-brand-primary rounded-lg flex items-center justify-center text-white shrink-0">
												<ChefHat className="size-4 text-white" />
											</div>
											智膳科技 SMARTMEAL
										</SheetTitle>
									</SheetHeader>

									<nav className="flex flex-col gap-4 text-base font-semibold">
										<Link
											href="/#solution"
											onClick={() => setSheetOpen(false)}
											className="hover:text-brand-primary transition-colors py-1.5 border-b border-border/40"
										>
											{t.nav.solutions}
										</Link>
										<Link
											href="/#hardware"
											onClick={() => setSheetOpen(false)}
											className="hover:text-brand-primary transition-colors py-1.5 border-b border-border/40"
										>
											{t.nav.hardware}
										</Link>
										<Link
											href="/#software"
											onClick={() => setSheetOpen(false)}
											className="hover:text-brand-primary transition-colors py-1.5 border-b border-border/40"
										>
											{t.nav.software}
										</Link>
										<Link
											href="/faq"
											onClick={() => setSheetOpen(false)}
											className="hover:text-brand-primary transition-colors py-1.5 text-brand-primary font-bold flex items-center justify-between border-b border-border/40"
										>
											<span>{t.nav.faq}</span>
											<span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary">
												FAQ 知识库
											</span>
										</Link>
										<Link
											href="/#about"
											onClick={() => setSheetOpen(false)}
											className="hover:text-brand-primary transition-colors py-1.5"
										>
											{t.nav.about}
										</Link>
									</nav>
								</div>

								<div className="pt-6 border-t border-border flex flex-col gap-4">
									<div className="flex items-center justify-between text-xs text-muted-foreground">
										<span>深浅模式与语言</span>
										<div className="flex items-center gap-2">
											<ThemeToggle />
											<LanguageToggle />
										</div>
									</div>
									<Link href="/#cta" onClick={() => setSheetOpen(false)}>
										<Button className="w-full bg-brand-primary text-white font-semibold rounded-xl h-11 text-sm shadow-md shadow-brand-primary/20">
											<Sparkles className="size-3.5 mr-1.5" />
											{t.nav.bookDemo}
										</Button>
									</Link>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
};

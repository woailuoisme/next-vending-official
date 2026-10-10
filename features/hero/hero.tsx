"use client";

import {
	ArrowRight,
	Flame,
	Play,
	RotateCcw,
	Sparkles,
	ThermometerSnowflake,
	Timer,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Hero = () => {
	const { t, locale } = useI18n();
	const [heatingActive, setHeatingActive] = useState(false);
	const [countdown, setCountdown] = useState(60);
	const [selectedMeal, setSelectedMeal] = useState(0);

	const sampleMeals = [
		{
			name:
				locale === "zh"
					? "黑椒谷饲牛柳拼西蓝花"
					: "Black Pepper Beef & Broccoli",
			cal: "580 kcal",
			temp: "72℃",
		},
		{
			name:
				locale === "zh" ? "秘制三杯鸡便当" : "Signature Braised Chicken Rice",
			cal: "620 kcal",
			temp: "75℃",
		},
		{
			name:
				locale === "zh" ? "香煎金枪鱼藜麦轻食" : "Pan-Seared Tuna Quinoa Bowl",
			cal: "460 kcal",
			temp: "68℃",
		},
	];

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (heatingActive && countdown > 0) {
			timer = setInterval(() => {
				setCountdown((c) => c - 1);
			}, 100); // 10x accelerated simulation for instant demo delight
		} else if (countdown === 0) {
			setHeatingActive(false);
		}
		return () => clearInterval(timer);
	}, [heatingActive, countdown]);

	const handleStartSim = () => {
		setCountdown(60);
		setHeatingActive(true);
	};

	const handleResetSim = () => {
		setHeatingActive(false);
		setCountdown(60);
	};

	return (
		<section className="relative min-h-[85vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-background">
			{/* Background Subtle Tech Grid */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
			<div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
				{/* Left Column: Value Proposition & CTAs */}
				<div className="lg:col-span-7 flex flex-col items-start">
					{/* Metadata Kicker */}
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wide uppercase mb-4 sm:mb-6">
						<Sparkles className="w-3.5 h-3.5" />
						<span>{t.hero.kicker}</span>
					</div>

					{/* Main Headline */}
					<h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-5 sm:mb-6 text-balance">
						{t.hero.title1}{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-orange-500 to-amber-500">
							{t.hero.titleHighlight}
						</span>{" "}
						{t.hero.title2}
					</h1>

					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-6 sm:mb-8">
						{t.hero.desc}
					</p>

					{/* CTAs */}
					<div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
						<Link href="/#cta">
							<Button
								size="lg"
								className="bg-brand-primary text-white hover:bg-brand-primary/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold shadow-lg shadow-brand-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
							>
								<span>{t.hero.ctaPrimary}</span>
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
						</Link>

						<Link href="/#solution">
							<Button
								size="lg"
								variant="outline"
								className="rounded-full px-6 sm:px-7 py-5 sm:py-6 text-sm sm:text-base font-semibold border-border hover:bg-muted transition-all"
							>
								{t.hero.ctaSecondary}
							</Button>
						</Link>
					</div>

					{/* Highlights */}
					<div className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 sm:pt-6 border-t border-border/60 w-full max-w-lg">
						<div>
							<div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-primary font-mono tabular-nums">
								{t.hero.statSpeed}
							</div>
							<div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
								{t.hero.statSpeedLabel}
							</div>
						</div>
						<div>
							<div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-mono tabular-nums">
								{t.hero.statTemp}
							</div>
							<div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
								{t.hero.statTempLabel}
							</div>
						</div>
						<div>
							<div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-mono tabular-nums">
								100%
							</div>
							<div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
								{locale === "zh" ? "全闭环安全溯源" : "Food Traceability"}
							</div>
						</div>
					</div>
				</div>

				{/* Right Column: Interactive Smart Machine Terminal Simulation */}
				<div className="lg:col-span-5 relative w-full">
					{/* Terminal Box Shell */}
					<div className="relative rounded-3xl bg-card border border-border shadow-2xl p-6 overflow-hidden">
						{/* Terminal Header */}
						<div className="flex items-center justify-between pb-4 mb-4 border-b border-border/70">
							<div className="flex items-center gap-2.5">
								<div className="w-3 h-3 rounded-full bg-brand-primary animate-pulse" />
								<span className="font-bold text-sm tracking-wider uppercase text-foreground">
									SMARTMEAL PRO-V4
								</span>
							</div>
							<div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md">
								<ThermometerSnowflake className="w-3.5 h-3.5 text-blue-500" />
								<span>4.2°C 恒温</span>
							</div>
						</div>

						{/* Interactive Microwave Reheating Chamber Simulation */}
						<div className="relative rounded-2xl bg-muted/40 border border-border/80 p-5 mb-5 overflow-hidden">
							<div className="flex items-center justify-between mb-3">
								<div className="flex items-center gap-2 text-xs font-bold text-foreground">
									<Flame className="w-4 h-4 text-brand-primary" />
									<span>{t.hero.heatingTitle}</span>
								</div>
								<span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-sm bg-brand-primary/10 text-brand-primary">
									{heatingActive ? "HEATING IN PROGRESS" : "READY"}
								</span>
							</div>

							{/* Chamber Visualizer */}
							<div className="relative h-44 rounded-xl bg-neutral-950 flex flex-col items-center justify-center overflow-hidden p-4 border border-neutral-800">
								{/* Microwave Glow Animation */}
								<AnimatePresence>
									{heatingActive && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: [0.4, 0.85, 0.5] }}
											exit={{ opacity: 0 }}
											transition={{ duration: 1.2, repeat: Infinity }}
											className="absolute inset-0 bg-radial from-amber-500/35 via-brand-primary/20 to-transparent"
										/>
									)}
								</AnimatePresence>

								{/* Selected Bento Dish Preview */}
								<div className="relative z-10 flex flex-col items-center text-center">
									<div className="w-20 h-14 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl shadow-inner mb-2">
										🍱
									</div>
									<div className="text-white text-xs font-bold tracking-tight">
										{sampleMeals[selectedMeal].name}
									</div>
									<div className="text-neutral-400 text-[10px] font-mono mt-0.5">
										{sampleMeals[selectedMeal].cal} · 目标出餐温度{" "}
										{sampleMeals[selectedMeal].temp}
									</div>
								</div>

								{/* Countdown / Status Bar */}
								<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
									<div className="flex items-center gap-1.5 text-neutral-300">
										<Timer className="w-3.5 h-3.5 text-brand-primary" />
										<span>{countdown}s</span>
									</div>
									<div className="text-brand-primary font-bold text-[11px]">
										{heatingActive ? "360° 微波矩阵发射中..." : "餐盒锁鲜就绪"}
									</div>
								</div>
							</div>

							{/* Interactive Simulation Trigger */}
							<div className="mt-3 flex items-center justify-between gap-3">
								{!heatingActive ? (
									<Button
										onClick={handleStartSim}
										className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl py-2.5 text-xs font-bold shadow-xs flex items-center justify-center gap-2"
									>
										<Play className="w-3.5 h-3.5 fill-current" />
										<span>
											{locale === "zh"
												? "模拟开启60秒智能出餐"
												: "Simulate 60s Reheating"}
										</span>
									</Button>
								) : (
									<Button
										onClick={handleResetSim}
										variant="outline"
										className="w-full rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
									>
										<RotateCcw className="w-3.5 h-3.5" />
										<span>{locale === "zh" ? "重置演示" : "Reset Demo"}</span>
									</Button>
								)}
							</div>
						</div>

						{/* Dish Quick Selector */}
						<div className="space-y-2">
							<div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
								{locale === "zh" ? "模拟选餐试吃菜单" : "Sample Menu Select"}
							</div>
							<div className="grid grid-cols-3 gap-2">
								{sampleMeals.map((meal, idx) => (
									<button
										key={idx}
										type="button"
										onClick={() => {
											setSelectedMeal(idx);
											handleResetSim();
										}}
										className={`p-2 rounded-xl text-left border transition-all text-xs ${
											selectedMeal === idx
												? "border-brand-primary bg-brand-primary/10 text-foreground font-semibold"
												: "border-border/60 bg-muted/30 text-muted-foreground hover:bg-muted/70"
										}`}
									>
										<div className="truncate font-bold">{meal.name}</div>
										<div className="text-[10px] text-muted-foreground mt-0.5">
											{meal.cal}
										</div>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

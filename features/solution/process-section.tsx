"use client";

import {
	ArrowRight,
	ChefHat,
	Flame,
	Smartphone,
	ThermometerSnowflake,
} from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export const ProcessSection = () => {
	const { t } = useI18n();

	const steps = [
		{
			num: "01",
			icon: <ChefHat className="w-6 h-6" />,
			title: t.solution.step1Title,
			desc: t.solution.step1Desc,
			tag: "标准化集约出产",
		},
		{
			num: "02",
			icon: <ThermometerSnowflake className="w-6 h-6" />,
			title: t.solution.step2Title,
			desc: t.solution.step2Desc,
			tag: "4℃ 全程GPS温控",
		},
		{
			num: "03",
			icon: <Smartphone className="w-6 h-6" />,
			title: t.solution.step3Title,
			desc: t.solution.step3Desc,
			tag: "移动端免排队点取",
		},
		{
			num: "04",
			icon: <Flame className="w-6 h-6" />,
			title: t.solution.step4Title,
			desc: t.solution.step4Desc,
			tag: "60s 微波矩阵复热",
		},
	];

	return (
		<section
			id="solution"
			className="py-24 bg-muted/30 border-y border-border/60"
		>
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="max-w-3xl mx-auto text-center mb-16">
					<div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
						{t.solution.tag}
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
						{t.solution.title}
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
						{t.solution.desc}
					</p>
				</div>

				{/* 4-Step Interactive Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{steps.map((step, idx) => (
						<motion.div
							key={idx}
							whileHover={{ y: -4 }}
							transition={{ duration: 0.2 }}
							className="h-full"
						>
							<Card className="h-full border border-border/80 bg-card hover:border-brand-primary/40 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
								<CardContent className="p-6">
									{/* Top Bar with Number & Icon */}
									<div className="flex items-center justify-between mb-6">
										<div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
											{step.icon}
										</div>
										<span className="text-3xl font-black font-mono text-muted-foreground/30">
											{step.num}
										</span>
									</div>

									<h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
										{step.title}
									</h3>

									<p className="text-sm text-muted-foreground leading-relaxed">
										{step.desc}
									</p>
								</CardContent>

								<div className="px-6 pb-6 pt-0">
									<div className="text-[11px] font-semibold text-brand-primary/80 flex items-center gap-1">
										<span>{step.tag}</span>
										<ArrowRight className="w-3 h-3" />
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

"use client";

import { BarChart3, Check, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export const SoftwareSection = () => {
	const { t } = useI18n();

	const softwareCards = [
		{
			icon: <Smartphone className="w-8 h-8 text-brand-primary" />,
			title: t.software.card1Title,
			desc: t.software.card1Desc,
		},
		{
			icon: <BarChart3 className="w-8 h-8 text-brand-primary" />,
			title: t.software.card2Title,
			desc: t.software.card2Desc,
		},
		{
			icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
			title: t.software.card3Title,
			desc: t.software.card3Desc,
		},
		{
			icon: <Zap className="w-8 h-8 text-brand-primary" />,
			title: t.software.card4Title,
			desc: t.software.card4Desc,
		},
	];

	const highlights = [
		t.software.point1,
		t.software.point2,
		t.software.point3,
		t.software.point4,
	];

	return (
		<section
			id="software"
			className="py-24 bg-background border-b border-border/60"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-12 gap-16 items-center">
					{/* Left Grid: 4 Software Modules */}
					<div className="lg:col-span-7 order-2 lg:order-1">
						<div className="grid sm:grid-cols-2 gap-5">
							{softwareCards.map((card, idx) => (
								<motion.div
									key={idx}
									whileHover={{ y: -4 }}
									transition={{ duration: 0.2 }}
								>
									<Card className="h-full border border-border/80 bg-card hover:border-brand-primary/40 transition-all shadow-xs p-6">
										<CardContent className="p-0">
											<div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
												{card.icon}
											</div>
											<h4 className="font-bold text-lg text-foreground mb-2">
												{card.title}
											</h4>
											<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
												{card.desc}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>

					{/* Right Text Description */}
					<div className="lg:col-span-5 order-1 lg:order-2">
						<div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
							{t.software.badge}
						</div>
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground text-balance">
							{t.software.title1}
							<br />
							<span className="text-brand-primary">{t.software.title2}</span>
						</h2>
						<p className="text-base text-muted-foreground mb-8 leading-relaxed">
							{t.software.desc}
						</p>

						<ul className="space-y-3.5">
							{highlights.map((item, i) => (
								<li
									key={i}
									className="flex items-center gap-3 text-sm font-semibold text-foreground"
								>
									<div className="w-5 h-5 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center shrink-0">
										<Check className="w-3 h-3 stroke-[3]" />
									</div>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

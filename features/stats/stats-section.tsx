"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";

export const StatsSection = () => {
	const { t } = useI18n();

	const stats = [
		{
			label: t.stats.citiesLabel,
			value: t.stats.cities,
			trend: "+12 城市/季度",
		},
		{
			label: t.stats.terminalsLabel,
			value: t.stats.terminals,
			trend: "99.98% 在线率",
		},
		{
			label: t.stats.mealsLabel,
			value: t.stats.meals,
			trend: "0 食安事故记录",
		},
		{
			label: t.stats.satisfactionLabel,
			value: t.stats.satisfaction,
			trend: "复购率达 68%",
		},
	];

	return (
		<section className="py-20 bg-muted/30 border-b border-border/60">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, i) => (
						<div
							key={i}
							className="text-center p-6 rounded-2xl bg-card border border-border/60 shadow-xs hover:border-brand-primary/30 transition-all"
						>
							<div className="text-4xl md:text-5xl font-black mb-2 text-foreground font-mono tabular-nums tracking-tight">
								{stat.value}
							</div>
							<div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
								{stat.label}
							</div>
							<div className="text-[11px] font-semibold text-brand-primary">
								{stat.trend}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

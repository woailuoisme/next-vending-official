"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

export const PartnersSection = () => {
	const { locale } = useI18n();
	const tickerRef = useRef<HTMLDivElement>(null);

	const partners = [
		{ name: "HUAWEI 智能园区", en: "HUAWEI CAMPUS" },
		{ name: "TENCENT 滨海大厦", en: "TENCENT HQ" },
		{ name: "SF-EXPRESS 顺丰冷运", en: "SF COLD-CHAIN" },
		{ name: "COFCO 中粮集团供应", en: "COFCO FOODS" },
		{ name: "BYD 比亚迪制造基地", en: "BYD INDUSTRIAL" },
		{ name: "JD LOGISTICS 京东物流", en: "JD LOGISTICS" },
		{ name: "HUAZHU 华住酒店生态", en: "HUAZHU GROUP" },
	];

	useEffect(() => {
		const el = tickerRef.current;
		if (!el) return;

		const ctx = gsap.context(() => {
			gsap.to(".partner-track", {
				xPercent: -50,
				ease: "none",
				duration: 25,
				repeat: -1,
			});
		}, el);

		return () => ctx.revert();
	}, []);

	return (
		<section
			className="py-10 bg-background border-y border-border/60 overflow-hidden relative"
			ref={tickerRef}
		>
			<div className="max-w-7xl mx-auto px-6 mb-4 text-center">
				<span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
					{locale === "zh"
						? "已为 500+ 标杆企业总部、医院园区及交通枢纽提供无人热餐服务"
						: "Trusted by 500+ Enterprise Headquarters, Hospitals, and Tech Parks"}
				</span>
			</div>

			{/* Left/Right Edge Fades */}
			<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
			<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

			<div className="relative w-full overflow-hidden flex">
				<div className="partner-track flex items-center gap-12 whitespace-nowrap py-3">
					{[...partners, ...partners].map((p, idx) => (
						<div
							key={idx}
							className="flex items-center gap-2.5 text-foreground/75 hover:text-foreground font-mono font-bold text-sm tracking-tight transition-colors cursor-default"
						>
							<div className="w-2 h-2 rounded-full bg-brand-primary" />
							<span>{locale === "zh" ? p.name : p.en}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

"use client";

import React from "react";
import { CTASection } from "@/features/cta/cta-section";
import { Footer } from "@/features/footer/footer";
import { HardwareSection } from "@/features/hardware/hardware-section";
import { Hero } from "@/features/hero/hero";
import { Navbar } from "@/features/navbar/navbar";
import { PartnersSection } from "@/features/partners/partners-section";
import { SoftwareSection } from "@/features/software/software-section";
import { ProcessSection } from "@/features/solution/process-section";
import { StatsSection } from "@/features/stats/stats-section";

export default function Page() {
	return (
		<div className="min-h-screen selection:bg-brand-primary selection:text-white">
			<Navbar />
			<Hero />
			<PartnersSection />
			<ProcessSection />
			<HardwareSection />
			<SoftwareSection />
			<StatsSection />
			<CTASection />
			<Footer />
		</div>
	);
}

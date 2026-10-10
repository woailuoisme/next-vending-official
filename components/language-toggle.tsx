"use client";

import { Languages } from "lucide-react";
import * as React from "react";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
	const { locale, setLocale } = useI18n();

	return (
		<div className="inline-flex items-center gap-1 p-1 rounded-full border border-border/60 bg-muted/50 backdrop-blur-xs text-xs font-semibold">
			<button
				type="button"
				onClick={() => setLocale("zh")}
				className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
					locale === "zh"
						? "bg-brand-primary text-white shadow-xs"
						: "text-muted-foreground hover:text-foreground"
				}`}
			>
				<span>中</span>
			</button>
			<button
				type="button"
				onClick={() => setLocale("en")}
				className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
					locale === "en"
						? "bg-brand-primary text-white shadow-xs"
						: "text-muted-foreground hover:text-foreground"
				}`}
			>
				<span>EN</span>
			</button>
		</div>
	);
}

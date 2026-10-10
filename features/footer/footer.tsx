"use client";

import { ChefHat, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useI18n } from "@/lib/i18n";

export const Footer = () => {
	const { t } = useI18n();

	return (
		<footer className="bg-muted/40 border-t border-border/60 text-foreground pt-14 sm:pt-16 pb-10 sm:pb-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="grid md:grid-cols-12 gap-12 mb-16">
					{/* Brand Info */}
					<div className="md:col-span-5">
						<Link href="/" className="flex items-center gap-2.5 mb-6">
							<div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
								<ChefHat className="w-5 h-5 text-white" />
							</div>
							<span className="text-2xl font-bold tracking-tight text-foreground">
								智膳科技{" "}
								<span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary">
									SMARTMEAL
								</span>
							</span>
						</Link>

						<p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
							{t.footer.desc}
						</p>

						<div className="flex items-center gap-3">
							<LanguageToggle />
							<ThemeToggle />
						</div>
					</div>

					{/* Product Navigation */}
					<div className="md:col-span-3">
						<h4 className="font-bold text-xs uppercase tracking-wider text-brand-primary mb-5">
							{t.footer.products}
						</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li>
								<Link
									href="/#hardware"
									className="hover:text-foreground transition-colors"
								>
									{t.footer.proVending}
								</Link>
							</li>
							<li>
								<Link
									href="/#hardware"
									className="hover:text-foreground transition-colors"
								>
									{t.footer.miniVending}
								</Link>
							</li>
							<li>
								<Link
									href="/#solution"
									className="hover:text-foreground transition-colors"
								>
									{t.footer.kitchenSaaS}
								</Link>
							</li>
							<li>
								<Link
									href="/#software"
									className="hover:text-foreground transition-colors"
								>
									{t.footer.logisticsPlatform}
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="hover:text-brand-primary transition-colors font-semibold text-brand-primary"
								>
									{t.nav.faq} (FAQ) →
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Details */}
					<div className="md:col-span-4">
						<h4 className="font-bold text-xs uppercase tracking-wider text-brand-primary mb-5">
							{t.footer.contact}
						</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li className="flex items-start gap-2.5">
								<MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
								<span>{t.footer.address}</span>
							</li>
							<li className="flex items-center gap-2.5">
								<Phone className="w-4 h-4 text-brand-primary shrink-0" />
								<span className="font-mono">{t.footer.hours}</span>
							</li>
							<li className="flex items-center gap-2.5">
								<Mail className="w-4 h-4 text-brand-primary shrink-0" />
								<span className="font-mono">bd@smartmeal.tech</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-border/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
					<div>{t.footer.rights}</div>
					<div className="flex items-center gap-6">
						<Link
							href="/faq"
							className="hover:text-foreground transition-colors"
						>
							{t.nav.faq}
						</Link>
						<span className="hover:text-foreground transition-colors cursor-pointer">
							{t.footer.privacy}
						</span>
						<span className="hover:text-foreground transition-colors cursor-pointer">
							{t.footer.terms}
						</span>
						<span>{t.footer.icp}</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

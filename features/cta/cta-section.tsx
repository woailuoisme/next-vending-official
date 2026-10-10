"use client";

import {
	Building2,
	CheckCircle2,
	MapPin,
	PhoneCall,
	Sparkles,
	User,
} from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { useState } from "react";
import { GsapMagnetic } from "@/components/gsap-magnetic";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";

export const CTASection = () => {
	const { t, locale } = useI18n();
	const [open, setOpen] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		scene: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.name || !formData.phone) return;
		setSubmitted(true);
		setTimeout(() => {
			setOpen(false);
			setSubmitted(false);
			setFormData({ name: "", phone: "", scene: "" });
		}, 2500);
	};

	return (
		<section
			id="cta"
			className="py-24 bg-card text-card-foreground border-b border-border/60 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-radial from-brand-primary/10 via-transparent to-transparent pointer-events-none" />

			<div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
					<Sparkles className="w-3.5 h-3.5" />
					<span>
						{locale === "zh"
							? "加盟合作 · 点位入驻 · 硬件定制"
							: "PARTNERSHIP & DEPLOYMENT"}
					</span>
				</div>

				<h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight text-balance">
					{t.cta.title}
				</h2>

				<p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
					{t.cta.desc}
				</p>

				{/* Modal Trigger */}
				<Dialog open={open} onOpenChange={setOpen}>
					<GsapMagnetic strength={0.35}>
						<DialogTrigger
							render={
								<Button
									size="lg"
									className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-bold shadow-xl shadow-brand-primary/25 hover:scale-105 transition-all active:scale-95"
								/>
							}
						>
							<PhoneCall className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
							<span>{t.cta.button}</span>
						</DialogTrigger>
					</GsapMagnetic>

					<DialogContent className="sm:max-w-md p-6 rounded-3xl bg-card border border-border">
						<DialogHeader className="text-left mb-4">
							<DialogTitle className="text-xl font-bold text-foreground">
								{t.cta.modalTitle}
							</DialogTitle>
							<DialogDescription className="text-xs text-muted-foreground mt-1">
								{t.cta.modalDesc}
							</DialogDescription>
						</DialogHeader>

						{submitted ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								className="py-10 text-center flex flex-col items-center justify-center"
							>
								<div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
									<CheckCircle2 className="w-8 h-8" />
								</div>
								<h3 className="text-lg font-bold text-foreground mb-1">
									{locale === "zh" ? "预约已收到！" : "Request Received!"}
								</h3>
								<p className="text-xs text-muted-foreground max-w-xs">
									{t.cta.submitted}
								</p>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="space-y-1.5 text-left">
									<label className="text-xs font-bold text-foreground flex items-center gap-1.5">
										<User className="w-3.5 h-3.5 text-brand-primary" />
										<span>{t.cta.name}</span>
									</label>
									<Input
										required
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										placeholder={
											locale === "zh" ? "如：王经理 / 李总" : "e.g. John Doe"
										}
										className="rounded-xl h-11"
									/>
								</div>

								<div className="space-y-1.5 text-left">
									<label className="text-xs font-bold text-foreground flex items-center gap-1.5">
										<PhoneCall className="w-3.5 h-3.5 text-brand-primary" />
										<span>{t.cta.phone}</span>
									</label>
									<Input
										required
										type="tel"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
										placeholder={
											locale === "zh" ? "138-xxxx-xxxx" : "+1 555-0192"
										}
										className="rounded-xl h-11"
									/>
								</div>

								<div className="space-y-1.5 text-left">
									<label className="text-xs font-bold text-foreground flex items-center gap-1.5">
										<Building2 className="w-3.5 h-3.5 text-brand-primary" />
										<span>{t.cta.city}</span>
									</label>
									<Input
										value={formData.scene}
										onChange={(e) =>
											setFormData({ ...formData, scene: e.target.value })
										}
										placeholder={
											locale === "zh"
												? "如：北京市朝阳区甲级写字楼 / 三甲医院大堂"
												: "e.g. Tech Park Office Lobby, Seattle"
										}
										className="rounded-xl h-11"
									/>
								</div>

								<Button
									type="submit"
									className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl h-12 font-bold text-sm shadow-md transition-all mt-2"
								>
									{t.cta.submit}
								</Button>

								<p className="text-[11px] text-muted-foreground text-center">
									{locale === "zh"
										? "我们将严格遵守信息保密协议，不向任何第三方透露您的联系方式。"
										: "Your contact details are strictly confidential under our privacy terms."}
								</p>
							</form>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
};

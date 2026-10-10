"use client";

import gsap from "gsap";
import {
	Activity,
	CheckCircle2,
	Cpu,
	Layers,
	Pause,
	Play,
	RotateCcw,
	ShieldCheck,
	Sparkles,
	Timer,
	Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { GsapMagnetic } from "@/components/gsap-magnetic";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const HardwareSection = () => {
	const { t, locale } = useI18n();
	const [activeModule, setActiveModule] = useState<number>(0);
	const [currentPhase, setCurrentPhase] = useState<number>(0);
	const [isPlayingTimeline, setIsPlayingTimeline] = useState<boolean>(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);
	const countRef = useRef<HTMLSpanElement>(null);

	const modules = [
		{
			id: "mod-1",
			title: t.hardware.feature1Title,
			detail: t.hardware.feature1Desc,
			icon: <Layers className="size-5" />,
			metricNum: 120,
			metricUnit: "盒",
			metricLabel: "高密度旋转货位",
			spec: "环形立体双伺服 · 容积利用率 +40%",
		},
		{
			id: "mod-2",
			title: t.hardware.feature2Title,
			detail: t.hardware.feature2Desc,
			icon: <Activity className="size-5" />,
			metricNum: 0.5,
			metricUnit: "℃",
			metricLabel: "变频循环温差控制",
			spec: "R290环保冷媒 · 4小时断电蓄冷保护",
		},
		{
			id: "mod-3",
			title: t.hardware.feature3Title,
			detail: t.hardware.feature3Desc,
			icon: <Zap className="size-5" />,
			metricNum: 2000,
			metricUnit: "W",
			metricLabel: "多磁控管变频微波",
			spec: "360°热场补偿 · 米饭保水率 >92%",
		},
		{
			id: "mod-4",
			title: t.hardware.feature4Title,
			detail: t.hardware.feature4Desc,
			icon: <ShieldCheck className="size-5" />,
			metricNum: 99.9,
			metricUnit: "%",
			metricLabel: "医用级UV-C消杀效率",
			spec: "负压异味过滤 · 微正压防尘出餐舱",
		},
	];

	const sequencePhases = [
		{
			time: "00-08s",
			titleZh: "伺服机械臂取餐",
			titleEn: "Robotic Gripper Alignment",
			descZh: "三轴伺服平稳托举餐盒，防晃防倾倒",
			descEn: "Tri-axial servo lifting with anti-tipping chassis",
			color: "text-blue-500",
		},
		{
			time: "08-15s",
			titleZh: "RFID与红外测温校验",
			titleEn: "Thermal & RFID Verification",
			descZh: "扫描唯一条码，调取大厨专属复热曲线",
			descEn: "Scan unique digital QR and culinary heating curve",
			color: "text-emerald-500",
		},
		{
			time: "15-55s",
			titleZh: "多频矩阵微波穿透复热",
			titleEn: "Multi-Magnetron 360° Reheat",
			descZh: "2000W多频联动，锁水防干柴，均匀升温至70℃+",
			descEn: "High-density multi-frequency RF core heat penetration",
			color: "text-amber-500",
		},
		{
			time: "55-60s",
			titleZh: "微正压防夹手安全出餐",
			titleEn: "Positive-Pressure Dispense",
			descZh: "负压排雾，微正压防尘，红外感应防夹手落餐",
			descEn: "Vapor extraction and anti-pinch safety door release",
			color: "text-brand-primary",
		},
	];

	// GSAP Trigger for Module switching
	useEffect(() => {
		const ctx = gsap.context(() => {
			// Scanner sweep animation
			gsap.fromTo(
				".gsap-laser-scanner",
				{ y: 0, opacity: 0.8 },
				{
					y: 280,
					opacity: 0,
					duration: 0.9,
					ease: "power2.inOut",
				},
			);

			// Active card pulse
			gsap.fromTo(
				`.module-card-${activeModule}`,
				{ scale: 0.98, borderColor: "rgba(255, 95, 31, 0.2)" },
				{
					scale: 1,
					borderColor: "rgba(255, 95, 31, 0.9)",
					duration: 0.4,
					ease: "back.out(1.5)",
				},
			);

			// Metric count-up simulation
			const targetVal = modules[activeModule].metricNum;
			const obj = { val: 0 };
			gsap.to(obj, {
				val: targetVal,
				duration: 0.8,
				ease: "power2.out",
				onUpdate: () => {
					if (countRef.current) {
						countRef.current.innerText =
							targetVal >= 10
								? Math.round(obj.val).toString()
								: obj.val.toFixed(1);
					}
				},
			});
		}, containerRef);

		return () => ctx.revert();
	}, [activeModule]);

	// GSAP Interactive Sequence Timeline Player
	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				paused: true,
				onUpdate: () => {
					if (progressBarRef.current) {
						progressBarRef.current.style.width = `${tl.progress() * 100}%`;
					}
				},
				onComplete: () => {
					setIsPlayingTimeline(false);
				},
			});

			// Phase 1: 0 - 25%
			tl.to({}, { duration: 1.2, onStart: () => setCurrentPhase(0) });
			// Phase 2: 25 - 50%
			tl.to({}, { duration: 1.2, onStart: () => setCurrentPhase(1) });
			// Phase 3: 50 - 85%
			tl.to({}, { duration: 2.2, onStart: () => setCurrentPhase(2) });
			// Phase 4: 85 - 100%
			tl.to({}, { duration: 1.2, onStart: () => setCurrentPhase(3) });

			timelineRef.current = tl;
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const handlePlaySequence = () => {
		if (!timelineRef.current) return;
		if (timelineRef.current.progress() >= 1) {
			timelineRef.current.restart();
		} else {
			timelineRef.current.play();
		}
		setIsPlayingTimeline(true);
	};

	const handlePauseSequence = () => {
		if (!timelineRef.current) return;
		timelineRef.current.pause();
		setIsPlayingTimeline(false);
	};

	const handleResetSequence = () => {
		if (!timelineRef.current) return;
		timelineRef.current.pause();
		timelineRef.current.progress(0);
		if (progressBarRef.current) {
			progressBarRef.current.style.width = "0%";
		}
		setCurrentPhase(0);
		setIsPlayingTimeline(false);
	};

	const handleScrubPhase = (idx: number) => {
		setCurrentPhase(idx);
		if (!timelineRef.current) return;
		const progressMap = [0.1, 0.35, 0.65, 0.95];
		timelineRef.current.pause();
		timelineRef.current.progress(progressMap[idx]);
		if (progressBarRef.current) {
			progressBarRef.current.style.width = `${progressMap[idx] * 100}%`;
		}
		setIsPlayingTimeline(false);
	};

	return (
		<section
			id="hardware"
			ref={containerRef}
			className="py-24 bg-card text-card-foreground overflow-hidden border-b border-border/60 relative"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* Section Header */}
				<div className="max-w-3xl mb-16">
					<div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
						<Sparkles className="size-3.5" />
						<span>{t.hardware.badge}</span>
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 leading-tight text-foreground tracking-tight">
						{t.hardware.title}
					</h2>
					<div className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
						{t.hardware.subTitle}
					</div>
					<p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
						{locale === "zh"
							? "深度融合航空气凝胶保温、伺服机械传动与工业级多频微波矩阵。下方配备 GSAP 工业时序仿真工作台，可直观交互探测四大核心硬件子系统。"
							: "Integrating aerogel thermal shielding, servo motion kinematics, and multi-frequency RF matrices. Explore the interactive GSAP telemetry workstation below."}
					</p>
				</div>

				{/* Two-Column Industrial Workbench */}
				<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
					{/* Left: 4 Interactive Subsystem Switchers */}
					<div className="lg:col-span-5 space-y-3">
						<div className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
							<span>硬件子系统检测 (SUBSYSTEM SELECTOR)</span>
							<span className="text-brand-primary">4 MODULES ACTIVE</span>
						</div>

						{modules.map((item, i) => (
							<button
								type="button"
								key={item.id}
								onClick={() => setActiveModule(i)}
								className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
									activeModule === i
										? "border-brand-primary bg-brand-primary/5 shadow-sm ring-1 ring-brand-primary/30"
										: "border-border/70 bg-muted/20 hover:bg-muted/40"
								}`}
							>
								<div
									className={`p-3 rounded-xl shrink-0 transition-colors ${
										activeModule === i
											? "bg-brand-primary text-white shadow-xs"
											: "bg-muted text-muted-foreground"
									}`}
								>
									{item.icon}
								</div>

								<div className="flex-1 min-w-0">
									<div className="flex items-center justify-between gap-2">
										<div className="font-bold text-base text-foreground truncate">
											{item.title}
										</div>
										<span className="text-xs font-mono font-bold text-brand-primary shrink-0">
											{item.metricNum}
											{item.metricUnit}
										</span>
									</div>
									<div className="text-muted-foreground text-xs leading-relaxed mt-1 line-clamp-2">
										{item.detail}
									</div>
									<div className="text-[11px] font-mono text-muted-foreground/80 mt-2 flex items-center gap-1.5">
										<span className="size-1.5 rounded-full bg-brand-primary shrink-0" />
										<span className="truncate">{item.spec}</span>
									</div>
								</div>
							</button>
						))}
					</div>

					{/* Right: GSAP Interactive CAD Architectural Terminal */}
					<div className="lg:col-span-7">
						<div className="w-full rounded-3xl bg-neutral-950 text-neutral-100 p-6 sm:p-8 border border-neutral-800 shadow-2xl relative overflow-hidden">
							{/* GSAP Laser Scanline Animation */}
							<div className="gsap-laser-scanner absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-80 pointer-events-none z-20 shadow-[0_0_12px_#FF5F1F]" />

							{/* Terminal Status Bar */}
							<div className="flex items-center justify-between pb-4 border-b border-neutral-800 gap-2">
								<div className="flex items-center gap-2.5">
									<Cpu className="size-4 text-brand-primary" />
									<span className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
										{modules[activeModule].title} · CAD DIAGNOSTICS
									</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
									<span className="text-[10px] font-mono text-emerald-400 font-bold">
										LIVE TELEMETRY
									</span>
								</div>
							</div>

							{/* Real-Time Dynamically Interpolated Metric Screen */}
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 font-mono">
								<div>
									<div className="text-[10px] text-neutral-400 uppercase">
										实时核心读数
									</div>
									<div className="text-2xl font-black text-brand-primary mt-1">
										<span ref={countRef}>
											{modules[activeModule].metricNum}
										</span>
										<span className="text-sm ml-1">
											{modules[activeModule].metricUnit}
										</span>
									</div>
									<div className="text-[10px] text-neutral-500 mt-0.5">
										{modules[activeModule].metricLabel}
									</div>
								</div>

								<div>
									<div className="text-[10px] text-neutral-400 uppercase">
										功耗与状态
									</div>
									<div className="text-xl font-bold text-neutral-200 mt-1">
										{activeModule === 2 ? "2000W" : "150W"}
									</div>
									<div className="text-[10px] text-emerald-400 mt-0.5">
										● 变频正常 (NORMAL)
									</div>
								</div>

								<div className="col-span-2 sm:col-span-1">
									<div className="text-[10px] text-neutral-400 uppercase">
										执行架构模式
									</div>
									<div className="text-sm font-bold text-neutral-300 mt-1 truncate">
										{activeModule === 0
											? "4℃ 环形高密冷库"
											: activeModule === 1
												? "变频压缩机制冷"
												: activeModule === 2
													? "多磁控管微波腔"
													: "UV-C 杀菌负压舱"}
									</div>
									<div className="text-[10px] text-neutral-500 mt-0.5">
										ISO22000 标准认证
									</div>
								</div>
							</div>

							{/* Exploded Machine Layer Stagger View */}
							<div className="space-y-3 relative">
								{modules.map((m, idx) => (
									<button
										type="button"
										key={m.id}
										onClick={() => setActiveModule(idx)}
										className={`module-card-${idx} w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
											activeModule === idx
												? "border-brand-primary bg-brand-primary/10 shadow-inner"
												: "border-neutral-800 bg-neutral-900/50 opacity-55 hover:opacity-90"
										}`}
									>
										<div className="flex items-center justify-between text-xs font-bold text-neutral-200 mb-1">
											<div className="flex items-center gap-2">
												<span className="text-brand-primary font-mono">
													0{idx + 1}.
												</span>
												<span>{m.title}</span>
											</div>
											<span className="text-[11px] font-mono text-neutral-400">
												{m.metricNum}
												{m.metricUnit}
											</span>
										</div>
										<p className="text-[11px] text-neutral-400 line-clamp-1">
											{m.spec}
										</p>
									</button>
								))}
							</div>

							{/* Live Signal Oscilloscope SVG */}
							<div className="mt-4 pt-3 border-t border-neutral-850 flex items-center justify-between">
								<div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
									<span className="size-2 rounded-full bg-brand-primary animate-ping" />
									<span>RF 射频波形监测: 2.45 GHz 频段连续采样</span>
								</div>
								<div className="text-[10px] font-mono text-neutral-500">
									LATENCY: 1.2ms
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* GSAP 60s Autonomous Dispatch Sequence Controller */}
				<div className="rounded-3xl bg-card border border-border/80 shadow-md p-6 sm:p-8">
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/70">
						<div>
							<div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-brand-primary uppercase tracking-wider mb-1">
								<Timer className="size-4" />
								<span>
									GSAP 工业出餐全时序仿真 (60-SECOND AUTONOMOUS CYCLE)
								</span>
							</div>
							<h3 className="text-lg sm:text-xl font-bold text-foreground">
								从用户手机扫码到热气腾腾出餐的 4 阶精密时序
							</h3>
						</div>

						{/* Player Controls with GSAP Magnetic buttons */}
						<div className="flex items-center gap-2 shrink-0">
							<GsapMagnetic strength={0.25}>
								{!isPlayingTimeline ? (
									<Button
										onClick={handlePlaySequence}
										className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl h-10 px-4 font-bold text-xs shadow-sm flex items-center gap-1.5"
									>
										<Play className="size-3.5 fill-current" />
										<span>播放完整时序</span>
									</Button>
								) : (
									<Button
										onClick={handlePauseSequence}
										variant="outline"
										className="rounded-xl h-10 px-4 font-bold text-xs flex items-center gap-1.5"
									>
										<Pause className="size-3.5" />
										<span>暂停</span>
									</Button>
								)}
							</GsapMagnetic>

							<GsapMagnetic strength={0.25}>
								<Button
									onClick={handleResetSequence}
									variant="outline"
									size="icon"
									className="rounded-xl size-10"
									title="重置时序"
								>
									<RotateCcw className="size-4" />
								</Button>
							</GsapMagnetic>
						</div>
					</div>

					{/* Timeline Visual Scrubber Bar */}
					<div className="relative w-full h-2.5 bg-muted rounded-full overflow-hidden mb-8">
						<div
							ref={progressBarRef}
							className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-brand-primary transition-all duration-75 rounded-full"
							style={{ width: "0%" }}
						/>
					</div>

					{/* 4 Execution Phases */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{sequencePhases.map((phase, idx) => (
							<button
								type="button"
								key={idx}
								onClick={() => handleScrubPhase(idx)}
								className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
									currentPhase === idx
										? "border-brand-primary bg-brand-primary/5 shadow-xs ring-1 ring-brand-primary/30"
										: "border-border/60 bg-muted/20 hover:bg-muted/40"
								}`}
							>
								<div className="flex items-center justify-between mb-2">
									<span className="font-mono text-xs font-bold text-brand-primary px-2 py-0.5 rounded bg-brand-primary/10">
										{phase.time}
									</span>
									<span className="text-[10px] font-mono text-muted-foreground font-bold">
										PHASE 0{idx + 1}
									</span>
								</div>

								<div className="font-bold text-sm sm:text-base text-foreground mb-1">
									{locale === "zh" ? phase.titleZh : phase.titleEn}
								</div>
								<div className="text-xs text-muted-foreground leading-relaxed">
									{locale === "zh" ? phase.descZh : phase.descEn}
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

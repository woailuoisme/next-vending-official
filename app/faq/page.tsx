"use client";

import gsap from "gsap";
import {
	ArrowLeft,
	Building2,
	CheckCircle2,
	FileQuestion,
	Flame,
	HelpCircle,
	PhoneCall,
	Search,
	ShieldCheck,
	Smartphone,
	Sparkles,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/features/footer/footer";
import { Navbar } from "@/features/navbar/navbar";
import { useI18n } from "@/lib/i18n";

interface FAQItem {
	id: string;
	category: "hardware" | "food" | "business" | "service";
	questionZh: string;
	questionEn: string;
	answerZh: string;
	answerEn: string;
	tags: string[];
}

export default function FAQPage() {
	const { t, locale } = useI18n();
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState<string>("all");
	const [askDialogOpen, setAskDialogOpen] = useState(false);
	const [askedSuccess, setAskedSuccess] = useState(false);
	const [customQuestion, setCustomQuestion] = useState("");
	const [contactPhone, setContactPhone] = useState("");

	const listContainerRef = useRef<HTMLDivElement>(null);

	const faqData: FAQItem[] = [
		{
			id: "q1",
			category: "hardware",
			questionZh: "为什么智膳科技的盒饭加热后口感依然多汁软糯，不会发干发硬？",
			questionEn:
				"Why do meals reheated by SmartMeal remain tender and juicy without drying out?",
			answerZh:
				"传统家用微波炉单磁控管容易出现‘表面滚烫内部冰冷’或局部过熟。智膳 Pro 采用自主研发的【工业级多磁控管阵列】与【动态热场变频算法】。餐盒条码与RFID芯片记录了米饭、肉类与蔬菜的最佳加热频段曲线。配合专用气调排湿透气阀，实现360°均匀渗透，牢牢锁住米饭水分与蛋白质鲜嫩风味，口感还原度达到现炒的95%以上。",
			answerEn:
				"Unlike standard microwave ovens with uneven hot spots, SmartMeal Pro uses an industrial multi-magnetron array with dynamic thermal profiling algorithms. Each dish's barcode commands a tailored heating curve, while proprietary steam-release valves prevent moisture loss, achieving over 95% taste restoration compared to freshly wok-cooked meals.",
			tags: ["微波加热", "多磁控管", "口感还原", "Microwave", "Taste"],
		},
		{
			id: "q2",
			category: "hardware",
			questionZh: "机柜微波加热是否存在电磁泄漏或卫生交叉感染隐患？",
			questionEn:
				"Is microwave reheating safe? Are there any radiation leakage or contamination hazards?",
			answerZh:
				"整机完全符合国家强制性标准 GB 4706 及工业电磁屏蔽测试，微波泄漏值仅为国家安全极限值的1/100以下。机内微波舱与冷藏货道物理隔离，出餐口具备微正压风幕防尘防虫。每次加热后，强力负压抽风系统将水汽抽入活性炭滤网无味排出；闲时更会自动启动医用级 UV-C 紫外循环消杀，杜绝微生物滋生与异味交叉。",
			answerEn:
				"The terminal strictly adheres to industrial safety standards with microwave leakage under 1/100th of regulatory limits. The microwave cavity is physically isolated from the 4°C cold storage area. Medical-grade UV-C sanitation cycles run automatically between orders, and negative pressure filtration evacuates all vapors.",
			tags: ["电磁安全", "UV-C消杀", "食品安全", "Radiation", "Sanitation"],
		},
		{
			id: "q3",
			category: "food",
			questionZh: "餐品的保质期是多久？如果临期未售出如何处理？",
			questionEn:
				"What is the shelf life of the meals, and what happens to unsold expiring food?",
			answerZh:
				"在4℃恒温冷链保护下，气调锁鲜快餐的标准赏味期为48至72小时。智膳科技SaaS云平台具备【一盒一码强制锁死】机制：若餐盒超过设定保质期，机械臂会自动将该餐盒锁定并转移至下架隔离仓，机器界面即时下架并严禁出餐给用户。同时，系统在保质期前12小时会自动启动小程序‘临期特惠秒杀’，平均综合货损率控制在2.8%以内。",
			answerEn:
				"Under continuous 4°C cold preservation, nitrogen-flushed meals maintain peak freshness for 48-72 hours. Our IoT cloud system enforces automated unit-level expiration locks: expired meals are mechanically quarantined and cannot be dispensed. Dynamic discount triggers activate 12 hours prior to expiry, keeping waste under 2.8%.",
			tags: ["保质期", "临期锁死", "零货损", "Expiration", "Shelf Life"],
		},
		{
			id: "q4",
			category: "food",
			questionZh: "中央厨房的生产标准与食材溯源体系是怎样的？",
			questionEn:
				"What are the food safety standards and traceability of your central kitchens?",
			answerZh:
				"所有餐品均由通过 ISO22000 和 HACCP 双重认证的大型中央厨房统一生产。源头直采中粮、双汇等头部供应链绿色食材；车间执行千级洁净度气流控制、农残快检与全批次48小时留样机制。消费者在小程序点餐或扫描餐盒二维码时，可直接查阅该份餐品的产地批次、大厨姓名、烹饪时间及检验报告。",
			answerEn:
				"All meals are produced in ISO22000 and HACCP certified central commissaries. Ingredients are directly sourced from Tier-1 agricultural suppliers. Consumers can scan the QR code on each box to trace farm origins, cooking timestamps, and safety inspection test reports.",
			tags: ["HACCP", "中央厨房", "源头溯源", "Commissary", "Traceability"],
		},
		{
			id: "q5",
			category: "business",
			questionZh:
				"投放一台智膳 Pro 售餐机需要多大场地？对用电和网络有什么要求？",
			questionEn:
				"What are the site, electrical, and network requirements for deploying a terminal?",
			answerZh:
				"占地面积仅需约 1.2m (宽) × 0.95m (深) = 1.14㎡，高度约 2.0m，非常适合写字楼大堂、员工休息区、医院连廊或高校自习室。供电要求为标准 220V / 16A 单相独立电源插座，日常冷藏待机功耗仅 150W（相当于一台小冰箱），加热峰值功率 2500W。机器内置双卡 4G/5G 工业物联网网关，插电即可自动联网，无需额外布设宽带。",
			answerEn:
				"Footprint is merely 1.14 sqm (1.2m W x 0.95m D x 2.0m H). Requires a standard 220V/16A grounded electrical outlet. Idle refrigeration power is only 150W; peak heating draws 2500W. Comes with dual-SIM 4G/5G industrial cellular IoT modems for immediate plug-and-play deployment.",
			tags: ["场地要求", "能耗电费", "即插即用", "Footprint", "Power"],
		},
		{
			id: "q6",
			category: "business",
			questionZh: "合作或加盟的商业模式是怎样的？多久可以收回投资？",
			questionEn:
				"What is the franchise/partnership model, and what is the typical payback period?",
			answerZh:
				"智膳科技提供【合伙人联营】与【机柜直购/租赁】两种合作模式。合伙人只需负责网点点位资源协调，智膳科技提供完整冷链配送、餐品补货、软硬件售后及保险保障。以写字楼常规点位（日销 60-80 份，客单价 22-28 元）测算，单机月净利润约在 8,000 - 15,000 元，平均回本周期约 4 至 7 个月。",
			answerEn:
				"We offer joint-venture revenue sharing and equipment leasing models. Partners secure venue locations while SmartMeal handles hardware, cold-chain fulfillment, customer service, and maintenance. Based on typical office buildings (60-80 meals/day at $3-4 margin), typical payback is 4 to 7 months.",
			tags: ["商业回报", "加盟政策", "回本测算", "ROI", "Business Model"],
		},
		{
			id: "q7",
			category: "service",
			questionZh: "用户如何点餐与取餐？是否支持高峰期免排队预订？",
			questionEn:
				"How do users order and pickup? Is pre-ordering supported during rush hours?",
			answerZh:
				"支持【现场即点即热】与【提前手机预约】双模式。用户在上班路上或工位打开微信/支付宝小程序，即可查看附近机柜的实时菜品库存与排队状态；一键预约取餐时段，系统会在用户到达前自动提前调温，到柜后扫码 15 秒极速落餐，彻底解决午峰期电梯拥挤与堂食排队痛点。",
			answerEn:
				"Both direct walk-up touch ordering and mobile pre-ordering are supported. Workers can browse live terminal inventory on their smartphone, pick their favorite dish, and reserve a pickup window. Scanning their QR code at the terminal delivers hot food in seconds without waiting.",
			tags: ["小程序预订", "免排队", "扫码取餐", "Pre-order", "Mobile App"],
		},
		{
			id: "q8",
			category: "service",
			questionZh: "如果遇到卡餐、断电或出餐温度异常，用户如何获得售后补偿？",
			questionEn:
				"What happens if a meal gets jammed or heating fails? How are users compensated?",
			answerZh:
				"机柜配备高精度光幕传感器与温度红外探头，一旦检测到机械臂抓取未落位或出餐温度低于65℃，系统会自动触发退款并原路返还至微信/支付宝钱包，耗时小于3秒。同时机柜大屏和小程序会立即发放‘补偿代金券’，并向驻场补货运维工程师手机端发送工单，30分钟内快速响应处理。",
			answerEn:
				"Equipped with infrared optical sensors and temperature cameras, the machine automatically detects anomalies. If a box is trapped or temperature falls below 65°C, an automated full refund is processed within 3 seconds alongside a complimentary coupon and alert to local technicians.",
			tags: ["秒退款", "红外测温", "售后无忧", "Auto-refund", "Customer Care"],
		},
		{
			id: "q9",
			category: "service",
			questionZh: "是否支持企业员工餐补代付或园区一卡通对接？",
			questionEn:
				"Does the system support corporate meal stipends and campus smart card integration?",
			answerZh:
				"完全支持！智膳科技企业服务平台已与钉钉、飞书、企业微信及各大园区一卡通系统实现API直连。企业 HR 可在后台按月或按日为员工配置餐补预算，员工刷脸、扫工牌或使用小程序直接划扣企业福利账户，支持超额混合支付与统一增值税专票开具。",
			answerEn:
				"Yes! Our enterprise module integrates seamlessly with Lark, DingTalk, WeChat Work, and RFID campus cards. HR managers can configure daily/monthly dining subsidies, allowing employees to dine with facial recognition or employee badges.",
			tags: [
				"企业餐补",
				"园区一卡通",
				"HR管理",
				"Meal Subsidies",
				"Enterprise",
			],
		},
	];

	// GSAP category switch transition
	useEffect(() => {
		if (listContainerRef.current) {
			gsap.fromTo(
				listContainerRef.current,
				{ opacity: 0, y: 12 },
				{ opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
			);
		}
	}, [activeCategory, searchQuery]);

	const filteredFAQs = useMemo(() => {
		return faqData.filter((item) => {
			const matchesCategory =
				activeCategory === "all" || item.category === activeCategory;

			const q = searchQuery.toLowerCase().trim();
			if (!q) return matchesCategory;

			const matchesSearch =
				item.questionZh.toLowerCase().includes(q) ||
				item.answerZh.toLowerCase().includes(q) ||
				item.questionEn.toLowerCase().includes(q) ||
				item.answerEn.toLowerCase().includes(q) ||
				item.tags.some((t) => t.toLowerCase().includes(q));

			return matchesCategory && matchesSearch;
		});
	}, [activeCategory, searchQuery]);

	const handleAskSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!customQuestion || !contactPhone) return;
		setAskedSuccess(true);
		setTimeout(() => {
			setAskDialogOpen(false);
			setAskedSuccess(false);
			setCustomQuestion("");
			setContactPhone("");
		}, 2500);
	};

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-brand-primary selection:text-white">
			<Navbar />

			<main className="flex-1 pt-28 pb-20">
				{/* Header Hero */}
				<section className="py-12 px-6 border-b border-border/60 bg-muted/20">
					<div className="max-w-4xl mx-auto text-center">
						<Link
							href="/"
							className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-brand-primary transition-colors mb-6"
						>
							<ArrowLeft className="w-3.5 h-3.5" />
							<span>{locale === "zh" ? "返回官网首页" : "Back to Home"}</span>
						</Link>

						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4 mx-auto">
							<HelpCircle className="w-3.5 h-3.5" />
							<span>
								{locale === "zh"
									? "智膳科技知识库"
									: "SMARTMEAL KNOWLEDGE BASE"}
							</span>
						</div>

						<h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4 text-balance">
							{t.faq.pageTitle}
						</h1>
						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
							{t.faq.pageSubtitle}
						</p>

						{/* Live Search Input */}
						<div className="relative max-w-xl mx-auto">
							<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
							<Input
								type="text"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder={t.faq.searchPlaceholder}
								className="pl-12 pr-4 h-13 rounded-2xl bg-card border-border shadow-xs text-sm"
							/>
							{searchQuery && (
								<button
									type="button"
									onClick={() => setSearchQuery("")}
									className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-semibold"
								>
									{locale === "zh" ? "清除" : "Clear"}
								</button>
							)}
						</div>
					</div>
				</section>

				{/* Content Section with Category Tabs & Accordion */}
				<section className="max-w-4xl mx-auto px-6 pt-10">
					{/* Category Tabs using shadcn */}
					<div className="flex justify-center mb-8">
						<Tabs
							value={activeCategory}
							onValueChange={setActiveCategory}
							className="w-full"
						>
							<TabsList className="flex overflow-x-auto sm:grid sm:grid-cols-5 h-auto p-1.5 rounded-2xl bg-muted/60 w-full no-scrollbar gap-1">
								<TabsTrigger
									value="all"
									className="rounded-xl py-2 px-3 text-xs font-bold whitespace-nowrap shrink-0 sm:shrink"
								>
									{t.faq.allCat}
								</TabsTrigger>
								<TabsTrigger
									value="hardware"
									className="rounded-xl py-2 px-3 text-xs font-bold whitespace-nowrap shrink-0 sm:shrink"
								>
									{t.faq.catHardware}
								</TabsTrigger>
								<TabsTrigger
									value="food"
									className="rounded-xl py-2 px-3 text-xs font-bold whitespace-nowrap shrink-0 sm:shrink"
								>
									{t.faq.catFood}
								</TabsTrigger>
								<TabsTrigger
									value="business"
									className="rounded-xl py-2 px-3 text-xs font-bold whitespace-nowrap shrink-0 sm:shrink"
								>
									{t.faq.catBusiness}
								</TabsTrigger>
								<TabsTrigger
									value="service"
									className="rounded-xl py-2 px-3 text-xs font-bold whitespace-nowrap shrink-0 sm:shrink"
								>
									{t.faq.catService}
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>

					{/* Results Summary */}
					<div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-mono">
						<span>
							{locale === "zh"
								? `共收录 ${filteredFAQs.length} 条高频解答`
								: `Showing ${filteredFAQs.length} solutions`}
						</span>
						{searchQuery && (
							<span className="text-brand-primary font-semibold">
								{locale === "zh"
									? `搜索词：“${searchQuery}”`
									: `Search: "${searchQuery}"`}
							</span>
						)}
					</div>

					{/* FAQ Accordion List */}
					<div ref={listContainerRef}>
						{filteredFAQs.length > 0 ? (
							<Accordion type="single" defaultValue="q1" className="space-y-4">
								{filteredFAQs.map((item) => (
									<AccordionItem
										key={item.id}
										value={item.id}
										className="border border-border/80 bg-card rounded-2xl px-6 py-2 shadow-xs hover:border-brand-primary/30 transition-all"
									>
										<AccordionTrigger className="hover:no-underline py-4">
											<div className="flex items-start gap-3 text-left">
												<span className="w-6 h-6 rounded-lg bg-brand-primary/10 text-brand-primary text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
													Q
												</span>
												<span className="text-base font-bold text-foreground">
													{locale === "zh" ? item.questionZh : item.questionEn}
												</span>
											</div>
										</AccordionTrigger>

										<AccordionContent className="pt-1 pb-5 pl-9 text-muted-foreground text-sm leading-relaxed">
											<p className="mb-4">
												{locale === "zh" ? item.answerZh : item.answerEn}
											</p>

											{/* Metadata tags */}
											<div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/40">
												{item.tags.map((tag, tIdx) => (
													<span
														key={tIdx}
														className="text-[11px] font-semibold text-muted-foreground/80 bg-muted/60 px-2.5 py-0.5 rounded-md"
													>
														#{tag}
													</span>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						) : (
							<div className="text-center py-16 bg-muted/20 rounded-3xl border border-dashed border-border p-8">
								<FileQuestion className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-60" />
								<h3 className="text-base font-bold text-foreground mb-1">
									{locale === "zh"
										? "未找到匹配的问题解答"
										: "No Matching Questions Found"}
								</h3>
								<p className="text-xs text-muted-foreground max-w-sm mx-auto mb-6">
									{locale === "zh"
										? "您可以尝试使用更简短的关键词，或者直接向我们的技术支持团队提交疑问。"
										: "Try searching with broader terms or submit your inquiry directly to our technical team."}
								</p>
								<Button
									onClick={() => setSearchQuery("")}
									variant="outline"
									size="sm"
									className="rounded-full"
								>
									{locale === "zh" ? "清空搜索条件" : "Clear Search"}
								</Button>
							</div>
						)}
					</div>

					{/* Bottom Card: Direct Support & Custom Question Submission */}
					<div className="mt-16 p-8 rounded-3xl bg-linear-to-r from-brand-primary/10 via-orange-500/5 to-transparent border border-brand-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
						<div className="text-left">
							<h3 className="text-xl font-black text-foreground mb-1">
								{t.faq.contactSupport}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed max-w-md">
								{t.faq.contactDesc}
							</p>
						</div>

						<Dialog open={askDialogOpen} onOpenChange={setAskDialogOpen}>
							<DialogTrigger
								render={
									<Button className="bg-brand-primary text-white hover:bg-brand-primary/90 font-bold rounded-full px-7 py-6 text-sm shrink-0 shadow-md shadow-brand-primary/20" />
								}
							>
								<PhoneCall className="w-4 h-4 mr-2" />
								<span>{t.faq.contactButton}</span>
							</DialogTrigger>

							<DialogContent className="sm:max-w-md p-6 rounded-3xl bg-card border border-border">
								<DialogHeader className="text-left mb-4">
									<DialogTitle className="text-xl font-bold text-foreground">
										{locale === "zh"
											? "提交您的具体疑问"
											: "Submit Your Specific Question"}
									</DialogTitle>
									<DialogDescription className="text-xs text-muted-foreground">
										{locale === "zh"
											? "无论是技术接口、机柜定制或是招商分润，工程师与业务负责人将在1小时内致电详述。"
											: "Our hardware engineers & business consultants will respond within 1 hour."}
									</DialogDescription>
								</DialogHeader>

								{askedSuccess ? (
									<div className="py-8 text-center flex flex-col items-center">
										<CheckCircle2 className="w-12 h-12 text-emerald-500 mb-3" />
										<h4 className="font-bold text-base text-foreground mb-1">
											{locale === "zh" ? "问题已提交！" : "Question Received!"}
										</h4>
										<p className="text-xs text-muted-foreground">
											{locale === "zh"
												? "我们已指派资深顾问为您准备详细技术说明书。"
												: "Our support engineer will contact you shortly."}
										</p>
									</div>
								) : (
									<form onSubmit={handleAskSubmit} className="space-y-4">
										<div className="space-y-1.5 text-left">
											<label className="text-xs font-bold text-foreground">
												{locale === "zh"
													? "您想了解的问题内容"
													: "Your Question"}
											</label>
											<textarea
												required
												rows={3}
												value={customQuestion}
												onChange={(e) => setCustomQuestion(e.target.value)}
												placeholder={
													locale === "zh"
														? "如：医院急诊大厅是否适合放置、是否有专属夜间补货团队？"
														: "Describe your deployment scene or question..."
												}
												className="w-full rounded-xl border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
											/>
										</div>

										<div className="space-y-1.5 text-left">
											<label className="text-xs font-bold text-foreground">
												{locale === "zh"
													? "接收答复的手机号码"
													: "Your Phone Number"}
											</label>
											<Input
												required
												type="tel"
												value={contactPhone}
												onChange={(e) => setContactPhone(e.target.value)}
												placeholder="138-xxxx-xxxx"
												className="rounded-xl h-11"
											/>
										</div>

										<Button
											type="submit"
											className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 font-bold rounded-xl h-11"
										>
											{locale === "zh" ? "确认提交疑问" : "Submit Question"}
										</Button>
									</form>
								)}
							</DialogContent>
						</Dialog>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

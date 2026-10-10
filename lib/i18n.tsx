"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "zh" | "en";

export interface Translations {
	nav: {
		solutions: string;
		hardware: string;
		software: string;
		faq: string;
		about: string;
		bookDemo: string;
		brandSub: string;
	};
	hero: {
		kicker: string;
		title1: string;
		titleHighlight: string;
		title2: string;
		desc: string;
		ctaPrimary: string;
		ctaSecondary: string;
		heatingTitle: string;
		heatingDesc: string;
		statSpeed: string;
		statSpeedLabel: string;
		statTemp: string;
		statTempLabel: string;
	};
	solution: {
		tag: string;
		title: string;
		desc: string;
		step1Title: string;
		step1Desc: string;
		step2Title: string;
		step2Desc: string;
		step3Title: string;
		step3Desc: string;
		step4Title: string;
		step4Desc: string;
	};
	hardware: {
		badge: string;
		title: string;
		subTitle: string;
		feature1Title: string;
		feature1Desc: string;
		feature2Title: string;
		feature2Desc: string;
		feature3Title: string;
		feature3Desc: string;
		feature4Title: string;
		feature4Desc: string;
		coreTech: string;
		aiTitle: string;
		aiDesc: string;
	};
	software: {
		badge: string;
		title1: string;
		title2: string;
		desc: string;
		card1Title: string;
		card1Desc: string;
		card2Title: string;
		card2Desc: string;
		card3Title: string;
		card3Desc: string;
		card4Title: string;
		card4Desc: string;
		point1: string;
		point2: string;
		point3: string;
		point4: string;
	};
	stats: {
		cities: string;
		citiesLabel: string;
		terminals: string;
		terminalsLabel: string;
		meals: string;
		mealsLabel: string;
		satisfaction: string;
		satisfactionLabel: string;
	};
	cta: {
		title: string;
		desc: string;
		button: string;
		modalTitle: string;
		modalDesc: string;
		name: string;
		phone: string;
		city: string;
		submit: string;
		submitted: string;
	};
	faq: {
		pageTitle: string;
		pageSubtitle: string;
		searchPlaceholder: string;
		allCat: string;
		catHardware: string;
		catFood: string;
		catBusiness: string;
		catService: string;
		contactSupport: string;
		contactDesc: string;
		contactButton: string;
	};
	footer: {
		desc: string;
		products: string;
		proVending: string;
		miniVending: string;
		kitchenSaaS: string;
		logisticsPlatform: string;
		contact: string;
		address: string;
		hours: string;
		rights: string;
		privacy: string;
		terms: string;
		icp: string;
	};
	theme: {
		light: string;
		dark: string;
		system: string;
	};
}

export const dictionaries: Record<Locale, Translations> = {
	zh: {
		nav: {
			solutions: "全链解决方案",
			hardware: "智能终端硬件",
			software: "数字化中枢",
			faq: "常见问题",
			about: "关于我们",
			bookDemo: "预约实机演示",
			brandSub: "SMARTMEAL",
		},
		hero: {
			kicker: "2026 智能餐饮新基建",
			title1: "重新定义",
			titleHighlight: "无人热食快餐",
			title2: "新体验",
			desc: "从标准化中央厨房到终端智能冷鲜柜，小程序一键预点，工业级矩阵微波60秒自动出餐。全程4℃锁鲜，还原大厨锅气现做口感。",
			ctaPrimary: "立即咨询合作",
			ctaSecondary: "查看标杆案例",
			heatingTitle: "360° 矩阵微波加热",
			heatingDesc: "专利温场感应算法，受热均匀，杜绝冷芯或过干",
			statSpeed: "60s",
			statSpeedLabel: "极速鲜热出餐",
			statTemp: "4℃",
			statTempLabel: "全链路恒温锁鲜",
		},
		solution: {
			tag: "FULL-CHAIN ECOSYSTEM",
			title: "从田间后厨到指尖舌尖的闭环",
			desc: "打造“中央厨房集约化加工 + 冷链温控直配 + 智能终端现热”的三位一体无人餐饮体系，告别传统外卖等餐久与门店重租金痛点。",
			step1Title: "中央厨房集约化供应",
			step1Desc:
				"千级无尘净菜与热调车间，大厨配方标准化量产，自动气调密封锁鲜包装。",
			step2Title: "全流程冷链恒温干线",
			step2Desc:
				"车载冷机与终端4-8℃精准恒温，物联网传感器实时回传环境温湿度数据。",
			step3Title: "微信/支付宝小程序预点",
			step3Desc:
				"附近机柜货道余量实时可视，支持提前下单预约取餐时间，到柜免排队扫码。",
			step4Title: "高功率微波智能加热出餐",
			step4Desc:
				"机械臂平稳取餐，条码自动识别餐品并匹配定制加热曲线，60秒热气腾腾交付。",
		},
		hardware: {
			badge: "SMART TERMINAL HARDWARE",
			title: "智膳 Pro 系列",
			subTitle: "工业级智能自动热食售卖机",
			feature1Title: "高密度超大餐容量",
			feature1Desc:
				"单台占地不足1.5㎡，可容纳 80-120 份独立中西式快餐盒与汤品。",
			feature2Title: "变频双循环制冷系统",
			feature2Desc:
				"严苛控制箱内温差 ≤ 1℃，断电4小时内仍具备蓄冷安全保护机制。",
			feature3Title: "工业多磁控管微波矩阵",
			feature3Desc:
				"2000W大功率多频联动受热，米饭软糯、肉品多汁、青菜鲜绿脆爽。",
			feature4Title: "医用级紫外线循环消杀",
			feature4Desc:
				"出餐通道与内部微波舱闲时自动执行UV-C与高温自洁，杜绝异味与卫生死角。",
			coreTech: "CORE HARDWARE INNOVATION",
			aiTitle: "AI 视觉货道识别与传动机械手",
			aiDesc: "高精度防夹手感应门、红外温度探测传感器与防倾倒结构设计",
		},
		software: {
			badge: "DIGITAL PLATFORM",
			title1: "不仅仅是一台售卖机",
			title2: "更是全渠道数字化餐饮中枢",
			desc: "为运营商与品牌方打造软硬一体的云端物联中枢，从餐食溯源、销量算法预测到动态补货调度，全面降低货损，实现无人精细化运营。",
			card1Title: "用户端极速小程序",
			card1Desc:
				"附近网点导航、卡路里与营养成分透视、会员储值、企业员工餐福利结算。",
			card2Title: "运营商云控管理中枢",
			card2Desc: "实时单机库存告警、温湿度曲线、远程调温与故障自检诊断系统。",
			card3Title: "一物一码食品安全溯源",
			card3Desc:
				"每盒餐品具备唯一加密数字码，生产批次、留样报告、保质期到期自动锁死不出餐。",
			card4Title: "AI 动态补货预测引擎",
			card4Desc:
				"结合写字楼考勤、天气与历史消费周期，智能生成补货工单与最优配送路径。",
			point1: "微信支付 / 支付宝 / 企业用餐一卡通无缝对接",
			point2: "分时段动态折扣与临期餐品自动促销策略",
			point3: "多门店多点位集团化权限分级管理架构",
			point4: "开放标准 RESTful OpenAPI，支持第三方ERP对接",
		},
		stats: {
			cities: "50+",
			citiesLabel: "全国进驻重点城市",
			terminals: "2,000+",
			terminalsLabel: "商业网点在线运营终端",
			meals: "10,000,000+",
			mealsLabel: "累计安全交付高品质热餐",
			satisfaction: "99.4%",
			satisfactionLabel: "白领与企业客户好评率",
		},
		cta: {
			title: "与智膳科技携手，开辟无人智慧餐饮新蓝海",
			desc: "无论是写字楼园区物业、大学医院，还是区域餐饮品牌加盟商，我们提供完整的硬件采购、冷链供应链对接与全套SaaS运营支持。",
			button: "联系招商运营顾问",
			modalTitle: "预约实机体验 & 商业加盟咨询",
			modalDesc:
				"请留下您的联系方式，智膳科技招商专家将在2小时内为您提供定制化点位投资回报测算表。",
			name: "您的姓名",
			phone: "联系电话 (手机)",
			city: "意向投放城市 / 场景类型",
			submit: "提交预约信息",
			submitted: "预约已提交，我们将尽快与您取得联系！",
		},
		faq: {
			pageTitle: "常见问题解答",
			pageSubtitle:
				"全面了解智膳科技自动售餐机的硬件安全、餐品风味、冷链温控与加盟运营细节",
			searchPlaceholder:
				"输入关键字搜索问题 (如：冷链、微波加热、加盟政策、保质期...)",
			allCat: "全部疑问",
			catHardware: "智能硬件与加热",
			catFood: "中央厨房与安全",
			catBusiness: "加盟合作与收益",
			catService: "点餐取餐体验",
			contactSupport: "没找到您关心的疑问？",
			contactDesc:
				"我们的技术支持与招商顾问全天候在线，随时为您解答点位进驻与技术细节。",
			contactButton: "在线直接咨询",
		},
		footer: {
			desc: "智膳科技致力于利用机器人自动化、精准温控与物联SaaS技术，让高品质美味热餐在城市的每个角落触手可及。",
			products: "产品与生态",
			proVending: "智膳 Pro 旗舰售餐机",
			miniVending: "智膳 Mini 办公室专享版",
			kitchenSaaS: "中央厨房数字派工系统",
			logisticsPlatform: "冷链车队智能补货云",
			contact: "联系总部",
			address: "北京市海淀区中关村前沿智能装备产业园B座",
			hours: "服务热线：400-880-6789 (周一至周日 8:30 - 21:00)",
			rights: "© 2026 智膳科技 (SmartMeal Tech). 版权所有.",
			privacy: "隐私政策",
			terms: "服务条款",
			icp: "京ICP备2026088921号",
		},
		theme: {
			light: "浅色模式",
			dark: "深色模式",
			system: "跟随系统",
		},
	},
	en: {
		nav: {
			solutions: "Solutions",
			hardware: "Hardware",
			software: "Digital Platform",
			faq: "FAQ",
			about: "About Us",
			bookDemo: "Book Live Demo",
			brandSub: "SMARTMEAL",
		},
		hero: {
			kicker: "2026 NEXT-GEN AUTONOMOUS CATERING",
			title1: "Redefining",
			titleHighlight: "Hot Meal Vending",
			title2: "Everywhere",
			desc: "From centralized commissary kitchens to smart refrigerated terminals. Mobile order, multi-magnetron microwave heating, fresh hot food ready in 60s at 4°C preserved quality.",
			ctaPrimary: "Explore Partnership",
			ctaSecondary: "View Case Studies",
			heatingTitle: "360° Microwave Matrix",
			heatingDesc:
				"Proprietary thermal profile algorithm ensures even heating with zero cold spots",
			statSpeed: "60s",
			statSpeedLabel: "Rapid Meal Dispatch",
			statTemp: "4°C",
			statTempLabel: "End-to-End Cold Chain",
		},
		solution: {
			tag: "FULL-CHAIN ECOSYSTEM",
			title: "Seamless Closed-Loop Catering Solution",
			desc: "Connecting central kitchen manufacturing, temperature-controlled logistics, and autonomous hot-vending units. Zero rent burden, zero kitchen staff, 24/7 availability.",
			step1Title: "Central Kitchen Supply",
			step1Desc:
				"Standardized production in cleanrooms, executive chef recipes, and nitrogen-flushed protective packaging.",
			step2Title: "4°C Cold Chain Transport",
			step2Desc:
				"GPS & IoT monitored refrigerated transit straight to terminals with continuous temperature logging.",
			step3Title: "Mini-Program Pre-Ordering",
			step3Desc:
				"Check real-time machine inventory on smartphone, order in advance, and scan QR to collect with zero waiting.",
			step4Title: "Precision Microwave Dispatch",
			step4Desc:
				"Automated robotic arm moves box to microwave module, barcode triggers tailored heating curve for piping hot food in 60s.",
		},
		hardware: {
			badge: "SMART TERMINAL HARDWARE",
			title: "SmartMeal Pro Series",
			subTitle: "Industrial Grade Hot-Meal Vending Machine",
			feature1Title: "High-Capacity Storage",
			feature1Desc:
				"Compact footprint <1.5 sqm holds 80-120 standardized meal bento boxes and hot soups.",
			feature2Title: "Dual-Inverter Refrigeration",
			feature2Desc:
				"Strict box temperature delta ≤ 1°C, with 4-hour thermal insulation retention during power cuts.",
			feature3Title: "Industrial Multi-Magnetron Matrix",
			feature3Desc:
				"2000W multi-frequency microwave chamber preserves rice moisture, tender proteins, and crisp greens.",
			feature4Title: "Medical-Grade UV Sterilization",
			feature4Desc:
				"Automated UV-C and thermal sanitation cycle during idle hours ensures hospital-grade hygiene.",
			coreTech: "CORE HARDWARE INNOVATION",
			aiTitle: "AI Vision Inventory & Robotic Handling",
			aiDesc:
				"Anti-pinch safety doors, dual infrared temperature verification, and anti-tipping chassis engineering",
		},
		software: {
			badge: "DIGITAL PLATFORM",
			title1: "More Than a Vending Machine",
			title2: "Your Complete Cloud Catering Command Center",
			desc: "Empower operators with end-to-end IoT cloud intelligence: from food safety traceability to algorithm-driven restocking, reducing waste and maximizing ROI.",
			card1Title: "Consumer Mini-Program",
			card1Desc:
				"Terminal locator, real-time menu, nutritional analysis, and enterprise meal wallet integration.",
			card2Title: "Operator Cloud Dashboard",
			card2Desc:
				"Live stock level monitoring, temperature health curves, remote diagnosis, and automated firmware updates.",
			card3Title: "Unit-Level QR Safety Traceability",
			card3Desc:
				"Every meal carries an encrypted QR code. Expiration automatically locks the tray to prevent dispensing.",
			card4Title: "AI Demand & Restock Engine",
			card4Desc:
				"Predicts demand using building foot-traffic, weather, and day-of-week patterns to generate optimal routes.",
			point1: "WeChat, Alipay, Apple Pay & Corporate ID Badge Compatibility",
			point2: "Time-based dynamic discounting & automated clearance promotions",
			point3: "Multi-tenant role-based permissions for regional franchisees",
			point4:
				"Standard RESTful OpenAPI for seamless enterprise ERP integration",
		},
		stats: {
			cities: "50+",
			citiesLabel: "Key Metropolitan Hubs Covered",
			terminals: "2,000+",
			terminalsLabel: "Live Smart Terminals in Operation",
			meals: "10,000,000+",
			mealsLabel: "Safe Hot Meals Delivered",
			satisfaction: "99.4%",
			satisfactionLabel: "Consumer & Enterprise Satisfaction",
		},
		cta: {
			title: "Join SmartMeal Tech to Lead the Autonomous Dining Revolution",
			desc: "From commercial office towers and hospital campuses to regional franchise operators, we provide complete hardware, cold chain supply, and SaaS operations.",
			button: "Speak With Partnership Director",
			modalTitle: "Schedule a Live Demo & Franchise Assessment",
			modalDesc:
				"Leave your contact details and our business development team will share a tailored ROI projection model within 2 hours.",
			name: "Your Full Name",
			phone: "Phone Number",
			city: "Target City / Deployment Venue",
			submit: "Submit Request",
			submitted: "Thank you! Our partnership team will contact you shortly.",
		},
		faq: {
			pageTitle: "Frequently Asked Questions",
			pageSubtitle:
				"Everything you need to know about SmartMeal's hardware technology, food safety standards, and franchise model",
			searchPlaceholder:
				"Search questions (e.g., cold chain, microwave heating, franchise ROI, shelf life...)",
			allCat: "All Questions",
			catHardware: "Hardware & Heating",
			catFood: "Commissary & Safety",
			catBusiness: "Franchise & ROI",
			catService: "Ordering & Pickup",
			contactSupport: "Still have questions?",
			contactDesc:
				"Our engineering and business development team are ready to answer your technical and deployment queries.",
			contactButton: "Direct Consultation",
		},
		footer: {
			desc: "SmartMeal Tech harnesses robotic automation, precision thermal control, and IoT cloud systems to make fresh, premium meals accessible everywhere.",
			products: "Products & Ecosystem",
			proVending: "SmartMeal Pro Flagship Machine",
			miniVending: "SmartMeal Mini Office Edition",
			kitchenSaaS: "Central Kitchen Dispatch SaaS",
			logisticsPlatform: "Cold Chain Restocking Cloud",
			contact: "Headquarters",
			address:
				"Building B, Zhongguancun Intelligent Robotics Park, Haidian District, Beijing",
			hours: "Hotline: +86 400-880-6789 (Mon-Sun 8:30 - 21:00)",
			rights: "© 2026 SmartMeal Tech. All rights reserved.",
			privacy: "Privacy Policy",
			terms: "Terms of Service",
			icp: "Beijing ICP No. 2026088921",
		},
		theme: {
			light: "Light",
			dark: "Dark",
			system: "System",
		},
	},
};

interface I18nContextType {
	locale: Locale;
	setLocale: (l: Locale) => void;
	t: Translations;
}

const I18nContext = createContext<I18nContextType>({
	locale: "zh",
	setLocale: () => {},
	t: dictionaries.zh,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("zh");

	useEffect(() => {
		try {
			const stored = localStorage.getItem("smartmeal_locale") as Locale | null;
			if (stored === "zh" || stored === "en") {
				setLocaleState(stored);
			} else if (navigator.language.startsWith("en")) {
				setLocaleState("en");
			}
		} catch {}
	}, []);

	const setLocale = (l: Locale) => {
		setLocaleState(l);
		try {
			localStorage.setItem("smartmeal_locale", l);
		} catch {}
	};

	return (
		<I18nContext.Provider
			value={{ locale, setLocale, t: dictionaries[locale] }}
		>
			{children}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	return useContext(I18nContext);
}

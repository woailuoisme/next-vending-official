import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-display",
});

export const metadata: Metadata = {
	title: "智膳科技 SMARTMEAL - 全链路智能自动售餐机官网",
	description:
		"智膳科技提供中央厨房集约化供应、4℃全流程冷链锁鲜、微信/支付宝小程序预定与工业矩阵微波60秒自动出餐的全链路智能无人餐饮解决方案。",
	keywords: [
		"自动售餐机",
		"智能便当机",
		"中央厨房冷链",
		"无人快餐",
		"微波加热售货机",
		"智膳科技",
		"SmartMeal",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-CN" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground transition-colors duration-200`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<I18nProvider>{children}</I18nProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

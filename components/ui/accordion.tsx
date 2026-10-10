"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
	openItems: string[];
	toggleItem: (id: string) => void;
	type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

function Accordion({
	children,
	type = "single",
	defaultValue,
	className,
	...props
}: {
	children: React.ReactNode;
	type?: "single" | "multiple";
	defaultValue?: string | string[];
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
	const [openItems, setOpenItems] = React.useState<string[]>(() => {
		if (!defaultValue) return [];
		return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
	});

	const toggleItem = (id: string) => {
		setOpenItems((prev) => {
			if (type === "single") {
				return prev.includes(id) ? [] : [id];
			}
			return prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id];
		});
	};

	return (
		<AccordionContext.Provider value={{ openItems, toggleItem, type }}>
			<div className={cn("divide-y divide-border/60", className)} {...props}>
				{children}
			</div>
		</AccordionContext.Provider>
	);
}

function AccordionItem({
	value,
	className,
	children,
	...props
}: {
	value: string;
	className?: string;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			data-item-value={value}
			className={cn("border-b border-border/60 py-1", className)}
			{...props}
		>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { "data-value": value } as any);
				}
				return child;
			})}
		</div>
	);
}

function AccordionTrigger({
	children,
	className,
	...props
}: {
	children: React.ReactNode;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const context = React.useContext(AccordionContext);
	const value = (props as any)["data-value"] as string;
	const isOpen = context?.openItems.includes(value);

	return (
		<button
			type="button"
			onClick={() => context?.toggleItem(value)}
			className={cn(
				"flex w-full items-center justify-between py-4 text-left font-medium text-foreground transition-all hover:text-brand-primary [&[data-state=open]>svg]:rotate-180",
				className,
			)}
			data-state={isOpen ? "open" : "closed"}
			{...props}
		>
			<span className="text-base font-semibold leading-relaxed">
				{children}
			</span>
			<ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
		</button>
	);
}

function AccordionContent({
	children,
	className,
	...props
}: {
	children: React.ReactNode;
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
	const context = React.useContext(AccordionContext);
	const value = (props as any)["data-value"] as string;
	const isOpen = context?.openItems.includes(value);

	if (!isOpen) return null;

	return (
		<div
			className={cn(
				"overflow-hidden pb-4 text-sm text-muted-foreground leading-relaxed animate-in fade-in-50 duration-200",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

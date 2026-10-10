"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextType {
	value: string;
	onValueChange: (val: string) => void;
}

const TabsContext = React.createContext<TabsContextType | null>(null);

function Tabs({
	value,
	defaultValue,
	onValueChange,
	className,
	children,
	...props
}: {
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
	className?: string;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
	const [internalValue, setInternalValue] = React.useState(defaultValue || "");
	const activeValue = value !== undefined ? value : internalValue;

	const handleValueChange = (newVal: string) => {
		if (value === undefined) {
			setInternalValue(newVal);
		}
		onValueChange?.(newVal);
	};

	return (
		<TabsContext.Provider
			value={{ value: activeValue, onValueChange: handleValueChange }}
		>
			<div className={cn("flex flex-col gap-4", className)} {...props}>
				{children}
			</div>
		</TabsContext.Provider>
	);
}

function TabsList({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"inline-flex h-11 items-center justify-center rounded-xl bg-muted p-1 text-muted-foreground",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}

function TabsTrigger({
	value,
	className,
	children,
	...props
}: {
	value: string;
	className?: string;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const context = React.useContext(TabsContext);
	const isActive = context?.value === value;

	return (
		<button
			type="button"
			onClick={() => context?.onValueChange(value)}
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
				isActive
					? "bg-background text-foreground shadow-xs"
					: "text-muted-foreground hover:text-foreground",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}

function TabsContent({
	value,
	className,
	children,
	...props
}: {
	value: string;
	className?: string;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
	const context = React.useContext(TabsContext);
	if (context?.value !== value) return null;

	return (
		<div
			className={cn(
				"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring animate-in fade-in-50 duration-200",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export { Tabs, TabsContent, TabsList, TabsTrigger };

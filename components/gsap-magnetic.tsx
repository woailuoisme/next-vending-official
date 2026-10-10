"use client";

import gsap from "gsap";
import type React from "react";
import { useEffect, useRef } from "react";

interface MagneticProps {
	children: React.ReactElement<any>;
	strength?: number;
	className?: string;
}

export function GsapMagnetic({
	children,
	strength = 0.3,
	className,
}: MagneticProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = node.getBoundingClientRect();
			const x = e.clientX - (rect.left + rect.width / 2);
			const y = e.clientY - (rect.top + rect.height / 2);

			gsap.to(node, {
				x: x * strength,
				y: y * strength,
				duration: 0.35,
				ease: "power2.out",
			});
		};

		const handleMouseLeave = () => {
			gsap.to(node, {
				x: 0,
				y: 0,
				duration: 0.7,
				ease: "elastic.out(1, 0.4)",
			});
		};

		node.addEventListener("mousemove", handleMouseMove);
		node.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			node.removeEventListener("mousemove", handleMouseMove);
			node.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [strength]);

	return (
		<div ref={ref} className={className ? className : "inline-block"}>
			{children}
		</div>
	);
}

import { animate, stagger } from "motion";

export function bentoAnimations() {
	const elements = document.querySelectorAll(".fade-in");
	animate(
		elements,
		{
			y: [100, 0],
			opacity: 1,
		},
		{ delay: stagger(0.08, {startDelay: 0.08}), duration: 0.3 },
	);
}

import { animate, stagger } from "motion";

export function bentoAnimations() {
	const elements = document.querySelectorAll(".fade-in");
	animate(
		elements,
		{
			y: [100, 0],
			opacity: 1,
		},
		{ delay: stagger(0.02, {startDelay: 0.3}), duration: 0.3 },
	);
}

export function inViewAnimations() {

}

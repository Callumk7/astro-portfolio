export function createRandomSweepStyles() {
	const elements = document.querySelectorAll(".card");
	const directions = [
		// Straight directions
		{
			start: "left: -100%; top: 0; width: 100%; height: 100%",
			end: "left: 0",
			direction: "left",
		},
		{
			start: "left: 100%; top: 0; width: 100%; height: 100%",
			end: "left: 0",
			direction: "right",
		},
		{
			start: "left: 0; top: -100%; width: 100%; height: 100%",
			end: "top: 0",
			direction: "top",
		},
		{
			start: "left: 0; top: 100%; width: 100%; height: 100%",
			end: "top: 0",
			direction: "bottom",
		},
		// Diagonal directions
		{
			start: "left: -100%; top: -100%; width: 200%; height: 200%",
			end: "left: 0; top: 0",
		},
		{
			start: "left: -100%; top: 100%; width: 200%; height: 200%",
			end: "left: 0; top: 0",
		},
		{
			start: "left: 100%; top: -100%; width: 200%; height: 200%",
			end: "left: 0; top: 0",
		},
		{
			start: "left: 100%; top: 100%; width: 200%; height: 200%",
			end: "left: 0; top: 0",
		},
	];

	elements.forEach((element, index) => {
		const style = document.createElement("style");
		document.head.appendChild(style);

		// Set initial direction
		const initialDirection = directions[Math.floor(Math.random() * directions.length)];
		style.textContent = `
			.card:nth-child(${index + 1})::before {
			${initialDirection.start}
			}
			.card:nth-child(${index + 1}):hover::before {
			${initialDirection.end}
			}
			`;

		// Update direction on hover
		element.addEventListener("mouseenter", ((e: MouseEvent) => {
			const elementRect = element.getBoundingClientRect();
			const dT = Math.abs(e.clientY - elementRect.top);
			const dB = Math.abs(e.clientY - elementRect.bottom);
			const dL = Math.abs(e.clientX - elementRect.left);
			const dR = Math.abs(e.clientX - elementRect.right);

			const minDistance = Math.min(dT, dB, dL, dR);

			let entryDirection: string;
			if (minDistance === dT) entryDirection = "top";
			if (minDistance === dB) entryDirection = "bottom";
			if (minDistance === dL) entryDirection = "left";
			if (minDistance === dR) entryDirection = "right";

			const direction = directions.find(
				(direction) => direction.direction === entryDirection,
			);
			style.textContent = `
.card:nth-child(${index + 1})::before {
${direction!.start}
}
.card:nth-child(${index + 1}):hover::before {
${direction!.end}
}
`;
		}) as EventListener);
	});
}

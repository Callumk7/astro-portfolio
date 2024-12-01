export function createRandomSweepStyles() {
	const elements = document.querySelectorAll(".card");
	const directions = [
		// Straight directions
		{ start: "left: -100%; top: 0; width: 100%; height: 100%", end: "left: 0" },
		{ start: "left: 100%; top: 0; width: 100%; height: 100%", end: "left: 0" },
		{ start: "left: 0; top: -100%; width: 100%; height: 100%", end: "top: 0" },
		{ start: "left: 0; top: 100%; width: 100%; height: 100%", end: "top: 0" },
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
		const initialDirection = directions[0];
		style.textContent = `
			.card:nth-child(${index + 1})::before {
			${initialDirection.start}
			}
			.card:nth-child(${index + 1}):hover::before {
			${initialDirection.end}
			}
			`;

		// Update direction on hover
		element.addEventListener("mouseenter", () => {
			const direction = directions[Math.floor(Math.random() * directions.length)];
			style.textContent = `
				.card:nth-child(${index + 1})::before {
				${direction.start}
				}
				.card:nth-child(${index + 1}):hover::before {
				${direction.end}
				}
				`;
		});
	});
}
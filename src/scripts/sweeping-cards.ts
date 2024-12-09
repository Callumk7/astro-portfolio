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
		const initialDirection =
			directions[Math.floor(Math.random() * directions.length)];
		style.textContent = `
			.card:nth-child(${index + 1})::before {
			${initialDirection.start}
			transform: translateX(-100%);
			}
			.card:nth-child(${index + 1}):hover::before {
			${initialDirection.end}
			transform: translateX(0);
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

export function sweepStyles() {
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

	// Select all cards instead of just one
	const cards = document.querySelectorAll("[data-bento-card]");

	cards.forEach((card, index) => {
		// Create a unique style element for each card
		const style = document.createElement("style");
		document.head.appendChild(style);

		// Add a unique identifier to each card
		const uniqueClass = `card-${index}`;
		card.classList.add(uniqueClass);

		const initDirection = directions[Math.floor(Math.random() * directions.length)];
		style.textContent = `
        .${uniqueClass}::before {
            ${initDirection.start}
            transform: translateX(-100%);
        }
        .${uniqueClass}:hover::before {
            ${initDirection.end}
            transform: translateX(0);
        }
        `;

		card.addEventListener("mouseenter", ((e: MouseEvent) => {
			const elementRect = card.getBoundingClientRect();
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
            .${uniqueClass}::before {
                ${direction!.start}
            }
            .${uniqueClass}:hover::before {
                ${direction!.end}
            }
            `;
		}) as EventListener);
	});
}

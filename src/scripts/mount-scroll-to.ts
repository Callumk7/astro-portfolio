export function mountScrollTo() {
	document.addEventListener("DOMContentLoaded", () => {
		const scrollCards = document.querySelectorAll("[data-scroll-to]");
		for (const card of scrollCards) {
			card.addEventListener("click", (e) => {
				e.preventDefault();
				const targetId = card.getAttribute("data-scroll-to");
				const targetElement = document.getElementById(targetId!);

				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			});
		}
	});
}

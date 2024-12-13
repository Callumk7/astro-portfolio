import { createSignal, type Component, type JSXElement } from "solid-js";
import styles from "./spotlight.module.css";

interface SpotlightCardProps {
	children: JSXElement;
	interactive?: boolean;
}

export const SpotlightCard: Component<SpotlightCardProps> = (props) => {
	const [position, setPosition] = createSignal({ x: 0, y: 0 });
	let cardRef: HTMLDivElement | undefined;

	const handleMouseMove = (e: MouseEvent) => {
		if (!cardRef || !props.interactive) return;

		const rect = cardRef.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setPosition({ x, y });
	};

	return (
		<div
			ref={cardRef}
			class={styles.card}
			onMouseMove={handleMouseMove}
			data-interactive={props.interactive}
		>
			{props.interactive && (
				<div
					class={styles.spotlight}
					style={{
						"--x": `${position().x}px`,
						"--y": `${position().y}px`,
					}}
				/>
			)}
			<div class={styles.content}>{props.children}</div>
		</div>
	);
};

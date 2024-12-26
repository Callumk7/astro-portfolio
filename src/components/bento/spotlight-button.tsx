import { createSignal, type Component, type JSXElement } from "solid-js";
import styles from "./spotlight.module.css";

interface SpotlightButtonProps {
	href?: string;
	children: JSXElement;
	interactive?: boolean;
	size?: "tall" | "wide" | "large";
}

export const SpotlightButton: Component<SpotlightButtonProps> = (props) => {
	const [position, setPosition] = createSignal({ x: 0, y: 0 });
	let cardRef: HTMLAnchorElement | undefined;

	const handleMouseMove = (e: MouseEvent) => {
		if (!cardRef || !props.interactive) return;

		const rect = cardRef.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setPosition({ x, y });
	};

	return (
		<a
			href={props.href}
			ref={cardRef}
			class={`${styles.button} fade-in`}
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
			<p>{props.children}</p>
		</a>
	);
};

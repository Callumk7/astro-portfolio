import { createSignal, type Component, type JSXElement } from "solid-js";
import styles from "./spotlight.module.css";

const cx = (...classes: (string | false)[]) => classes.filter(Boolean).join(" ");

interface SpotlightCardProps {
	title: string;
	href?: string;
	children: JSXElement;
	interactive?: boolean;
	size?: "tall" | "wide" | "large";
}

export const SpotlightCard: Component<SpotlightCardProps> = (props) => {
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
			class={cx(
				styles.card,
				props.size === "large" && styles.large,
				props.size === "wide" && styles.wide,
				props.size === "tall" && styles.tall,
				"fade-in"
			)}
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
			<div class={styles.content}>
				<h2>{props.title}</h2>
				<p>{props.children}</p>
			</div>
		</a>
	);
};

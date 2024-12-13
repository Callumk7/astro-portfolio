import { createSignal, type Component, type ParentProps } from "solid-js";

import styles from "./bento.module.css";
import clsx from "clsx";

type EntryPoint = "top" | "bottom" | "left" | "right" | null;

interface BentoCardProps {
	title: string;
	href?: string;
	tall?: boolean;
	wide?: boolean;
	large?: boolean;
}

export const BentoCard: Component<ParentProps<BentoCardProps>> = (props) => {
	const [entryPoint, setEntryPoint] = createSignal<EntryPoint>("left");
	const [exitPoint, setExitPoint] = createSignal<EntryPoint>(null);

	const handleMouseEnter = (e: MouseEvent & { currentTarget: HTMLElement }) => {
		console.log("mouse has entered the div");
		const elementRect = e.currentTarget.getBoundingClientRect();
		const dT = Math.abs(e.clientY - elementRect.top);
		const dB = Math.abs(e.clientY - elementRect.bottom);
		const dL = Math.abs(e.clientX - elementRect.left);
		const dR = Math.abs(e.clientX - elementRect.right);

		const minDistance = Math.min(dT, dB, dL, dR);

		if (minDistance === dT) setEntryPoint("top");
		if (minDistance === dB) setEntryPoint("bottom");
		if (minDistance === dL) setEntryPoint("left");
		if (minDistance === dR) setEntryPoint("right");

		setExitPoint(null);

		console.log(entryPoint());
	};

	const handleCardLeave = (e: MouseEvent & { currentTarget: HTMLElement }) => {
		const elementRect = e.currentTarget.getBoundingClientRect();
		const dT = Math.abs(e.clientY - elementRect.top);
		const dB = Math.abs(e.clientY - elementRect.bottom);
		const dL = Math.abs(e.clientX - elementRect.left);
		const dR = Math.abs(e.clientX - elementRect.right);

		const minDistance = Math.min(dT, dB, dL, dR);

		if (minDistance === dT) setExitPoint("top");
		if (minDistance === dB) setExitPoint("bottom");
		if (minDistance === dL) setExitPoint("left");
		if (minDistance === dR) setExitPoint("right");
	};

	return (
		<div class={styles.mouseBorder} onMouseEnter={handleMouseEnter}>
			<a
				href={props.href}
				class={clsx(
					"card",
					styles.card,
					`${props.large ? styles.large : ""} ${props.wide ? styles.wide : ""} ${props.tall ? styles.tall : ""}}`,
				)}
				data-entry={entryPoint()}
				data-exit={exitPoint()}
				onMouseLeave={handleCardLeave}
			>
				<h2 class={styles.title}>{props.title}</h2>
				<p class={styles.body}>{props.children}</p>
			</a>
		</div>
	);
};

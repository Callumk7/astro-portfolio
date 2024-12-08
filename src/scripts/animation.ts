import { inView, animate, stagger } from "motion";

inView("#exp-left", (info) => {
	animate(info.target.querySelectorAll("div"), { opacity: 1, y: [50, 0] }, { delay: stagger(0.05, {startDelay: 1}) });
});

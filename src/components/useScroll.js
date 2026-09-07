import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, useReducedMotion } from "framer-motion";

/**
 * Whether a component should skip its entrance animation and start finished.
 *
 * Framer Motion drives these in JavaScript, so the reduced-motion rule in
 * GlobalStyle cannot reach them. When the visitor asks for less movement we
 * show the section immediately instead of animating it in.
 */
export const useMotionStart = () => {
	const reduceMotion = useReducedMotion();
	return reduceMotion ? "show" : "hidden";
};

/**
 * Reveals a section once it starts entering the viewport.
 *
 * threshold stays at 0 so tall sections (the experience log runs past 2000px)
 * trigger on first contact rather than waiting to be a fifth visible, and the
 * negative bottom margin holds the reveal until the section is properly on
 * screen. Anyone scrolling quickly still lands on rendered content.
 *
 * Returns the `initial` variant alongside the ref and controls, so callers get
 * the reduced-motion handling without repeating it.
 */
export const useScroll = () => {
	const controls = useAnimation();
	const start = useMotionStart();
	const skip = start === "show";

	const [element, view] = useInView({
		threshold: 0,
		triggerOnce: true,
		rootMargin: "0px 0px -12% 0px",
	});

	useEffect(() => {
		if (skip || view) {
			controls.start("show");
		}
	}, [view, controls, skip]);

	return [element, controls, start];
};

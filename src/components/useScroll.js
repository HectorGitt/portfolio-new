import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, useReducedMotion } from "framer-motion";
import { isPrerendering, isHydratedFromStatic } from "../prerender";

/**
 * Whether a component should skip its entrance animation and start finished.
 *
 * Three cases, one answer:
 *  - the visitor asked for reduced motion;
 *  - react-snap is capturing static HTML, where an entrance state would be
 *    serialised as permanently invisible content;
 *  - the visitor loaded that static HTML, which has already painted.
 *
 * That last case is a deliberate trade. Production builds are prerendered, so
 * the scroll reveals do not play there: the page arrives fully readable instead
 * of animating in. Replaying entrances after hydration would blank out content
 * the reader can already see, and for a CV that someone opens to skim, being
 * legible immediately beats being animated. The reveals still run on the dev
 * server and on any build without the prerender step.
 */
export const useMotionStart = () => {
	const reduceMotion = useReducedMotion();
	return reduceMotion || isPrerendering || isHydratedFromStatic()
		? "show"
		: "hidden";
};

/**
 * Reveals a section once it starts entering the viewport.
 *
 * threshold stays at 0 so tall sections (the experience log runs past 2000px)
 * trigger on first contact rather than waiting to be a fifth visible, and the
 * negative bottom margin holds the reveal until the section is properly on
 * screen. Anyone scrolling quickly still lands on rendered content.
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

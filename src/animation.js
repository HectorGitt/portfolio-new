/**
 * Motion is deliberately quiet: the page settles into place the way a plot
 * finishes, and nothing moves far. Long travel and springy overshoot fight the
 * drafting language, so neither appears here.
 *
 * Page transitions deliberately do NOT animate opacity. A visitor who lands
 * mid-transition, or whose browser throttles animation frames, must never be
 * left looking at a half-faded page — this is a CV, and it has one job.
 * Opacity is only used for section reveals, which start from a known state.
 */

const ease = [0.22, 0.61, 0.36, 1];

/** Mount transition for a page. There is no exit variant: routes are not
 *  wrapped in AnimatePresence, so nothing animates out. See App.js. */
export const pageAnime = {
	hidden: { y: 10 },
	show: {
		y: 0,
		transition: { duration: 0.4, ease },
	},
};

export const fade = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.5, ease } },
};

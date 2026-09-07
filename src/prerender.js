/**
 * Prerendering state, shared between the entry point and the motion hooks.
 *
 * Two distinct moments matter:
 *
 * `isPrerendering` — react-snap is driving a headless browser to capture the
 * static HTML. Entrance states must not be captured, or every section ships
 * frozen at opacity 0.
 *
 * `isHydratedFromStatic` — a real visitor loaded that static HTML, which has
 * already painted. Replaying an entrance animation now would blank out content
 * the reader can already see, so anything on screen stays put.
 */

export const isPrerendering =
	typeof navigator !== "undefined" && /ReactSnap/i.test(navigator.userAgent);

let hydratedFromStatic = false;

/** Called by the entry point when #root already contained prerendered markup. */
export const markHydratedFromStatic = () => {
	hydratedFromStatic = true;
};

export const isHydratedFromStatic = () => hydratedFromStatic;

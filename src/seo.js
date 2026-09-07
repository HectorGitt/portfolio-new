/**
 * Canonical origin. Every other host (apex, http, non-www) redirects here, so
 * this is the one URL that should appear in canonical tags, og:url and the
 * sitemap. Change it here if the domain ever moves.
 */
export const SITE_URL = "https://www.deniyi.link";

export const SITE_NAME = "Olaitan Adeniyi";

/** Routes worth listing in the sitemap, in the order they matter. */
export const ROUTES = ["/", "/engineering", "/research", "/contact"];

export const absolute = (path = "/") =>
	`${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

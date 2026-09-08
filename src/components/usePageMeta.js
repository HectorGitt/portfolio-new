import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_NAME, absolute } from "../seo";

/**
 * Sets the title, description, canonical URL and Open Graph tags per route.
 *
 * Pages here get shared on their own — the research statement goes to
 * supervisors in cold emails — so each needs to describe itself rather than
 * the site as a whole.
 *
 * The canonical tag is written per route rather than hard-coded in index.html:
 * a static canonical pointing at "/" would tell search engines that every other
 * page is a duplicate of the homepage, which is worse than having none.
 *
 * Caveat: this runs client-side. Crawlers that execute JavaScript (Google)
 * see it; the ones that do not (LinkedIn, Slack, X, Bing, most AI crawlers)
 * still read the static tags in public/index.html. Prerendering is the fix.
 */

const setMeta = (selector, attr, value) => {
	let tag = document.head.querySelector(selector);
	if (!tag) {
		tag = document.createElement("meta");
		const [key, val] = selector.replace(/^meta\[|\]$/g, "").split("=");
		tag.setAttribute(key, val.replace(/["']/g, ""));
		document.head.appendChild(tag);
	}
	tag.setAttribute(attr, value);
};

export const usePageMeta = (title, description) => {
	const { pathname } = useLocation();

	useEffect(() => {
		const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
		const url = absolute(pathname);

		document.title = fullTitle;

		if (description) {
			setMeta('meta[name="description"]', "content", description);
			setMeta('meta[property="og:description"]', "content", description);
		}
		setMeta('meta[property="og:title"]', "content", fullTitle);
		setMeta('meta[property="og:url"]', "content", url);

		let canonical = document.head.querySelector('link[rel="canonical"]');
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.setAttribute("rel", "canonical");
			document.head.appendChild(canonical);
		}
		canonical.setAttribute("href", url);
	}, [title, description, pathname]);
};

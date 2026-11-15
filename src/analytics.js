/**
 * Cloudflare Web Analytics: cookieless, so no consent banner is needed.
 *
 * The beacon token comes from REACT_APP_CF_BEACON_TOKEN, set in the Netlify
 * environment (Site configuration → Environment variables). Without it, as in
 * local dev, nothing loads. It is also skipped while react-snap prerenders,
 * otherwise the script tag would be baked into every static page and the
 * build's own crawl would be counted as visits.
 */
const token = process.env.REACT_APP_CF_BEACON_TOKEN;

export const startAnalytics = () => {
	if (!token || navigator.userAgent === "ReactSnap") return;
	if (document.querySelector("script[data-cf-beacon]")) return;

	const script = document.createElement("script");
	script.defer = true;
	script.src = "https://static.cloudflareinsights.com/beacon.min.js";
	script.setAttribute("data-cf-beacon", JSON.stringify({ token, spa: true }));
	document.body.appendChild(script);
};

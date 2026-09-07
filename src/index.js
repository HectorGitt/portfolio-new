import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { markHydratedFromStatic } from "./prerender";

const root = document.getElementById("root");

const tree = (
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

/**
 * react-snap writes real markup into #root at build time, so in the browser we
 * hydrate that instead of throwing it away and re-rendering. If the element is
 * empty (dev server, or a build without the prerender step) we render normally.
 */
if (root.hasChildNodes()) {
	// Flag this before rendering: the motion hooks read it during the first
	// render to decide whether anything should animate in.
	markHydratedFromStatic();
	hydrate(tree, root);
} else {
	render(tree, root);
}

reportWebVitals();

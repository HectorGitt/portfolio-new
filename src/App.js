import { Switch, Route } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import Overview from "./pages/Overview";
import Engineering from "./pages/Engineering";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

/**
 * Routes render directly, without an AnimatePresence page transition.
 *
 * `exitBeforeEnter` held the next route back until the outgoing one finished
 * animating out, which made navigation depend on animation frames actually
 * running. In a backgrounded tab — or anywhere the browser throttles
 * requestAnimationFrame — the exit never completes and the new page never
 * mounts, leaving the URL changed and the old page on screen.
 *
 * Production builds are prerendered, so pages already skip their entrance
 * animation and the transition was doing nothing visible. Navigation should
 * not be able to hang for the sake of an animation nobody sees.
 */
function App() {
	return (
		<>
			<GlobalStyle />
			<ScrollTop />
			<Nav />
			<Switch>
				<Route path="/" exact component={Overview} />
				<Route path="/engineering" exact component={Engineering} />
				<Route path="/research" exact component={Research} />
				<Route path="/contact" exact component={Contact} />
				<Route component={Overview} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;

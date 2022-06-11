//import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

//import globalsyles
import GlobalStyle from './components/GlobalStyle';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';

//import component
import Nav from './components/Nav';

//animation
import { AnimatePresence } from 'framer-motion';
//scrollTop
import ScrollTop from './components/ScrollTop';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
      <ScrollTop />
    </div>
  );
}

export default App;

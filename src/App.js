import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BasePage from "./Components/BasePage";
import Home from "./Pages/Home";
import "@fontsource/inter/300.css";
import PageNotFound from "./Pages/PageNotFound";
import Projects from "./Pages/Projects";
import PageInDevelopment from "./Pages/PageInDevelopment";

function App() {
  const location = useLocation();
  return (
      <div className="App">
          <AnimatePresence exitBeforeEnter>
            <BasePage key={location.pathname} location={location}>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<PageInDevelopment />} />
                <Route path="*" element={<PageNotFound/>} />
              </Routes>
            </BasePage>
          </AnimatePresence>
      </div>
  );
}

export default App;

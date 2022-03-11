import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BasePage from "./Components/BasePage";
import Home from "./Pages/Home";
import "@fontsource/inter/300.css";

function App() {
  const location = useLocation();
  return (
      <div className="App">
          <AnimatePresence exitBeforeEnter>
            <BasePage key={location.pathname} location={location}>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<div>projects</div>} />
                <Route path="/blog" element={<div>blog</div>} />
                <Route path="*" element={<div>none</div>} />
              </Routes>
            </BasePage>
          </AnimatePresence>
      </div>
  );
}

export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BasePage from "./Components/BasePage";
import Home from "./Pages/Home";
import "@fontsource/inter/300.css";
import PageNotFound from "./Pages/PageNotFound";
import InDevelopment from "./Pages/InDevelopment";

function App() {
  const location = useLocation();
  return (
      <div className="App">
          <AnimatePresence exitBeforeEnter>
            <BasePage key={location.pathname} location={location}>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<div>projects</div>} />
                <Route path="/blog" element={<InDevelopment />} />
                <Route path="*" element={<PageNotFound/>} />
              </Routes>
            </BasePage>
          </AnimatePresence>
      </div>
  );
}

export default App;

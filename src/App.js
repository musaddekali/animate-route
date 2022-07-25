import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";

const frutes = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🥭", label: "Mango" },
  { icon: "🥂", label: "Champers" },
];

function App() {
  const location = useLocation();

  const routeAnimateVariants = {
    exit: {
      x: -1000,
    },
    transition: {
      transition: { duration: 0.7 },
    },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter initial="false">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home frutes={frutes} variants={routeAnimateVariants} />}
            />
            <Route
              path="about"
              element={<About variants={routeAnimateVariants} />}
            />
            <Route
              path="portfolio"
              element={<Portfolio variants={routeAnimateVariants} />}
            />
            <Route
              path="contact"
              element={<Contact variants={routeAnimateVariants} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./Home";
import NavBar from "./Header/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "./Footer/footer";
import Aboutus from "./Aboutus";
import Menu from "./Menu";
import Blogus from "./Blogus";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import NotFound from "./NotFound";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.22, ease: "easeIn" } },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-transition"
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><Aboutus /></AnimatedPage>} />
            <Route path="/menu" element={<AnimatedPage><Menu /></AnimatedPage>} />
            <Route path="/blog" element={<AnimatedPage><Blogus /></AnimatedPage>} />
            <Route path="/blog-details" element={<AnimatedPage><BlogDetails /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;

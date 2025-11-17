import "./App.css";
import Home from "./Home";
import NavBar from "./Header/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/footer";
import Aboutus from "./Aboutus";
import Menu from "./Menu";
import Blogus from "./Blogus";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/menu" element={<Menu />} />
          {/* Routes Blog */}
          <Route path="/blog" element={<Blogus />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import DesignService from "./components/service/DesignService";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Portfolio from "./pages/PortFolio";
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Layout />} />
              <Route index element={<Home/>}/>
              <Route path="/about-us" element={<About/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/service/designservice" element={<DesignService/>} />
              <Route path="/contact-us" element={<Contact/>} />
              <Route path="/career" element={<Career/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

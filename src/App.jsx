import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Perfomance from "./components/Perfomance";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Perfomance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;

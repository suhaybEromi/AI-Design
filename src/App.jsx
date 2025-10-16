import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CustomerComments from "./components/CustomerComments";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="text-white bg-linear-to-b from-purple-950 to-slate-950 min-h-screen overflow-x-hidden">
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-pulse w-40 h-40">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-linear-to-b from-purple-950 to-slate-950 min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Features />
        <Pricing />
        <CustomerComments />
        <Contact />
        <Blog />
        <Footer />

        <br />
        <br />
        <br />
      </BrowserRouter>
    </div>
  );
}

export default App;

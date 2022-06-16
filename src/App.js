import "./App.css";
// import { Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Tools from "./pages/tools";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

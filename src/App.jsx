import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

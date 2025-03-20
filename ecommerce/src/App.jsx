import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Electronic from "./pages/Electronic";
import MyOrder from "./pages/Myorders";
import MyAccount from "./pages/Myaccount";
import Cloths from "./pages/Cloths";

function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/cloths" element={<Cloths />} />



        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

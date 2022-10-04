import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import Product from "./screens/Product";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<RegisterScreen />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

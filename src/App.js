import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import Product from "./screens/Product";
import { Routes, Route } from "react-router-dom";
import UserLoginRegisterScreen from "./screens/UserLoginRegisterScreen";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<UserLoginRegisterScreen />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Productspage from "./pages/Productspage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSinglePage from "./pages/ProductSinglePage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/PageNotFound";
import FeaturePage from "./components/FeaturePage";
import { AnimatePresence } from "framer-motion";
import SingleFilterProduct from "./components/SingleFilterProduct";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <AnimatePresence>
          <Routes >
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/products" element={<Productspage />}></Route>
            <Route path="/product/:id" element={<ProductSinglePage />} />
            <Route path="/feature" element={<FeaturePage />} />
            <Route path="/filter/:title" element={<SingleFilterProduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

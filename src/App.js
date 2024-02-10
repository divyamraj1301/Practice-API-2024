import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactComponent as Logo } from "./logo.svg"; // Importing the logo file
import { ProductProvider } from "./context/productContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <ChakraProvider>
      <ProductProvider>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </Provider>
      </ProductProvider>
    </ChakraProvider>
  );
}

export default App;

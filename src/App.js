import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import List from "./components/List";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from './pages/Register';

// import Product from './components/Product';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          {/* <Route exact path="/product/:id" element={ <Product/> } /> */}
          <Route exact path="/list" element={ <List/> } />
          <Route exact path="/about" element={ <About/> } />
          <Route exact path="/contact" element={ <Contact/> } />
          <Route exact path="/login" element={ <Login/> } />
          <Route exact path="/register" element={ <Register/> } />
        </Routes>
      </Router>
    );
  }
}

export default App;

import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./utils/srollToTop";
import PriceListPage from "./pages/PriceListPage";
import Services from "./pages/Services";
import Masters from "./pages/Masters";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceForm from "./pages/ServiceForm";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
		    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<PriceListPage />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/form/:masterId" element={<ServiceForm />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

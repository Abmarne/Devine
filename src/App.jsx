
import NavbarElement from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Games from "./pages/games";
import Connect from "./pages/connect";

function App() {
    return (
        <Router>
            <NavbarElement />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

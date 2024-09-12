import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about-us" element={<AboutUsPage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>


        </Routes>

      </BrowserRouter>

  );
}

export default App;

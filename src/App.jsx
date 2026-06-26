import { Routes, Route } from "react-router-dom";
import HeaderMain from './components/header/HeaderMain';
import Homelayout from "./pages/Homelayout";
import EpisodesPage from "./pages/episodes/page"
import AboutPage from "./pages/about/page"
import ContactPage from "./pages/contact/page"
import HomePage from "./pages/page"

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Homelayout />} >
      <Route index element={<HomePage />} />
      <Route path="episodes" element={<EpisodesPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />

      
      
      </Route>
    </Routes>
  );
}

export default App;

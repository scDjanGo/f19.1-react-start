import { Routes, Route, Link } from "react-router-dom";
import HeaderMain from "./components/header/HeaderMain";
import Homelayout from "./pages/Homelayout";
import EpisodesPage from "./pages/episodes/page";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import HomePage from "./pages/page";
import EpisodesCurrentPage from "./pages/episodes/id/page";
import EpisodesLayout from "./pages/episodes/Layout";
import ReactSneakersLayout from "./pages/react-sneakers/ReactSneakersLayout";
import ReactSneakersProfile from "./pages/react-sneakers/profile/page";
import ReactSneakersFavorites from "./pages/react-sneakers/favorites/page";
import AxiosPage from "./pages/axios/page";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Homelayout />}>
        <Route index element={<HomePage />} />
        <Route path="episodes" element={<EpisodesLayout />}>
          <Route index element={<EpisodesPage />} />
          <Route path=":id" element={<EpisodesCurrentPage />} />
          <Route path="qwerty" element={<div>qwerty</div>} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="react-sneakers" element={<ReactSneakersLayout />}>
        <Route index element={<></>} />
        <Route path="profile" element={<ReactSneakersProfile />} />

        <Route path="favorites" element={<ReactSneakersFavorites />} />
      </Route>


      <Route path="/axios" element={<AxiosPage />} />

      <Route
        path="*"
        element={
          <div>
            Not found: 404
            <Link to={`/`}>Home page</Link>
          </div>
        }
      />

      <Route
        path="/error"
        element={
          <div>
            <p>something went wrong</p>
            <Link to={`/`}>Home page</Link>{" "}
          </div>
        }
      />
    </Routes>
  );
}

export default App;

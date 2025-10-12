import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";

import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./ui/ScrollToTop";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Promotions from "./pages/Promotions";
import Blog from "./pages/Blog";
import PrivateCertifications from "./pages/PrivateCertifications";
import PrivateBlog from "./pages/PrivateBlog";
import PrivateGallery from "./pages/PrivateGallery";
import PrivateHome from "./pages/PrivateHome";
import PageNotFound from "./pages/PageNotFound";

import Post from "./ui/Post";
import Photos from "./ui/Photos";
import Login from "./ui/Login";
import PrivateRoute from "./ui/PrivateRoute";
import PrivateLayout from "./ui/PrivateLayout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <AuthContextProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/o-mnie" element={<About />} />
            <Route path="/oferta" element={<Services />} />
            <Route path="/promocje" element={<Promotions />} />
            <Route path="/realizacje" element={<Gallery />} />
            <Route path="/realizacje/:galleryId" element={<Photos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<Post />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route
            path="/cms"
            element={
              <PrivateRoute>
                <PrivateLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<PrivateHome />} />{" "}
            <Route path="certyfikaty" element={<PrivateCertifications />} />
            <Route path="realizacje" element={<PrivateGallery />} />
            <Route path="blog" element={<PrivateBlog />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

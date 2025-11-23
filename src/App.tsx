import { lazy, Suspense } from "react";
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
import PageNotFound from "./pages/PageNotFound";

import Post from "./ui/Post";
import Photos from "./ui/Photos";
import Login from "./ui/Login";
import PrivateRoute from "./ui/PrivateRoute";
import Spinner from "./ui/Spinner";

const PrivateHome = lazy(() => import("./pages/PrivateHome"));
const PrivateCertifications = lazy(
  () => import("./pages/PrivateCertifications"),
);
const PrivateGallery = lazy(() => import("./pages/PrivateGallery"));
const PrivateBlog = lazy(() => import("./pages/PrivateBlog"));
const PrivateLayout = lazy(() => import("./ui/PrivateLayout"));

const LazyLoad = (Component: React.ComponentType) => (
  <Suspense fallback={<Spinner />}>
    <Component />
  </Suspense>
);

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
            element={<PrivateRoute>{LazyLoad(PrivateLayout)}</PrivateRoute>}
          >
            <Route index element={LazyLoad(PrivateHome)} />
            <Route
              path="certyfikaty"
              element={LazyLoad(PrivateCertifications)}
            />
            <Route path="realizacje" element={LazyLoad(PrivateGallery)} />
            <Route path="blog" element={LazyLoad(PrivateBlog)} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

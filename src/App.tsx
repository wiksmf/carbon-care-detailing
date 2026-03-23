import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";

import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./ui/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";

import PrivateRoute from "./ui/PrivateRoute";
import Spinner from "./ui/Spinner";

const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Services = lazy(() => import("./pages/Services"));
const Promotions = lazy(() => import("./pages/Promotions"));
const Blog = lazy(() => import("./pages/Blog"));
const Post = lazy(() => import("./ui/Post"));
const Photos = lazy(() => import("./ui/Photos"));
const Login = lazy(() => import("./ui/Login"));

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
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/o-mnie" element={LazyLoad(About)} />
          <Route path="/oferta" element={LazyLoad(Services)} />
          <Route path="/promocje" element={LazyLoad(Promotions)} />
          <Route path="/realizacje" element={LazyLoad(Gallery)} />
          <Route path="/realizacje/:galleryId" element={LazyLoad(Photos)} />
          <Route path="/blog" element={LazyLoad(Blog)} />
          <Route path="/blog/:postId" element={LazyLoad(Post)} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route element={<AuthContextProvider><Outlet /></AuthContextProvider>}>
          <Route path="/login" element={LazyLoad(Login)} />
          <Route
            path="/cms"
            element={<PrivateRoute>{LazyLoad(PrivateLayout)}</PrivateRoute>}
          >
            <Route index element={LazyLoad(PrivateHome)} />
            <Route path="certyfikaty" element={LazyLoad(PrivateCertifications)} />
            <Route path="realizacje" element={LazyLoad(PrivateGallery)} />
            <Route path="blog" element={LazyLoad(PrivateBlog)} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

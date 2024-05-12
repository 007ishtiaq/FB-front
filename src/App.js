import React, { useEffect, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { getWishlist } from "./functions/user";
// import axiosInstance from "./functions/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import NoNetModal from "./components/NoNetModal/NoNetModal";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import GoToTop from "./components/Scroll/GoToTop";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/nav/Header"));

const App = () => {
  const [noNetModalshow, setNoNetModalshow] = useState(false);

  const { noNetModal } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  useEffect(() => {
    noNetModal && setNoNetModalshow(true);
  }, [noNetModal]);

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (navigator.onLine) {
        setNoNetModalshow(false);
        dispatch({
          type: "SET_NETMODAL_VISIBLE",
          payload: false,
        });
      }
    };
    window.addEventListener("online", handleOnlineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);

  const handleRetry = async (e) => {
    // e.preventDefault();
  };

  return (
    <Suspense fallback={<div className="col text-center p-5">EC M</div>}>
      <SkeletonTheme baseColor="#d9d9d9" highlightColor="#bfbfbf">
        <Router>
          <NoNetModal
            classDisplay={`${noNetModalshow && "open-popup"}`}
            setNoNetModal={setNoNetModalshow}
            handleRetry={handleRetry}
          />
          <ScrollToTop />
          <Header />
          <Toaster />
          <GoToTop />
          <Switch>
            {/* common unprotected Routes */}

            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </SkeletonTheme>
    </Suspense>
  );
};

export default App;

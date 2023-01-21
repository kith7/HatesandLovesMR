import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

// import MoviesSearchBox from "./components/MoviesSearchBox";
import Layout from "./components/Layout/Layout";

import MoviesSearchPage from "./pages/MoviesSearchPage";
import LoadingSpinner from "./components/Layout/UI/LoadingSpinner";
import Dashboard from "./pages/Dashboard";
// import MostPopular from "./pages/MostPopular";
// import TopRated from "./pages/TopRated";
// import Upcoming from "./pages/Upcoming";

const Upcoming = lazy(() => import("./pages/Upcoming"));
const MostPopular = lazy(() => import("./pages/MostPopular"));
const TopRated = lazy(() => import("./pages/TopRated"));

function App() {
  return (
    <div className='container'>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MoviesSearchPage />} />
            <Route path='/upcoming' element={<Upcoming />} />
            <Route path='/top-rated' element={<TopRated />} />
            <Route path='/most-popular' element={<MostPopular />} />
            <Route path='/most-popular' element={<MostPopular />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

//create the home component
//create the search input with the buttn
//display the search
//  - fetch the data, store it in the state and pass the data
//add my reviews route

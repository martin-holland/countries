import React from "react";
import Home from "./components/Home";
import CountryList from "./components/CountryList";
import CountrySingle from "./components/CountrySingle";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Route index element={<Home />} />   ---  can also use index instead of path*/}
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:name" element={<RouteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

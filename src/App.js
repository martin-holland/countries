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
import Logowhite from "./assets/LogoWhite.svg";
import Footer from "./components/Footer";
import About from "./components/About";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <header>
          <img src={Logowhite} alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/countries">Countries</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="background">
          <img
            src="https://drive.google.com/uc?id=1a_0wilehGGVkEzY5TeLC8WCVL3w6aNcF"
            alt="background"
          />
        </div>
        <Routes>
          {/* <Route index element={<Home />} />   ---  can also use index instead of path*/}
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/countries/:name" element={<RouteWrapper />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

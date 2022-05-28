import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

export default function CommitFetcher() {
  return (
    <React.Fragment>
      <Router>
        <div>
          {/* TODO delete before submission*/}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/m3db/m3">m3db/m3 commits</Link>
            </li>
            <li>
              <Link to="/some/random/url">Not existing URL</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/m3db/m3" element={<DoesNotExist />} />
            <Route path="*" element={<DoesNotExist />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

function FetchControls() {}

function Home() {
  return <h3>Home</h3>;
}

function DoesNotExist() {
  const location = useLocation();

  return (
    <div>
      <h3>
        <code>{location.pathname}</code> Doesn't exist
      </h3>
      <p> Try again</p>
      <Home />
    </div>
  );
}

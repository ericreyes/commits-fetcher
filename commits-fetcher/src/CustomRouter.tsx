import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,

  useParams,
} from "react-router-dom";

export default function CustomRouter() {
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
            <Route path="/" element={null} />
            <Route path="/m3db/m3" element={<DoesNotExist />} />
            <Route path="*" element={<DoesNotExist />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

function DoesNotExist() {
  const params = useParams();

  return (
    <div>
      <h4 className="error-container">
        The given search parameters don't exist, please try again
      </h4>
      <p> Try again</p>
    </div>
  );
}

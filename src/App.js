import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router } from "components/Router";
// import Dynamic from "containers/Dynamic";
import "app.css";

// addPrefetchExcludes(["dynamic"]);

function App() {
  // let styleActive = ({ isCurrent }) => {
  //   return {
  //     style: {
  //       background: isCurrent ? "red" : null
  //     }
  //   };
  // }

  return (
    <Root>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/activity">Activity</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            {/* <Dynamic path="dynamic" /> */}
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;

import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router } from "components/Router";
import GearSpinner from "./components/gearSpinner";
import "app.css";

function App() {
  let styleActive = ({ isCurrent }) => {
    return {
      style: {
        'border-bottom': isCurrent ? "3px solid white" : null
      }
    };
  };

  return (
    <Root>
      <nav className="navbar">
        <Link getProps={styleActive} to="/">
          Home
        </Link>
        <Link getProps={styleActive} to="/activity">
          Activity
        </Link>
        <Link getProps={styleActive} to="/projects">
          Projects
        </Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<GearSpinner />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;

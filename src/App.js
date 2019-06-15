import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";

import Dynamic from "containers/Dynamic";
import ActivityFeed from "components/ActivityFeed";
import "app.css";

addPrefetchExcludes(["dynamic", "activity"]);

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

        <a href="#intro">Home</a>
        <a href="#activity">Activity</a>

        {/* <Link to="/" getProps={styleActive} >Home</Link>
       <Link to="/about" getProps={styleActive}>About</Link> */}
        {/* <Link to="/blog" getProps={styleActive}>Blog</Link> */}
        {/* <Link to="dynamic" getProps={styleActive}>Dynamic</Link>
        <Link to="activity" getProps={styleActive}>Activity</Link> */}
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <ActivityFeed path="activity" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;

import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

const PageOne = () => (
  <div>
    PageOne
    <Link to="/pagetwo">navigate to Page two</Link>
  </div>
);

const PageTwo = () => (
  <div>
    PageTwo
    <button>Click Me!</button>
    <Link to="/">navigate to Page one</Link>
  </div>
);

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => (
  <div>
    PageOne
    BAD!!!
    <a href="/pagetwo">navigate to Page two</a>
  </div>
);

const PageTwo = () => (
  <div>
    PageTwo
    <button>Click Me!</button>
    BAD!!!
    <a href="/">navigate to Page one</a>
  </div>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
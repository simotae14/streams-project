import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => (<div>PageOne</div>);

const PageTwo = () => (
  <div>
    PageTwo
    <button>Click Me!</button>
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
import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Todo } from 'containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Todo} />
  </Route>
);

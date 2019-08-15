/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env browser */
import test from 'tape-cup';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect} from '../browser';
import {createBrowserHistory} from 'history';

test('test Redirect', t => {
  const root = document.createElement('div');
  const Hello = () => <div>Hello</div>;
  const Moved = () => <Redirect to="/hello">Hi</Redirect>;
  const history = createBrowserHistory()
  history.replace('/')
  const el = (
    <Router history={history}>
      <div>
        <Route path="/" component={Moved} />
        <Route path="/hello" component={Hello} />
      </div>
    </Router>
  );
  ReactDOM.render(el, root);
  ReactDOM.render(el, root); // trigger redirect
  t.ok(/Hello/.test(root.innerHTML), `matches ${root.innerHTML}`);
  t.equal(window.location.pathname, '/hello');
  history.push('/') // reset the url back to "/"
  t.end();
});

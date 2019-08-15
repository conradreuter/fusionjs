/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import * as React from 'react';
import PropTypes from 'prop-types';

import type {LocationShapeType, RedirectType} from '../types.js';
import {useRouter} from './useRouter';

type PropsType = {|
  to: string | LocationShapeType,
  push?: boolean,
  from?: string,
  exact?: boolean,
  strict?: boolean,
  code?: number | string,
  children?: React.Node,
|};
export function Redirect(props: PropsType) {
  const {history, staticContext} = useRouter();
  if (staticContext) perform();
  React.useEffect(() => {
    if (!staticContext) perform();
  }, []);
  return null;
  
  function perform() {
    const {push = false, to, code = 307} = props;

    if (__NODE__ && staticContext) {
      staticContext.setCode(parseInt(code, 10));
      staticContext.redirect(to);
      return;
    }

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  }
}

// Sanity type checking
(Redirect: RedirectType);

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {useContext} from 'react';
import {__RouterContext as RouterContext} from 'react-router-dom';

import type {ContextRouterType} from '../types.js';

export function useRouter(): ContextRouterType {
  const router = useContext(RouterContext)
  if (!router) {
    throw new Error('Router not found in React context')
  }
  return router
}


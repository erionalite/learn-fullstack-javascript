import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

export const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return ReactDOMServer.renderToString(
        <App initialData={resp.data} />
      );
    });
export default serverRender;

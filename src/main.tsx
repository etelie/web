import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '~/index.css';
import App from '~/app';
import store from '~/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);

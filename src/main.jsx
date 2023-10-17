import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Mainrouter from './MainRouter.jsx';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store.js';

import './main.css'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Mainrouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

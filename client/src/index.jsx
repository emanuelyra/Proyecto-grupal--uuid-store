import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM directamente desde 'react-dom'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.render( // Utiliza ReactDOM.render en lugar de ReactDOM.createRoot().render()
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter warning={false}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
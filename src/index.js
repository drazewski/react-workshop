import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore();

ReactDOM.render(
<Provider store={store}>
  <AppRouter />
</Provider>, 
document.getElementById('root'));

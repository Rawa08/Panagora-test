import "./index.scss";

import LogoAndNav from  './components/LogoAndNav';
import Products from  './components/ProductList';

LogoAndNav();

const appContainer = document.querySelector('#app')

appContainer.appendChild(Products())
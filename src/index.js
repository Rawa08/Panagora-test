import "./index.scss";


import LogoAndNav from  './components/LogoAndNav';
import Products from  './components/ProductList';


//Attaching Logo And Nav to Landing page
LogoAndNav();

// app container for dynamic content
const appContainer = document.querySelector('#app');





appContainer.appendChild(Products())
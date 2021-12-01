import "./index.scss";


import LogoAndNav from  './components/LogoAndNav';
import Products from  './components/ProductList';
import About from './components/About';
import ProductPage from './components/ProductPage';


//Attaching Logo And Nav to Landing page
LogoAndNav();

// app container for dynamic content
const appContainer = document.querySelector('#app');





// appContainer.appendChild(Products())
// appContainer.appendChild(About())
const appendAsync = async () => appContainer.appendChild(await ProductPage(2));

appendAsync()


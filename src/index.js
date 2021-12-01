import "./index.scss";


import LogoAndNav from  './components/LogoAndNav';
import Products from  './components/ProductList';
import About from './components/About';
import ProductPage from './components/ProductPage';


//Attaching Logo And Nav to Landing page
LogoAndNav();

// app container for dynamic content
const appContainer = document.querySelector('#app');


//Append Component to dom based on Route

const navigate = async () => {

    // Lokking for product id
    const productPattern = /product\/\d+$/;
    
    if(productPattern.test(location.pathname)){
        const productId = location.pathname.match(productPattern)[0].slice(8);

        appContainer.innerHTML = '';
        return appContainer.appendChild(await ProductPage(productId))
    }
    else {
        if(location.pathname === '/about'){
            appContainer.innerHTML = '';
            return  appContainer.appendChild(About());
        }
        
        appContainer.innerHTML = '';
        return appContainer.appendChild(Products());

    }
}


window.addEventListener('popstate', navigate);

window.addEventListener("DOMContentLoaded", () => {

    
    navigate()

    document.body.addEventListener("click", e => {
        if(e.target.matches('[data-link]')){
          
            e.preventDefault();
            history.pushState(null, null,e.target.href);
            navigate()
        }
        else if (e.target.parentElement.matches('[data-link]')) {
            e.preventDefault();
            history.pushState(null, null,e.target.parentElement.href);

            navigate()
        }
        
    });

    document.body.addEventListener('submit', (e) => {
        e.preventDefault;
        history.pushState(null, null,'/');
        navigate()
    })
   

})
// appContainer.appendChild(Products())
// appContainer.appendChild(About())
// const appendAsync = async () => appContainer.appendChild(await ProductPage(2));

// appendAsync()


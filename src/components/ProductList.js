import data from '../data/products.json';
import ProductCard from './ProductCard';

const Products = () => {

    // Product Card container 
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';

    // Attch each product card to the container
    data.map(product => (productContainer.appendChild(ProductCard(product))));



    return productContainer;

}

export default Products;
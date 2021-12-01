

const Products = () => {
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';

    productContainer.innerHTML = 
    `
    <h4>P1</h4>
    <h4>P2</h4>
    <h4>P3</h4>
    <h4>P4</h4>
    <h4>P5</h4>
    <h4>P6</h4>
    `;


    return productContainer;

}

export default Products
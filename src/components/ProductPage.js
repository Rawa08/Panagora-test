import Form from './AddForm';

const ProductPage = async id => {

    // Get filename based on id
    const data = await fetch(`../data/${id}.json`);
    const productData = await data.json();

    
    const productContainer = document.createElement('div');
    productContainer.className = 'product-page_container';

    productContainer.innerHTML = 
    `
    <img src="${productData.image}" /> 
    <div class="product-info_container"> 
      <h1 class="heading-2">${productData.name}</h1>
      <p class="heading-3">${productData.price} ${productData.currency} </p>
      <p class="description">${productData.description}</p>
      ${Form(productData.id)}
    </div>
    `;





    return productContainer
};


export default ProductPage;
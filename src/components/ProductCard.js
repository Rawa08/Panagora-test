
const productCard = product => {

    const card = document.createElement('div');

    card.className = 'product-card';
  
    card.innerHTML = 
    ` <a href="/product/${product.id}" class="product-link" data-link > <img src=".${product.thumbnail}" alt="${product.name}"/>
    <h3 class="heading-3">${product.name}</h3>
    <p class="paragraph">${product.price} ${product.currency}</p>
    </a>
    `

    return card;

}


export default productCard

document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById("product-container");

            products.forEach(product => {
                
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="original-price">${product.originalPrice}</p>
                    <button>Đặt Mua</button>
                `;

                
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error loading the products:', error));
});

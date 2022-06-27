const products = document.getElementById("products")

data.map(product => {
    const card = document.createElement("div")
    card.innerHTML = `
        <div class="card">
            <img src=${product.src} alt=${product.name} />
            <h3>${product.name}</h3>
            <p>${product.price}</p>
    `;
    products.appendChild(card)
})
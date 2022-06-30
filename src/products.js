const products = document.getElementById("products")
const sortBtn = document.getElementById("sortBtn")

const renderProducts = (productList) => {
    products.innerHTML = ""
    productList.map((product) => {
        const card = document.createElement("div")
        const star = "⭐"
        card.innerHTML = `
            <div class="card">
                <img src=${product.src} alt=${product.name} />
                <h3>${product.name}</h3>
                <p>${star.repeat(product.rating)}</p>
                <p>${product.price}</p>
        `
        products.appendChild(card)
    })
}

renderProducts(data)

const sortByPrice = () => {
    const sortedByPrice = []

    data.map((duck) => [+duck.price.slice(1), duck.id])
        .sort((a, b) => a[0] - b[0])
        .map((priceDuck) => {
            data.map((dataDuck) => {
                if (dataDuck.id === priceDuck[1]) sortedByPrice.push(dataDuck)
            })
        })

    renderProducts(sortedByPrice)
}

sortBtn.addEventListener("click", () => sortByPrice())

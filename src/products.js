const products = document.getElementById("products")
const lowToHigh = document.getElementById("lowToHigh")
const highToLow = document.getElementById("highToLow")
const filterContainer = document.getElementById("filterContainer")

const renderProducts = (productList) => {
    filterContainer.style.display = "block"
    products.innerHTML = ""
    productList.map((product) => {
        const card = document.createElement("div")
        card.classList.add("card")
        const star = "⭐"

        card.innerHTML = `
                <div class="card__img">
                    <img src=${product.src} alt=${product.name} />
                </div>
                <h3>${product.name}</h3>
                <p>${star.repeat(product.rating)}</p>
                <p>${product.price}</p>
        `;

        products.appendChild(card)

        card.addEventListener("click", () => renderSingleProduct(product))
    })
}

renderProducts(data)

const renderSingleProduct = (product) => {
    filterContainer.style.display = "none"
    products.innerHTML = ""
    const card = document.createElement("div")
    const star = "⭐"

    card.innerHTML = `
        <div class="single-product">
            <img src=${product.src} alt=${product.name} />
            <div class="product-info">
                <div>
                    <h3>${product.name}</h3>
                    <p>${star.repeat(product.rating)}</p>
                    <p>${product.price}</p>
                    <p class="about-product">${product.about}</p>
                </div>
                <div>
                    <button id="addToBasket">Add to Basket</button>
                    <button id="backToSearch">Back to Search</button>
                </div>
                
            </div>
    `;

    products.appendChild(card)

    const backToSearch = document.getElementById("backToSearch")

    backToSearch.addEventListener("click", () => renderProducts(data))
    
}

const sortByPrice = (highOrLow) => {
    const sortedByPrice = []

    data.map((duck) => [+duck.price.slice(1), duck.id])
        .sort((a, b) => a[0] - b[0])
        .map((priceDuck) => {
            data.map((dataDuck) => {
                if (dataDuck.id === priceDuck[1]) sortedByPrice.push(dataDuck)
            })
        })

    if (highOrLow === "low") renderProducts(sortedByPrice)
    if (highOrLow === "high") renderProducts(sortedByPrice.reverse())
}

lowToHigh.addEventListener("click", () => sortByPrice("low"))
highToLow.addEventListener("click", () => sortByPrice("high"))

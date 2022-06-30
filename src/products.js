const products = document.getElementById("products")
const lowToHigh = document.getElementById("lowToHigh")
const highToLow = document.getElementById("highToLow")

const renderProducts = (productList) => {
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

const sortByPrice = (highOrLow) => {
    products.innerHTML = ""
    const sortedByPrice = []

    data.map(duck => [+duck.price.slice(1), duck.id])
        .sort((a, b) => a[0] - b[0])
        .map(priceDuck => {
            data.map(dataDuck => {
                if (dataDuck.id === priceDuck[1]) sortedByPrice.push(dataDuck)
            })
    })

    if (highOrLow === "low") renderProducts(sortedByPrice)
    if (highOrLow === "high") renderProducts(sortedByPrice.reverse())
}

lowToHigh.addEventListener("click", () => sortByPrice("low"))
highToLow.addEventListener("click", () => sortByPrice("high"))

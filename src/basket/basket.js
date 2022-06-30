const cart = []

const renderBasket = () => {
    const basket = document.querySelector(".basket__items")
    basket.innerHTML = ""
    cart.forEach((item) => {
        basket.innerHTML += `
      <div class="basket__item">
          <div class="basket__item-img">
              <img src="${item.src}" alt="${item.name}" />
          </div>
          <div class="basket__item-text">
              <p>${item.name}</p>
              <p>${item.price}</p>
          </div>
          <div class="basket__item-quantity">
              <p>${item.quantity}</p>
          </div>
      </div>
      `
    })
    renderTotal()
}

const renderTotal = () => {
    const totalP = document.querySelector(".basket__total-value")
    totalP.innerText = `£${getTotal()}`
}

const getTotal = () => {
    let total = 0
    cart.forEach((item) => {
        console.log("item", item)
        total += Number(item.price.substring(1)) * item.quantity
    })
    return total.toFixed(2)
}

const closeBasket = document.querySelector(".close-basket")
closeBasket.addEventListener("click", () => {
    const basket = document.querySelector(".basket")
    basket.classList.add("hidden")
})

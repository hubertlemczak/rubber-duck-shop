const basketBtn = document.querySelector(".nav__list-basket-btn")
const basket = document.querySelector(".basket")
basketBtn.addEventListener("click", () => {
    basket.classList.toggle("hidden")
    basketBtnIsClicked = !basketBtnIsClicked
})

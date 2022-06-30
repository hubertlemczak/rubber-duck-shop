

const darkModeBtn = document.querySelector(".dark-mode-toggle-btn")
let darkModeStorage = localStorage.getItem("DARKMODE")

const darkModeEnabled = () => {
    document.body.classList.add("dark-mode")
    darkModeStorage = localStorage.setItem("DARKMODE", "enabled")
}

const darkModeDisabled = () => {
    document.body.classList.remove("dark-mode")
    darkModeStorage = localStorage.setItem("DARKMODE", "disabled")
}

darkModeBtn.addEventListener("click", () => {
    darkModeStorage = localStorage.getItem("DARKMODE")
    if (darkModeStorage === "disabled" || !darkModeStorage) darkModeEnabled()
    else darkModeDisabled()
})

if (darkModeStorage === "enabled") darkModeEnabled()

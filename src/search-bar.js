const searchBarListener = () => {
    const headerSearchBar = document.querySelector("#duckSearch")
    headerSearchBar.addEventListener("input", () => {
        console.log(headerSearchBar.value)
        const dataCopy = [...data]
        const filteredData = dataCopy.filter((duck) =>
            duck.name.toLowerCase().includes(headerSearchBar.value.toLowerCase())
        )
        console.log(filteredData)
        renderProducts(filteredData)
    })
}

searchBarListener()

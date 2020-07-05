const buttonSearch = document.querySelector("#page-home .main .main__search")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .modal__header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})
const togglebutton = document.getElementById("toggle-button")
const togglebutton2 = document.getElementById("toggle-button2")
const sideBar = document.getElementById("side-bar")

togglebutton.addEventListener('click', () => {
    sideBar.classList.toggle("active")
})

togglebutton2.addEventListener('click', () => {
    sideBar.classList.toggle("active")
})

//Remove sidebar if click on the main content

const content = document.querySelector(".content")

content.addEventListener("click", () => {
    sideBar.classList.remove("active")
})
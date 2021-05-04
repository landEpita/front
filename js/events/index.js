// variable
let cours = "bla bla" //varaible qui peut etre changer
const prenom = "michel" // ne peux pas etre modifier

// function

//normal
function f1(){
    console.log("c est la func f1");
}

//function flécher
const f2 = (param1) => {
    console.log("c est la func f2: " + param1);
}

//Events

const btn = document.querySelector('#btn') //selection de element
const img = document.getElementById("img")

// on ajout un evenement a notre btn. on click , func
btn.addEventListener('click', () => {
    img.classList.toggle("show") // add: on ajoute la class show a notre image / remove: pour supprimer /  toggle: ajout si besoin ou supp
}) 

//************************************************************ */

const mouseEvent = document.querySelector(".mouseEvent")
const horizontal = document.querySelector(".horizontal")
const vertical = document.querySelector(".vertical")

mouseEvent.addEventListener('mousemove', (e) => { //event contient plein d'info comme x et y
    horizontal.innerHTML = e.x //innerHTML: ecrit du html dans le truc
    vertical.innerHTML = e.y

    mouseEvent.style.left = 100*(e.x/window.innerWidth) +"%" // innerwidth taille de l'ecan, faut concatener pour avoir %

    if (e.x > 500){
        document.body.style.filter = "blur(3px)"
    }
    else{
        document.body.style.filter = "none"
    }
})



document.querySelector("#input").addEventListener('input', (e)=>{
    console.log(e.target.value)
    vertical.innerHTML = e.target.value
})


//************************************ */

const theme = document.querySelectorAll(".theme")

theme.forEach((item) => { //on ajout un event sur tout les element qui on la class theme
    item.addEventListener("click", (e) => {
        document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme")
        console.log(e.target.id) //on recup les id
        switch(e.target.id)
        {
            case "dark":
                document.body.classList.add("darkTheme")
                break
            case "salmon":
                document.body.classList.add("salmonTheme")
                break
            case "yellow":
                document.body.classList.add("yellowTheme")
                break
            default:
                null
        }
    })
})
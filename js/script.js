let doc = document

let btn_grey = doc.querySelector(".buttonS")
let btn_white = doc.querySelector(".button")
let img = doc.querySelector("img")
let mac_text = doc.querySelector(".pmac")


let cena1 = doc.querySelector(".button1")
let cena2 = doc.querySelector(".button2")
let cena3 = doc.querySelector(".button3")
let cena4 = doc.querySelector(".button4")
let h2 = doc.querySelector(".h2")



console.log(btn_grey);

let img1 = "./css/img/mac1.png"
let img2 = "./css/img/mac2.png"

// btn_grey.onclick = ()=>{
//     img.setAttribute("src",img1)
// mac_text.innerHTML='Space Gray'

// }
// btn_white.onclick=()=>{
// img.src=img2
// mac_text.textContent ="White"
// }

let bacground = (btn1, btn2) => {
    btn1.classList.remove('buttonS')
    btn1.classList.add('button')
    btn2.classList.remove('button')
    btn2.classList.add('buttonS')
}

btn_grey.addEventListener('click', () => {
    img.setAttribute("src", img1)
    mac_text.innerHTML = 'Space Gray'
    bacground(btn_grey, btn_white)

})
btn_white.addEventListener('click', () => {
    img.src = img2
    mac_text.textContent = "White"
    bacground(btn_white, btn_grey)

})

// let bacground1 = (btn11, btn22) => {
//     btn11.classList.remove('button2')
//     btn11.classList.add('button1')
//     btn22.classList.remove('button1')
//     btn22.classList.add('button2')
// }




cena1.addEventListener('click', () => {
    h2.textContent = "$1,999"
    // bacground1=(cena1,cena2)
})
cena2.addEventListener('click', () => {
    h2.textContent = "$2,199"
    // bacground1=(cena2,cena1)

})
cena3.addEventListener('click', () => {
    h2.textContent = "$2,599"

})
cena4.addEventListener('click', () => {
    h2.textContent = "$3,199"
})

import Router from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/the-universe", "/pages/the-universe.html")
router.add(404, "/pages/404.html")


router.handle()

//para conseguir voltar clicando em voltar no navegador
window.onpopstate = () => router.handle()

window.route = () => router.route()

const menuItems = document.querySelectorAll('.menu-item')

//falta conseguir fazer o item do menu voltar pro anterior ao usar o 
//botão voltar e tamb[em ao escrever manualmente o endereço 
menuItems.forEach(element => {
  element.addEventListener('click', () => {
    menuItems.forEach(element => {
      element.classList.remove("selected")
    })
    console.log(document.querySelector("#app div").classList.value)
    switch(document.querySelector("#app div").classList.value) {
      case "home":
        element.classList.add("selected")
        break
      case "content exploration":
        element.classList.add("selected")
        break
      case "content universe":
        element.classList.add("selected")
        break
      default:
        break
    }
    
  })
})
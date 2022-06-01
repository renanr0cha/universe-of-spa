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
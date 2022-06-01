export default class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page 
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
    this.handle()
  
  }

  handle() {
    const { pathname } = window.location
  
    const route = this.routes[pathname] || this.routes[404]

   this.changeBg(pathname)
  
    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector("#app").innerHTML = html)
  }

  changeBg(path) {
    switch (path) {
      case "/":
        document.body.style.backgroundImage = "url(./images/mountains-universe-1.png"
        break
      case "/the-universe":
        document.body.style.backgroundImage = "url(./images/mountains-universe-2.png"
        break
      case "/exploration":
        document.body.style.backgroundImage = "url(./images/mountains-universe-3.png"
        break
      default:
        break
    }
    this.configBg()
  }

  configBg() {
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
}




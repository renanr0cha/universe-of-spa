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

    // document.querySelectorAll('.menu-item').forEach(element => {
    //   element.classList.remove("selected")
    //   element.addEventListener('click', () => {
    //     switch (route) {
    //       case "/page/home.html":
    //         element.classList.add("selected")
    //         break
    //       case "/page/the-universe.html":
    //         element.classList.add("selected")
    //         break
    //       case "/page/exploration.html":
    //         element.classList.add("selected")
    //         break
    //       default:
    //         break
    //     }
    // })

    // })
  
    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector("#app").innerHTML = html)
  }
}




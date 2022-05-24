const routes = {
  "/": "/pages/home.html",
  "/exploration": "/pages/exploration.html",
  "/the-universe": "/pages/the-universe.html",
  404: "/pages/404.html"
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)
  handle()
}

function handle() {
  const { pathname } = window.location
  console.log(pathname)
}
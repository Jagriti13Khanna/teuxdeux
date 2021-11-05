import home from "../pages/home";
import pageNotFound from "../pages/pageNotFound";
import toDoPage from "../pages/toDoPage";

const routes = {
    '/': home,
    '/toDoPage': toDoPage
}

const Router = function (pathname) {

    const isValidRoute = Object.keys(routes).find(key=> key === pathname)
    const app = document.querySelector('#app')
    app.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    if(isValidRoute === undefined){
        app.appendChild(pageNotFound())
    }
    else{
        app.appendChild(routes[isValidRoute]())
    }
}

export default Router
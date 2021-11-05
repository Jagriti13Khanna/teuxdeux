import logo from "../icon/logo";
import header from "../components/header";
import tagline from "../components/tagline"
import link from "../components/link";
import Router from "../routes/router";
import error from "../icon/error";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}


const pageNotFound = function(){
    const page = document.createElement('header')
    page.classList.add('pageHeader')
    const logo = logo()
    const h1 = header ('h1', 'TeuxDeux')    
    const p = tagline('Welcome to TeuxDeux App')
    const link = link('To Do App', '/toDoPage')
    link.addEventListener('click',requestNewPage)
    page.append(logo)
    page.append(h1)
    page.append(p)
    page.append(link)
    const indexPage = document.createElement('main')
    indexPage.classList.add('errorContent')
    const errorElm = error()
    indexPage.append(errorElm)
    indexPage.append(link)
    page.append(pageHeader)
    page.append(indexPage)
    return page
}

export default pageNotFound
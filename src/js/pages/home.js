
import header from "../components/cards/header";
import tagline from "../components/cards/tagline";
import link from "../components/cards/link";
import Router from "../routes/router";


const requestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}

const homePage = function(){
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
    
    return page
}

export default homePage
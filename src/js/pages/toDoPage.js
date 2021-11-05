import header from "../components/ui/header";
import tagline from "../components/ui/tagline";
import link from "../components/ui/link";
import Router from "../routes/router";
import todoList from "../components/cards/todoList";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}

const todoPage = function(){
    const div = document.createElement('div')
    div.classList.add('todoPage')
    const page = document.createElement('header')
    page.classList.add('pageHeader')
    const logo = logo()
    const h1 = header ('h1', 'TeuxDeux')    
    const p = tagline('Welcome to TeuxDeux App')
    page.append(logo)
    page.append(h1)
    page.append(p)
    div.append(page)
    const indexPage = document.createElement('main')
    div.append(main)    
    const category = todoList() 
    indexPage.append(category) 
    const pageFooter = document.createElement('footer')
    const footerDiv = document.createElement('div')
    footerDiv.classList.add('footerDiv')
    const link = link(addlogo,'/add','addbutton')
    link.addEventListener('click',onRequestNewPage)
    footerDiv.append(link)
    pageFooter.append(footerDiv)
    div.append(pageFooter)
    return div
}

export default todoPage
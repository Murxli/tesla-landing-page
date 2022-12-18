const closeButton = document.querySelector('aside button');
const menu = document.querySelector('#menu');
const aside  = document.querySelector('aside');
const backdrop = document.querySelector('.backdrop');
const mainele = document.querySelector('main') 

function closesidebar(event){
    aside.style.display = "none";
    aside.style.right = "-19rem"
    backdrop.style.display = 'none';
    mainele.style.position = 'static';
}


function opensidebar(event){
    event.preventDefault();
    aside.style.right = "0rem";
    aside.style.display = "revert";
    backdrop.style.display = 'unset';
    mainele.style.position = 'fixed';
}

closeButton.addEventListener('click', closesidebar)
menu.addEventListener('click',opensidebar)
backdrop.addEventListener('click',closesidebar)
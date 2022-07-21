let userStatus = true;
const signIn = document.querySelector('.item-account-navbar');
const email = document.querySelector('.item-email');
const menuMobile = document.querySelector('.icon-menu');
const closeIconMenu = document.querySelector('.icon-close');
const containerClose = document.querySelector('.container-close');
const containerCategories = document.querySelector('.container-categories');
const containerAccount = document.querySelector('.container-account');

const showEmail = () => {
    if(userStatus) {
        signIn.classList.add('hidden');
        email.classList.add('show');
    } else {
        signIn.classList.add('show');
        email.classList.add('hidden');
    }
}

showEmail();

const toogleMenuMobile = () => {
    containerClose.classList.toggle('display');
    containerCategories.classList.toggle('display');
    containerAccount.classList.toggle('display');
}

const toogleMenuDesktop = () => {
    containerAccount.classList.toggle('show');
}

email.addEventListener('click', toogleMenuDesktop);
menuMobile.addEventListener('click', toogleMenuMobile);
closeIconMenu.addEventListener('click', toogleMenuMobile);
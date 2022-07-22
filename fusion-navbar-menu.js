let userStatus = true;
const signIn = document.querySelector('.item-account-navbar');
const email = document.querySelector('.item-email');
const menuMobile = document.querySelector('.icon-menu');
const closeIconMenu = document.querySelector('.icon-close');
const containerClose = document.querySelector('.container-close');
const containerCategories = document.querySelector('.container-categories');
const containerAccount = document.querySelector('.container-account');
const iconShopping = document.querySelector('.icon-shopping-notification');
const cartsShopping = document.querySelector('.carts-secction');

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
    if(cartsShopping.classList.contains('display')){
        containerClose.classList.toggle('display');
        containerCategories.classList.toggle('display');
        containerAccount.classList.toggle('display');
    } else {
        cartsShopping.classList.add('display');
        containerClose.classList.toggle('display');
        containerCategories.classList.toggle('display');
        containerAccount.classList.toggle('display');
    }
}

const toogleMenuDesktop = () => {
    const isCartsShoppingClose = cartsShopping.classList.contains('display');

    if(isCartsShoppingClose){
        containerAccount.classList.toggle('show');
    } else {
        cartsShopping.classList.add('display');
        containerAccount.classList.toggle('show');
    }
}

const toogleShopping = () => {
    const isContainerAccountCloseMobile = containerAccount.classList.contains('display');
    const isContainerAccountOpenDesktop = containerAccount.classList.contains('show');

    if(isContainerAccountCloseMobile || isContainerAccountOpenDesktop) {
        containerAccount.classList.remove('show');
        containerClose.classList.add('display');
        containerCategories.classList.add('display');
        containerAccount.classList.add('display');
        cartsShopping.classList.toggle('display');
    } else {
        containerClose.classList.add('display');
        containerCategories.classList.add('display');
        containerAccount.classList.add('display');
        cartsShopping.classList.toggle('display');
    }
    
}

email.addEventListener('click', toogleMenuDesktop);
menuMobile.addEventListener('click', toogleMenuMobile);
closeIconMenu.addEventListener('click', toogleMenuMobile);
iconShopping.addEventListener('click', toogleShopping);
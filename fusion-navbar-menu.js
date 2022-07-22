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
const carts = document.querySelector('.cards');

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

const productList = [];
productList.push(
    {
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    }

);


const renderProducts = (arr) => {
    const showProduct = arr.map((product) => {
        // creando elemento cart de producto con sus atributos
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('container-card')
        // creando elemento img del producto con sus atributos
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.img);
        // creando elemento contenedor de product
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('product-card');
        // creando elemento contenedor de info-product
        const containerInfoProduct = document.createElement('div');
        containerInfoProduct.classList.add('product-info');
        // creando elemento img de carrito de compras
        const imageCart = document.createElement('img');
        imageCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
        // creando elementos párrafos para nombre del producto y precio
        const nameProduct = document.createElement('p');
        nameProduct.innerText = product.name;
        const priceProduct = document.createElement('p');
        priceProduct.innerText = `$ ${product.price}`;
    
        carts.appendChild(cartProduct);
        cartProduct.appendChild(imageProduct);
        cartProduct.appendChild(containerProduct);
        containerProduct.appendChild(containerInfoProduct);
        containerProduct.appendChild(imageCart);
        containerInfoProduct.appendChild(priceProduct);
        containerInfoProduct.appendChild(nameProduct);
    });
    return showProduct;
}

renderProducts(productList);


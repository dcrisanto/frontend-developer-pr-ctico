let userStatus = true;
const signIn = document.querySelector('.item-account-navbar');
const email = document.querySelector('.item-email');
const iconMenuMobile = document.querySelector('.icon-menu');
const containerMenuMobile = document.querySelector('.menu-mobile');
const containerMenuDesktop = document.querySelector('.menu-desktop');
const closeIconMenu = document.querySelector('.icon-close');
const iconShopping = document.querySelector('.icon-shopping-notification');
const cartsShopping = document.querySelector('#aside-shopping');
const carts = document.querySelector('.cards');
const cardProductSelected = document.querySelector('#aside-product');
const priceProduct = document.querySelector('.price');
const nameProduct = document.querySelector('.name-product');
const descriptionProduct = document.querySelector('.description-product');
const imageDetailProduct = document.querySelector('.image-detail-product');
const containerCloseDetailProduct = document.querySelector('.container-icon-close');
const arrowCloseShoppingCart = document.querySelector('#arrow-close-cart')

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
    const isCartsShoppingClose = cartsShopping.classList.contains('hidden');
    const isCardProductSelectedClose = cardProductSelected.classList.contains('hidden');
    if(isCartsShoppingClose && isCardProductSelectedClose){
        containerMenuMobile.classList.toggle('hidden');
    } else {
        cartsShopping.classList.add('hidden');
        cardProductSelected.classList.add('hidden');
        containerMenuMobile.classList.toggle('hidden');
    }
}

const toogleMenuDesktop = () => {
    const isCartsShoppingClose = cartsShopping.classList.contains('hidden');
    const isCardProductSelectedClose = cardProductSelected.classList.contains('hidden');
    
    if(isCartsShoppingClose && isCardProductSelectedClose){
        containerMenuDesktop.classList.toggle('hidden');
    } else {
        cartsShopping.classList.add('hidden');
        cardProductSelected.classList.add('hidden');
        containerMenuDesktop.classList.toggle('hidden');
    }
}

const toogleShopping = () => {
    const isContainerMenuMobileClose = containerMenuMobile.classList.contains('hidden');
    const isContainerMenuDesktopClose = containerMenuDesktop.classList.contains('hidden');
    const isCardProductSelectedClose = cardProductSelected.classList.contains('hidden');

    if(isContainerMenuMobileClose && isContainerMenuDesktopClose && isCardProductSelectedClose){
        cartsShopping.classList.toggle('hidden');
    } else {
        containerMenuMobile.classList.add('hidden');
        containerMenuDesktop.classList.add('hidden');
        cardProductSelected.classList.add('hidden');
        cartsShopping.classList.toggle('hidden');
    }
}

const closeCartShopping = () => {
    cartsShopping.classList.add('hidden');
}

email.addEventListener('click', toogleMenuDesktop);
iconMenuMobile.addEventListener('click', toogleMenuMobile);
closeIconMenu.addEventListener('click', toogleMenuMobile);
iconShopping.addEventListener('click', toogleShopping);
arrowCloseShoppingCart.addEventListener('click', closeCartShopping)

const productList = [];
productList.push(
    {
        id: 1,
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        id: 2,
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        id: 3,
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        id: 4,
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        id: 5,
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        id: 6,
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        id: 7,
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        id: 8,
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    },
    {
        id: 9,
        name: 'Round shelf',
        price: 120.00,
        img: './assets/imgs/round_shelf.svg'
    },
    {
        id: 10,
        name: 'Retro refigerator',
        price: 120.00,
        img: './assets/imgs/fridge.svg'
    }

);

let detailProduct = {};

const showProductSelected = (event) => {
    const isContainerMenuMobileClose = containerMenuMobile.classList.contains('hidden');
    const isContainerMenuDesktopClose = containerMenuDesktop.classList.contains('hidden');
    const isCartsShoppingClose = cartsShopping.classList.contains('hidden');

    const product = event.target.myParant;
    detailProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.'
    };
    nameProduct.innerText = detailProduct.name;
    priceProduct.innerText = detailProduct.price;
    descriptionProduct.innerText = detailProduct.description;
    imageDetailProduct.setAttribute('src', detailProduct.img);
    if(isContainerMenuMobileClose && isContainerMenuDesktopClose && isCartsShoppingClose){
        cardProductSelected.classList.remove('hidden');
    } else {
        containerMenuMobile.classList.add('hidden');
        containerMenuDesktop.classList.add('hidden');
        cartsShopping.classList.add('hidden');
        cardProductSelected.classList.remove('hidden');
    }
}

const closeProductSelected = () => {
    cardProductSelected.classList.add('hidden');
};

containerCloseDetailProduct.addEventListener('click', closeProductSelected);

const renderProducts = (arr) => {
    const showProduct = arr.map((product) => {
        // creando elemento card de producto con sus atributos
        const cardProduct = document.createElement('div');
        cardProduct.classList.add('container-card')
        // creando elemento img del producto con sus atributos
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.img);
        imageProduct.addEventListener('click', showProductSelected);
        imageProduct.myParant = product;
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
    
        carts.appendChild(cardProduct);
        cardProduct.appendChild(imageProduct);
        cardProduct.appendChild(containerProduct);
        containerProduct.appendChild(containerInfoProduct);
        containerProduct.appendChild(imageCart);
        containerInfoProduct.appendChild(priceProduct);
        containerInfoProduct.appendChild(nameProduct);
    });
    return showProduct;
}

renderProducts(productList);

/* show product-selected */



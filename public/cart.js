//cart panel
let cartPanel = document.getElementById('sidePanel');
let cartBtn = document.getElementById('cartBTN');
//let listcart = document.getElementById('listcart');
//let total = document.getElementById('total');

cartBtn.addEventListener('click', function() {
    cartPanel.classList.remove('left-full');
    
    if (window.innerWidth >= 640) { // md and larger
        cartPanel.classList.add('left-custom-left');
    } else { // smaller than md
        cartPanel.classList.add('left-custom-left-sm');
    }
    
    cartPanel.style.zIndex = '1000';
    cartPanel.style.pointerEvents = 'all';
});


// Function to check if the click event happened outside of the cart panel and quantity buttons
function isClickOutsideCartPanel(event) {
    return !cartPanel.contains(event.target) && 
           !cartBtn.contains(event.target) && 
           !event.target.classList.contains('minus') && 
           !event.target.classList.contains('plus');
}

// Event listener for clicks on the document to close the cart panel if clicked outside
document.addEventListener('click', function(event) {
    if (isClickOutsideCartPanel(event)) {
        cartPanel.classList.remove('right-0');
        cartPanel.classList.add('left-full');
        cartPanel.style.zIndex = '-1';
        cartPanel.style.pointerEvents = 'none';
    }
});

let products = null;
//fetching data from json file
const initapp = () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            renderProducts();
        })
        .catch(error => console.error('Error fetching product data:', error));
}
initapp();

// Function to render products on the menu
function renderProducts() {
    let menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) {
        console.error('menuContainer element not found');
        return;
    }

    // Clear the container before rendering
    menuContainer.innerHTML = '';
    products.forEach(product => {
        let productElement = document.createElement('div');
        productElement.classList.add('menu_card', 'md:pt-2','md:pb-4', 'lg:pt-8', 'lg:pb-4' ,'py-8', 'px-2', 'hover:shadow-xl', 'shadow-md', 'transition', 'duration-300', 'bg-slate-50', 'rounded-2xl', 'flex', 'flex-col');
        productElement.dataset.id = product.id;
        productElement.innerHTML = `
            <a href="#" class="fas fa-heart fa-lg hover:text-sred-700 duration-200"></a>
                    <div class="menu_img flex-auto items-center justify-center ">
                        <img src="${product.image}" alt="" class="xl:max-w-full xl:max-h-full pt-5" style="filter: drop-shadow(10px 10px 30px rgba(0,0,0,0.3));">
                    </div>
                    <div class="menu_content mt-4">
                        <h3 class="text-base2 font-semibold text-center">${product.name}</h3>
                    </div>
                    <div class="price mt-1">
                        <h4 class="lg:text-base2 md:text-2xl text-2xl sm:text-3xl font-custom3 font-bold text-center">$${product.price}</h4>
                    </div>
                    <div class="order_now flex items-center justify-center mt-2">
                        <a onclick="addcart(${product.id})" class="add-cart cursor-pointer rounded-md py-2 hover:text-white duration-300 hover:border-red-600 border-black border-[1.5px] relative 2xl:px-[110px] xl:px-[90px] lg:px-[100px] md:px-[65px] sm:px-[75px] px-[30px] text-center text-sm font-semibold font-custom3 overflow-hidden group
                        ">
                            <span class="relative z-10">Add to cart</span>
                            <span class="absolute inset-0 bg-red-600 transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </a>
                    </div>
        `;
        menuContainer.appendChild(productElement);
    });
    // Log to confirm rendering
    console.log('Products rendered successfully');
}


let cart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('cart='));
    if (cookieValue) {
        cart = JSON.parse(cookieValue.split('=')[1]);
        console.log("Cart loaded from cookie:", cart); // Debugging statement
    } else {
        cart = [];
        console.log("No cart cookie found, initializing empty cart."); // Debugging statement
    }
    addCartToHtml();
}
checkCart();
function addcart($idproduct) {
    let productcopy = JSON.parse(JSON.stringify(products));
    // Check if the product is already in the cart
    let productInCart = cart.find(product => product.id == $idproduct);
    if (!productInCart) {
        let productToAdd = productcopy.find(product => product.id == $idproduct);
        if (productToAdd) {
            productToAdd.quantity = 1;
            cart.push(productToAdd);
        }
    } else {
        productInCart.quantity++;
    }
    // Save cart data in a cookie
    document.cookie = "cart=" + JSON.stringify(cart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    console.log("Cart saved to cookie:", document.cookie); // Debugging statement
    addCartToHtml(); // Update the cart display
}

function calculateTotal() {
    let total = 0;
    Object.values(cart).forEach(product => {
        total += product.price * product.quantity;
    });
    return total.toFixed(2);
}

addCartToHtml();

function addCartToHtml(){
    //clear the cart
    let listcartHtml = document.getElementById('listcart');
    listcartHtml.innerHTML = '';
    let total = document.getElementById('total');
    let totalquantity = 0;
    if(cart){
        cart.forEach(product => {
            let newcart = document.createElement('div');
            newcart.classList.add('cart-item', 'grid', 'sm:grid-cols-cart', 'grid-cols-1', 'sm:gap-10', 'gap-4','text-center', 'sm:pl-8', 'pl-2','items-center', 'overflow-hidden', 'mt-0', 'bg-white', 'py-3');
            newcart.innerHTML = 
            `
                <div class="img sm:col-span-1 col-span-2 flex justify-center sm:justify-start items-center">
                    <img src="${product.image}" alt="food1" class="sm:w-40 sm:h-20 w-20 h-14 object-cover rounded-lg">
                </div>
                <div class="info grid grid-rows-2 sm:col-span-1 col-span-2">
                    <div class="name text-center mt-1">
                        <h1 class="font-custom3 font-semibold text-sm">${product.name}</h1>
                    </div>
                    <div class="quantity flex justify-center items-center mt-0 sm:mt-0">
                        <button onclick="changequantity(${product.id}, '-')" class="minus bg-gray-100 w-8 h-8 rounded-lg">-</button>
                        <input type="text" class="quantity-input w-8 h-8 text-center" value="${product.quantity}">
                        <button onclick="changequantity(${product.id}, '+')" class="plus bg-gray-100 w-8 h-8 rounded-lg">+</button>
                    </div>
                </div>
                <div class="totalprice sm:col-span-1 col-span-2 justify-center sm:justify-start mt-0 sm:mt-0">
                    <h1 class="font-custom3 font-medium text-base sm:text-left">${product.price}</h1>
                </div>
            `;
            listcartHtml.appendChild(newcart);
            totalquantity += product.quantity;
        });
        total.innerHTML = `Checkout • $ ${calculateTotal()}`;
    }
}
function changequantity($idproduct, $type){
    let productIndex = cart.findIndex(product => product.id == $idproduct);
    if (productIndex === -1) return; // If product is not found, exit the function

    switch ($type) {
        case '+':
            cart[productIndex].quantity++;
            break;
        case '-':
            cart[productIndex].quantity--;

            // if quantity <= 0 then remove product in cart
            if (cart[productIndex].quantity <= 0) {
                cart.splice(productIndex, 1); // Remove the product from the cart
            }
            break;

        default:
            break;
    }

    // save new data in cookie
    document.cookie = "cart=" + JSON.stringify(cart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    // reload html view cart
    addCartToHtml();
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const navLinksForActive = document.querySelectorAll(".navLink a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLinksForActive.forEach(link => {
  if(link.href.includes(window.location.pathname)){
    link.classList.add("activePage");
  }
});

// Cart toggle

function toggleCart(){
  const cartPopUp = document.getElementById("cart-popup");
  cartPopUp.classList.toggle("show");
}

let cart = [];
function addToCart(productName , price){
  let existingItem = cart.find(item => item.name === productName);

  if (existingItem){
    existingItem.quantity++;
  }else{
    cart.push({
       name: productName,
       price: price,
       quantity: 1});
  }

  updateCartUI();
}

function updateCartUI(){
  let cartContent = document.getElementById("cart-content");
  let totalPrice = document.getElementById("totalPrice");
  let checkOut = document.getElementById("checkOutBtn");
  
  if(cart.length === 0){
    cartContent.innerHTML = "<p>Your cart is empty!</p>";
    totalPrice.innerHTML = "";
    checkOut.style.display = "none";
    return;
  }
  // Update cart content
  cartContent.innerHTML =  cart.map(item =>
    `<p>${item.name} (x${item.quantity}) - $${item.price * item.quantity}</p>`).join("");
  // Update totalPrice
  totalPrice.innerHTML = `Total:$` + (cart.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2);
}






  // Menu mobile
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Panier
    const cartBtn = document.getElementById("cart-btn");
    const cartBlock = document.getElementById("cart-block");
    const closeCart = document.getElementById("close-cart");

    cartBtn.addEventListener("click", () => {
      cartBlock.classList.toggle("hidden");
    });

    closeCart.addEventListener("click", () => {
      cartBlock.classList.add("hidden");
    });
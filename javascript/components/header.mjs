export const makeHeader = () => {
  let header = document.querySelector("header");
  header.innerHTML = "";

  let headerBox = document.createElement("div");
  headerBox.className = "headerBox";

  let logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "./pictures/Logo.svg";
  logo.width = "335px";

  let headerNav = document.createElement("nav");
  headerNav.className = "headerNav";

  let homeButton = document.createElement("a");
  homeButton.className = "homeButton menuButton";
  homeButton.innerText = "Home";
  homeButton.href = "#/";

  let newsButton = document.createElement("a");
  newsButton.className = "newsButton menuButton";
  newsButton.innerText = "News";
  newsButton.href = "#/newsPage/index.html";

  let storeButton = document.createElement("a");
  storeButton.className = "storeButton menuButton";
  storeButton.innerText = "Store";

  let details = document.createElement("details");
  details.className = "cartButton menuButton";

  let summary = document.createElement("summary");
  summary.classList.add("cartSummary", "fa-solid", "fa-cart-shopping");

  let cartBox = document.createElement("div");
  cartBox.className = "cartBox";

  let cartItems = document.createElement("div");
  cartItems.className = "cartItems";
  cartItems.id = "cartRow";

  let cartFunctions = document.createElement("div");
  cartFunctions.className = "cartFunctions";
  cartFunctions.id = "cartFunctions";

  let cartTotalText = document.createElement("p");
  cartTotalText.innerText = "Total:";

  let cartTotalValue = document.createElement("p");
  cartTotalValue.className = "cartTotal";
  cartTotalValue.innerText = "";
  cartTotalValue.id = "cartTotal";

  let profileButton = document.createElement("button");
  profileButton.classList.add(
    "profileButton",
    "menuButton",
    "fa-solid",
    "fa-user"
  );

  let goToCartButton = document.createElement("button");
  goToCartButton.className = "goToCartButton";
  goToCartButton.innerText = "Go to Cart";
  goToCartButton.addEventListener("click", () => {
    window.location.href = "#/checkout/index.html";
  });

  header.appendChild(headerBox);
  headerBox.append(logo, headerNav);
  headerNav.append(homeButton, newsButton, storeButton, details, profileButton);
  details.append(summary, cartBox);
  cartBox.append(cartItems, cartFunctions, goToCartButton);
  cartFunctions.append(cartTotalText, cartTotalValue);
};

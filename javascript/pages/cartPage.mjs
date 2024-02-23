import { makeHeader } from "../components/header.mjs";
import { makeFooter } from "../components/footer.mjs";
import { calculateDiscountValue, calculateSubTotalValue, calculateOfficialPrice } from "../components/calculators.mjs";

export const goToCartPage = () => {
  let main = document.querySelector("main");
  main.innerHTML = "";
  makeHeader();
  cartItems();
  makeFooter();
};

const cartItems = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  let main = document.querySelector("main");

  let pageContainer = document.createElement("div");
  pageContainer.className = "cartPageContainer";

  let h1 = document.createElement("h1");
  h1.innerText = "Checkout";
  h1.className = "cartH1";

  let contentDiv = document.createElement("div");
  contentDiv.className = "contentDiv";

  let cartItemBox = document.createElement("div");
  cartItemBox.id = "cartItemBox";

  let summaryAndPaymentBox = document.createElement("div");
  summaryAndPaymentBox.className = "summaryAndPaymentBox";
  summaryAndPaymentBox.id = "summaryAndPaymentBox";

  main.appendChild(pageContainer);
  pageContainer.append(h1, contentDiv);
  contentDiv.append(cartItemBox, summaryAndPaymentBox);
  console.log;
  if (cart.length === 0) {
    makeIfCartIsEmpty();
    makeSummarySide();
  } else {
    makeCartPageItem();
    makeSummarySide();
  }
  calculateSubTotalValue();
  calculateOfficialPrice();
  calculateDiscountValue();
};

const makeIfCartIsEmpty = () => {
  let container = document.getElementById("cartItemBox");

  let cartH2 = document.createElement("h2");
  cartH2.className = "cartH2";
  cartH2.innerText = "Cart";

  let p = document.createElement("p");
  p.innerText =
    "Your cart is currently empty. Why not head back to our homepage and discover amazing products to fill it up? Click here to start shopping now!";

  let button = document.createElement("button");
  button.className = "goBackToHomePage";
  button.innerHTML = "Click here to start shopping!";
  button.addEventListener("click", () => {
    window.location.href = "#/index.html";
  });
  container.append(cartH2, p, button);
};

const makeSummarySide = () => {
  let container = document.getElementById("summaryAndPaymentBox");

  let summaryH3 = document.createElement("h3");
  summaryH3.className = "summaryH3";
  summaryH3.innerText = "Summary";

  let summaryBox = document.createElement("div");
  summaryBox.className = "summaryBox";

  let paymentH3 = document.createElement("h3");
  paymentH3.className = "paymentH3";
  paymentH3.innerText = "Payment";

  let paymentBox = document.createElement("div");
  paymentBox.className = "paymentBox";

  let officialPriceBox = document.createElement("div");
  officialPriceBox.className = "officialPriceBox";

  let officialPriceText = document.createElement("p");
  officialPriceText.innerText = "Official Price:";
  officialPriceText.className = "officialPriceText";

  let officialPriceValue = document.createElement("p");
  officialPriceValue.className = "officialPriceValue";
  officialPriceValue.id = "officialPriceValue";

  let discountBox = document.createElement("div");
  discountBox.className = "discountBox";

  let discountText = document.createElement("p");
  discountText.innerText = "Discount:";
  discountText.className = "discountText";

  let discountValue = document.createElement("p");
  discountValue.className = "discountValue";
  discountValue.id = "discountValue";

  let subTotalBox = document.createElement("div");
  subTotalBox.className = "subTotalBox";

  let subTotalText = document.createElement("p");
  subTotalText.innerText = "Subtotal:";
  subTotalText.className = "subTotalText";

  let subTotalValue = document.createElement("p");
  subTotalValue.className = "subTotalValue";
  subTotalValue.id = "subTotalValue";

  let form = document.createElement("form");
  form.className = "paymentForm";

  let cardInput = document.createElement("input");
  cardInput.className = "cardInput";
  cardInput.placeholder = "Card Number";

  let smallInputDiv = document.createElement("div");
  smallInputDiv.className = "smallInputDiv";

  let monthYearInput = document.createElement("input");
  monthYearInput.className = "monthYearInput";
  monthYearInput.placeholder = "Month/Year";

  let CVCInput = document.createElement("input");
  CVCInput.className = "CVCInput";
  CVCInput.placeholder = "CVC";

  let nameOnCardInput = document.createElement("input");
  nameOnCardInput.className = "nameOnCardInput";
  nameOnCardInput.placeholder = "Name on card";

  let buyButton = document.createElement("button");
  buyButton.className = "buyButton";
  buyButton.innerText = "Buy";
  buyButton.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.length > 0) {
      let proceed = confirm("Are you sure you want to proceed?");
      if (proceed) {
        window.location.href = "#/confirmation/index.html";
      } else {
        console.log("action canceled");
      }
    } else {
      alert("There are no items in your cart");
    }
  });

  container.append(summaryH3, summaryBox, paymentH3, paymentBox, buyButton);
  summaryBox.append(officialPriceBox, discountBox, subTotalBox);
  officialPriceBox.append(officialPriceText, officialPriceValue);
  discountBox.append(discountText, discountValue);
  subTotalBox.append(subTotalText, subTotalValue);
  paymentBox.appendChild(form);
  form.append(cardInput, smallInputDiv, nameOnCardInput);
  smallInputDiv.append(monthYearInput, CVCInput);
};

export const makeCartPageItem = () => {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let cartItemBox = document.getElementById("cartItemBox");
  console.log(cartItemBox);
  cartItemBox.innerHTML = "";

  let cartH2 = document.createElement("h2");
  cartH2.className = "cartH2";
  cartH2.innerText = "Cart";

  cartItemBox.appendChild(cartH2);
  cartItems.forEach((item) => {
    let cartItemBox = document.getElementById("cartItemBox");

    let itemContainer = document.createElement("div");
    itemContainer.className = "cartItemContainer";

    let image = document.createElement("img");
    image.src = item.image.url;
    image.alt = item.image.alt;
    image.className = "cartPageImage";

    let gameDetails = document.createElement("div");
    gameDetails.className = "gameDetails";

    let gameName = document.createElement("p");
    gameName.innerText = item.title;

    let discount = item.price - item.discountedPrice;
    let gamePrice = document.createElement("p");
    let htmlSpace = "&nbsp";
    if (discount > 0) {
      gamePrice.innerHTML = `<div><s>$${item.price}</s> ${htmlSpace}  $${item.discountedPrice}</div>`;
    } else {
      gamePrice.innerHTML = `${item.price}`;
    }

    cartItemBox.appendChild(itemContainer);
    itemContainer.append(image, gameDetails);
    gameDetails.append(gameName, gamePrice);
  });
};






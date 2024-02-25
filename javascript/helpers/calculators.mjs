export const calculateOfficialPrice = () => {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let officialPriceText = document.getElementById("officialPriceValue");
  if (officialPriceText == null) return;

  let Price = cartItems.reduce((priceTotal, item) => {
    return priceTotal + item.price;
  }, 0);

  let officialPrice = Math.round(Price * 100) / 100;
  officialPriceText.innerText = "$" + officialPrice;
};

export const calculateDiscountValue = () => {
  let discountValue = document.getElementById("discountValue");
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  if (discountValue == null) return;

  let discount = cartItems.reduce((priceTotal, item) => {
    return priceTotal + item.price - item.discountedPrice;
  }, 0);

  let roundedDiscount = Math.round(discount * 100) / 100;
  discountValue.innerText = "$" + roundedDiscount;
};

export const calculateSubTotalValue = () => {
  let subTotalValue = document.getElementById("subTotalValue");
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  if (subTotalValue == null) return;

  let price = cartItems.reduce((priceTotal, item) => {
    let discount = item.price - item.discountedPrice;
    return priceTotal + item.price - discount;
  }, 0);

  let roundedPrice = Math.round(price * 100) / 100;
  subTotalValue.innerText = "$" + roundedPrice;
};

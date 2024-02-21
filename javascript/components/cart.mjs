import { makeCartPageItem, calculateDiscountValue, calculateOfficialPrice, calculateSubTotalValue } from "../pages/cartPage.mjs";
let cartTotal = 0;

export const displayCart = (cart) => {
    let cartRow = document.getElementById("cartRow")
    cartRow.innerHTML = ""
    
    cart.forEach(item => {
        makeCartItem(item)
    });
    updateCartTotal(cart)
}



export const addItemToCart = (gameInfo) => {
    let gameDetails = JSON.parse(gameInfo)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    for ( var i = 0; i < cart.length; i++){
        if(cart[i].title === gameDetails.title){
            alert('This item is already added to the cart')
            return
        }
    }
    cart.push(gameDetails)
    
    localStorage.setItem('cart', JSON.stringify(cart))
    displayCart(cart)
}


const makeCartItem = (gameDetails) => {
    let cartRow = document.getElementById("cartRow")

    let cartItemBox = document.createElement("div")
    cartItemBox.className = "cartItem"

    let gameImage = document.createElement("img")
    gameImage.src = gameDetails.image.url
    gameImage.alt = gameDetails.image.alt
    gameImage.className = "cartImage"

    let priceBox = document.createElement("div")
    priceBox.className = "priceBox"

    let gameName = document.createElement("p")
    gameName.innerText = gameDetails.title


    let discount = gameDetails.price - gameDetails.discountedPrice

    let gamePrice = document.createElement("p")
    gamePrice.className = "price"

    let htmlSpace = "&nbsp"

    let actualPrice = 0;

    if ( discount > 0) {
        actualPrice = gameDetails.discountedPrice
        gamePrice.innerHTML = `<div><s>$${gameDetails.price}</s> ${htmlSpace}  $${gameDetails.discountedPrice}</div>` 
    }else {
        actualPrice = gameDetails.price
        gamePrice.innerText = "$" + gameDetails.price
    }
    

    let removeButton = document.createElement("button")
    removeButton.className = "removeFromCartButton"
    removeButton.innerText = "Remove"
    removeButton.onclick = () => {
        removeButtonClicked(gameDetails)
        // window.location.reload()
        makeCartPageItem()
        calculateDiscountValue()
        calculateOfficialPrice()
        calculateSubTotalValue()
    }


        cartRow.appendChild(cartItemBox)
        cartItemBox.appendChild(gameImage)
        cartItemBox.appendChild(priceBox)
        cartItemBox.appendChild(removeButton)
        priceBox.appendChild(gameName)
        priceBox.appendChild(gamePrice)
        
        

    return actualPrice
}

const removeButtonClicked = (gameDetails) =>{
    let cart = JSON.parse(localStorage.getItem("cart"))
    console.log(cart);
    cart = cart.filter(item => item.title !== gameDetails.title);

    localStorage.setItem('cart', JSON.stringify(cart))
    displayCart(cart)
}


const updateCartTotal = (cart) => {
    let initialValue = 0; 

 // here it checks if its the discount price or reg price and returns the price.
    const reduceFunction = (cartTotal, game) => {
        let discount = game.price - game.discountedPrice
        if (discount > 0){
            return cartTotal + game.discountedPrice
        }else {
            return cartTotal + game.price
        }
    
    }
    //updatedCartTotal take the return value from reducefuntion and adds it with the initialvalue
    let updatedCartTotal = cart.reduce(reduceFunction, initialValue) 

    let inputCartTotal = document.getElementById("cartTotal")
    inputCartTotal.innerText = "$" + Math.round(updatedCartTotal *100)/100 //makes the number not go to the moon in decimals


}
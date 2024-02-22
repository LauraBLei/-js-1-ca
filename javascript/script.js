import { goToGamePage } from "./pages/gamePage.mjs";
import { goToHomePage } from "./pages/homePage.mjs";
import { goToNewsPage } from "./pages/newsPage.mjs";
import { displayCart } from "./components/cart.mjs";
import { goToCartPage } from "./pages/cartPage.mjs";
import { runConfirmationPage } from "./pages/confirmation.mjs";
import { loader } from "./components/loaders.mjs";

export const noroffAPI = "https://v2.api.noroff.dev/gamehub";

export const dataAPI = async(url) => {
    try{
        let response = await fetch(url)
        console.log("Api was called.");
        let games = await response.json()
        localStorage.setItem("arrayOfGames", JSON.stringify(games.data))
    console.log("Games stored in local storage with name: arrayOfGames and value: ",games.data);
    }catch(error){
        console.error("there was a problem fetching:" + error);
    }
}

dataAPI(noroffAPI)


console.log("hei!");
// loader(dataAPI, noroffAPI)

export function router() {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
    
    const routes = [
        // Regular Expression - RegEx for short
        {path: /^\/(index.html)?$/, controller: goToHomePage },
        {path: /^\/gamePage(\/index.html)?$/, controller: goToGamePage},
        {path: /^\/newsPage(\/index.html)?$/, controller: goToNewsPage},
        {path: /^\/checkout(\/index.html)?$/, controller: goToCartPage},
        {path: /^\/confirmation(\/index.html)?$/, controller: runConfirmationPage},
        {path: /.*/, controller: goToHomePage}
    ]
    
    const route = routes.find((route) => route.path.test(hash));
    
    console.log(url);
    route.controller();
}

router()

window.onhashchange = () => {
    router()
    let cart = JSON.parse(localStorage.getItem("cart")) ?? []; //gets the cart information
    displayCart(cart) //updates the cart - we put it here to update the cart when we change page. 
}
document.addEventListener('DOMContentLoaded', () =>{
    let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    
    displayCart(cart)
})






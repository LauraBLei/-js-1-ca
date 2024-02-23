
import { displayCart } from "./components/cart.mjs";
import { loader } from "./components/loaders.mjs";
import { fetchGames, noroffAPI } from "./helpers/apiFetch.mjs";
import { router } from "./components/router.mjs";



const start = async() => {
    await loader(fetchGames, noroffAPI)
    router()
}

start ()


window.onhashchange = () => {
    router()
    let cart = JSON.parse(localStorage.getItem("cart")) ?? []; //gets the cart information
    displayCart(cart) //updates the cart - we put it here to update the cart when we change page. 
}
document.addEventListener('DOMContentLoaded', () =>{
    let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    
    displayCart(cart)
})






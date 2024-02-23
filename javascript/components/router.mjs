import { goToGamePage } from "../pages/gamePage.mjs";
import { goToHomePage } from "../pages/homePage.mjs";
import { goToNewsPage } from "../pages/newsPage.mjs";
import { goToCartPage } from "../pages/cartPage.mjs";
import { runConfirmationPage } from "../pages/confirmation.mjs";

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
    
    route.controller();
}
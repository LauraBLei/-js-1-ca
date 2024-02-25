import { makeHeader } from "../components/header.mjs";
import { filterFunctions } from "../helpers/filter.mjs";
import { addItemToCart } from "../components/cart.mjs";

export const goToHomePage = () => {
  const arrayOfGames = JSON.parse(localStorage.getItem("arrayOfGames"));
  makeHeader();
  homePageMain(arrayOfGames);
  filterFunctions(arrayOfGames);
};

const homePageMain = (arrayOfGames) => {
  let main = document.querySelector("main");
  main.innerHTML = `
    <h1>Welcome to GameHub</h1>
    <div class="filterSection">
    <details class="genresButton menuButton">
    <summary>Genres</summary>
    <ul class="summaryUl">
    <li>Show all</li>
    <li>Action</li>
    <li>Adventure</li>
    <li>Sports</li>
    <li>Horror</li>
    </ul>
    </details>
    <details class="sortByButton menuButton">
    <summary>Sort by:</summary>
    <ul class="summaryUl">
    <li id="highToLow">Price: high to low</li>
    <li id="lowToHigh">Price: low to high</li>
    <li id="onSale">On sale</li>
    <li id="oldToNew">Released: old to new</li>
    <li id="newToOld">Released: new to old</li>
    </ul>
    </details>
    <div class="searchBar menuButton"><p>Search...</p></div>
    </div>
    <div id="gameList" class="gameList">
    
    </div>
    `;
  listGames(arrayOfGames);
};

export const listGames = (games) => {
  let gamePlacement = document.getElementById("gameList");
  gamePlacement.innerHTML = ""; // Clear existing content before appending new games
  games.map((game) => {
    createGameCard(game, gamePlacement);
  });
};

const createGameCard = (game, gamePlacement) => {
  let imageDiv = document.createElement("div");
  imageDiv.className = "imageDiv";

  let imageElement = document.createElement("img"); //creates the img html
  imageElement.className = "gameListImage";
  imageElement.src = game.image.url; //gets the img url from the object and puts it in the img src
  imageElement.alt = game.image.alt;

  let linkToGamePage = document.createElement("a");
  linkToGamePage.className = "linkToGamePage";
  linkToGamePage.addEventListener("click", () => {
    localStorage.setItem("game", JSON.stringify(game));
    window.location.href = "#/gamePage/index.html";
  });

  let gameCardPrice = document.createElement("p");
  gameCardPrice.className = "gameCardPrice";
  gameCardPrice.innerHTML = "Price: " + game.discountedPrice;

  let gameCardReleased = document.createElement("p");
  gameCardReleased.className = "gameCardReleased";
  gameCardReleased.innerHTML = "Released in: " + game.released;

  let addToCartButton = document.createElement("button");
  addToCartButton.className = "addToCartGameCard";
  addToCartButton.innerText = "Add To Cart";
  addToCartButton.addEventListener("click", (event) => {
    localStorage.setItem("cartGame", JSON.stringify(game));
    addItemToCart(localStorage.getItem("cartGame"));
  });

  linkToGamePage.appendChild(imageElement);
  imageDiv.appendChild(linkToGamePage);
  imageDiv.appendChild(gameCardPrice);
  imageDiv.appendChild(gameCardReleased);
  imageDiv.appendChild(addToCartButton);
  gamePlacement.appendChild(imageDiv);
};

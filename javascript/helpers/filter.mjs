const arrayOfGames = JSON.parse(localStorage.getItem("arrayOfGames"))
import { listGames } from "../pages/homePage.mjs"

console.log(arrayOfGames);

export const filterFunctions = (arrayOfGames) => {
    createEventListenerNewToOld(arrayOfGames)
    createEventListenerOldToNew(arrayOfGames)
    createEventListenerOnGenres(arrayOfGames)
    createEventListenerOnSale(arrayOfGames)
    createEventListenerPriceHighToLow(arrayOfGames)
    createEventListenerPriceLowToHigh(arrayOfGames)
}

const createEventListenerOnGenres = (arrayOfGames) => {
 document.querySelectorAll(".genresButton ul li").forEach((li) => {
   li.addEventListener("click", () => {
     filterByGenre(li.textContent, arrayOfGames);
   });
 });
};

const filterByGenre = async (genre, arrayOfGames) => {
    if (genre === "Show all") {
      listGames(arrayOfGames);
    } else {
      let sortedList = arrayOfGames.filter((game) => game.genre === genre);
      listGames(sortedList);
    }
  };
  
  //sort by price: high to low
   const createEventListenerPriceHighToLow = (arrayOfGames) => {
    let button = document.getElementById("highToLow");
    button.addEventListener("click", () => {
      sortByHighToLow(arrayOfGames);
    });
  };
  
  const sortByHighToLow = (listOfGames) => {
    console.log("sorted by high to low");
    listOfGames.sort((a, b) => b.discountedPrice - a.discountedPrice);
    listGames(listOfGames);
  };
  
  //sort by price: low to high
  
   const createEventListenerPriceLowToHigh = (arrayOfGames) => {
    let button = document.getElementById("lowToHigh");
    button.addEventListener("click", () => {
      sortByLowToHigh(arrayOfGames);
    });
  };
  
  const sortByLowToHigh = (listOfGames) => {
    console.log("sorted by low to high");
    listOfGames.sort((a, b) => a.discountedPrice - b.discountedPrice);
    listGames(listOfGames);
  };
  
  //sort by: On sale
  
  const createEventListenerOnSale = (arrayOfGames) => {
    let button = document.getElementById("onSale");
    button.addEventListener("click", () => {
      sortByOnSale(arrayOfGames);
    });
  };
  
  const sortByOnSale = (listOfGames) => {
    console.log("sorted on sale");
    let sortedList = listOfGames.filter(
      (game) => game.discountedPrice < game.price
    );
    listGames(sortedList);
  };
  
  //sort by: old to new
  
  const createEventListenerOldToNew = (arrayOfGames) => {
    let button = document.getElementById("oldToNew");
    button.addEventListener("click", () => {
      sortByOldToNew(arrayOfGames);
    });
  };
  
  const sortByOldToNew = (listOfGames) => {
    console.log("sorted from old to new");
    listOfGames.sort((a, b) => {
      return parseInt(a.released) - parseInt(b.released);
    });
    listGames(listOfGames);
  };
  
  //sort by: new to old
  const createEventListenerNewToOld = (arrayOfGames) => {
    let button = document.getElementById("newToOld");
    button.addEventListener("click", () => {
      sortByNewToOld(arrayOfGames);
    });
  };
  
  const sortByNewToOld = (listOfGames) => {
    console.log("sorted from new to old");
    listOfGames.sort((a, b) => {
      return parseInt(b.released) - parseInt(a.released);
    });
    listGames(listOfGames);
  };
  
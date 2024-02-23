export const noroffAPI = "https://v2.api.noroff.dev/gamehub";

export const fetchGames = async(url) => {
    let arrayOfGames = localStorage.getItem("arrayOfGames")
    if(arrayOfGames) {
        console.log("games already in localStorage Api not called");
        return arrayOfGames
    }
    try{
        let response = await fetch(url)
        console.log("Api was called.");
        let games = await response.json()
        localStorage.setItem("arrayOfGames", JSON.stringify(games.data))
    console.log("Games stored in local storage with name: arrayOfGames and value: ",games.data);
        return games.data
    }catch(error){
        console.error("there was a problem fetching:" + error);
    }
}
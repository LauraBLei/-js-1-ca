export const noroffAPI = "https://v2.api.noroff.dev/gamehub";

export const fetchGames = async (url) => {
  let arrayOfGames = localStorage.getItem("arrayOfGames");
  if (arrayOfGames) {
    return arrayOfGames;
  }
  try {
    let response = await fetch(url);
    let games = await response.json();
    localStorage.setItem("arrayOfGames", JSON.stringify(games.data));
    return games.data;
  } catch (error) {}
};

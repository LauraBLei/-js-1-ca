import { makeFooter } from "../components/footer.mjs";
import { makeHeader } from "../components/header.mjs";

export const goToNewsPage = () => {
  let main = document.querySelector("main");
  main.innerHTML = "";
  makeHeader();
  let newsDiv = document.createElement("div");
  newsDiv.innerHTML = "this is the News Site";
  newsDiv.style.fontSize = "30px";
  newsDiv.style.color = "white";
  main.appendChild(newsDiv);
  makeFooter();
};

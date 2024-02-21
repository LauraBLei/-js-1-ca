import { makeHeader } from "../components/header.mjs"
import { makeFooter } from "../components/footer.mjs"
export const runConfirmationPage = () => {
    let main = document.querySelector("main")
    main.innerHTML = ""
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = [];
    
    makeHeader()
    makeMainContent()
    makeFooter()
}

const makeMainContent = () => {
    let main = document.querySelector("main")
    let contentDiv = document.createElement("div")
    contentDiv.className = "confirmationContentDiv"

    let confirmationImage = document.createElement("img")
    confirmationImage.src = "./pictures/Ok.svg"
    confirmationImage.alt = "confirmation image"

    let paymentSuccessText = document.createElement("p")
    paymentSuccessText.innerText = "Payment Success"
    paymentSuccessText.className = "cartPageText"

    let text1  = document.createElement("p")
    text1.innerText = "The games has been send to your email"
    text1.className = "cartPageText"

    let text2 = document.createElement("p")
    text2.innerText = "it will take up to 10 min to arrive in your inbox"
    text2.className = "cartPageText"

    main.appendChild(contentDiv)
    contentDiv.append(confirmationImage, paymentSuccessText ,text1, text2)
}
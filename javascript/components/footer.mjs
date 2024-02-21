export const makeFooter = () => {
    let footer = document.querySelector("footer")
    footer.innerHTML=`
    <nav class="footerNav">
            <div>
                <h2>Information</h2>
                <ul>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                    <li>Cookies</li>
                </ul>
            </div>
            <div>
                <h2>About us</h2>
                <ul>
                    <li>About us</li>
                    <li>Our aims</li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <ul>
                    <li>Support</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </nav>
        `
}
const cards = document.querySelectorAll(".flipcard");

let flipcardOne, flipcardTwo;

// define flipCard function
function flipCard(e) {
    let clickedCard = e.target; // getting clicked card
    clickedCard.classList.add("flip");
    if (clickedCard !== flipcardOne) {
        if (!flipcardOne) {
            //cardOne value returned
            return flipcardOne = clickedCard;
        }
        flipcardTwo = clickedCard;

        let flipcardOneImg = flipcardOne.querySelector("img").src,
            flipcardTwoImg = flipcardTwo.querySelector("img").src;
        matchCards(flipcardOneImg, flipcardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) { // the two img matched
        return console.log("Card matched");
    }
}

// add click efect to card
cards.forEach(flipcard => {
    flipcard.addEventListener("click", flipCard);
});
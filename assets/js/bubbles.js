const cards = document.querySelectorAll(".flipcard");

let cardOne, cardTwo;

// define flipCard function
function flipCard(e) {
    let clickedCard = e.target; // getting clicked card
    clickedCard.classList.add("flip");
    if (clickedCard !== cardOne) {
        if (!cardOne) {
            //cardOne value returned
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;

        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) { // the two img matched
        return console.log("Card matched");
    }
    
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
}

// add click efect to card
cards.forEach(flipcard => {
    flipcard.addEventListener("click", flipCard);
});
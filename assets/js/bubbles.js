const cards = document.querySelectorAll(".card-game");

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

        let cardOneImg = cardOne.querySelector(".card-game img").src,
            cardTwoImg = cardTwo.querySelector(".card-game img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) { // the two img matched
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; //card values to blank
        return;
    }


    // add click efect to card
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
    
const cards = document.querySelectorAll(".card-game");

let matchedCard = 0; // counting cards to shuffle
let cardOne, cardTwo;
let disableDeck = false;

// define flipCard function
function flipCard(e) {
    let clickedCard = e.target; // getting clicked card
    clickedCard.classList.add("flip");
    if (clickedCard !== cardOne && !disableDeck) {
        if (!cardOne) {
            //cardOne value returned
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".card-game img").src,
            cardTwoImg = cardTwo.querySelector(".card-game img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) { // the two img matched
        matchedCard++; //matched value +1
        // matched value is 8, the all cards matched (8*2 = 16)
        if (matchedCard == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000); //call shuffle after 1s
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = ""; //card values to blank
    return disableDeck = false;
}

setTimeout(() => {
    // when 2 cards not matched
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
}, 400); // add shake class to both cards after 400ms

setTimeout(() => {
    // when 2 cards not matched
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = ""; //reser both values to blank
    disableDeck = false;
}, 1200); // remove shake and flip class to both cards after 1.2s
}


function shuffleCard() {
    matchedCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); //sort array randomly
   
    // remove flip class for all cards and pass random image to each card
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `assets/images/game-icons/img-${arr[index]}.png`; 
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

// add click efect to card
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
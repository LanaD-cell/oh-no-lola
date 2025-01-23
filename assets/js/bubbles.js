// flip game 

const cards = document.querySelectorAll(".card-game");

let matchedCard = 0; // counting cards to shuffle
let cardOne, cardTwo;
let disableDeck = false;

// define flipCard function
function flipCard(e) {
    try {
        const clickedCard = e.target; // getting clicked card
        if (!clickedCard || clickedCard.classList.contains("flip") || clickedCard === cardOne || disableDeck) return;
        clickedCard.classList.add("flip");
        
            if (!cardOne) {
                //cardOne value returned
                 cardOne = clickedCard;
                 return;
            }
            cardTwo = clickedCard;
            disableDeck = true;
            const cardOneImg = cardOne.querySelector(".card-game img").src,
                  cardTwoImg = cardTwo.querySelector(".card-game img").src;

            matchCards(cardOneImg, cardTwoImg);

        } catch (err) {
            console.log(err.message)
        }

}


function matchCards(img1, img2) {
    try {
        if (img1 === img2) { // the two img matched
            matchedCard++; //matched value +1
            // matched value is 8, the all cards matched (8*2 = 16)
            if (matchedCard == 8) {
                setTimeout(shuffleCard, 1000);
            }

            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            resetCards();
            return;

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
            resetCards();
        }, 1200); // remove shake and flip class to both cards after 1.2s
    } catch (err) {
        console.log(err.message)
    }
}

function resetCards() {
    try {
        cardOne = cardTwo = null;
        disableDeck = false;
    }catch (err) {
        console.log(err.message)
    }
}

function shuffleCard() {
    try {
        matchedCard = 0;
        cardOne = cardTwo = null;
        disableDeck = false;

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        arr.sort(() => Math.random() > 0.5 ? 1 : -1); //sort array randomly

        // remove flip class for all cards and pass random image to each card
        cards.forEach((card, index) => {
            card.classList.remove("flip");
            const imgTag = card.querySelector("img");
            imgTag.src = `assets/images/game-icons/img-${arr[index]}.png`;

            // clear and re-add eventListener
            card.addEventListener("click", flipCard);
        });
    } catch (err) {
        console.log(err.message)
    }
}


// add click efect to card
document.querySelectorAll(".card-game").forEach(card => {
    card.addEventListener("click", flipCard);
});


// confetti
const button = document.querySelector('#con-button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti()

button.addEventListener('click', () => {
  jsConfetti.addConfetti()
});

// take user back to top
const toTop = () => window.scrollTo({top:0, behaviour: 'smooth'});
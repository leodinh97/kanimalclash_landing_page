// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onload = function () {

    let sectionTwo = document.getElementById("section_2");
    let sticky = sectionTwo.offsetTop;

    let sectionFive = document.getElementById("section_5");
    let affect = sectionFive.offsetTop;
    let card1 = document.getElementById("effect-card1");
    let card2 = document.getElementById("effect-card2");
    let card3 = document.getElementById("effect-card3");
    let card4 = document.getElementById("effect-card4");
    let flash = document.getElementById("effect-flash");

    function parallax() {
        // console.log('scroll Y: ' + window.scrollY)
        // console.log('sticky: ' + sticky)
        if (window.scrollY + 12*vh >= sticky) {
            sectionTwo.classList.add("sticky");
        }
        if (window.scrollY + 12*vh < sticky) {
            sectionTwo.classList.remove("sticky");
        }
    }

    let imgCard = document.getElementById("effect-card")
    function effectCard() {
        // console.log("affect: " + affect)
        if (window.scrollY + (window.innerHeight/4) >= affect) {
            imgCard.classList.remove("effect-card-out");
            imgCard.classList.add("effect-card-in");

            card1.classList.add("effect-card1");
            card2.classList.add("effect-card2");
            card3.classList.add("effect-card3");
            card4.classList.add("effect-card4");
            flash.classList.add("effect-flash");
        }

    }

    // Script for parallax scroll
    window.onscroll = function() {
        parallax();
        effectCard();
    };

    // Script for dropdown menu change language
    document.querySelector("#dropdownLanguage button").addEventListener('click', function() {
        console.log("click");
        // document.getElementById("dropdownLanguageBtn").html(document.querySelector(this).querySelector('a').html());
    });
}


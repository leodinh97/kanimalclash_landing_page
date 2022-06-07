/* global $ */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function() {
    // window.onload = function () {

    function parallax() {
        // console.log('scroll Y: ' + window.scrollY)
        // console.log('sticky: ' + sticky)
        if ((window.scrollY + 12*vh) >= document.getElementById("section_2").offsetTop) {

            if (!document.getElementById("section_2").classList.contains("sticky")) {
                document.getElementById("section_2").classList.add("sticky")
            }
        }
        if ((window.scrollY + 12*vh) < document.getElementById("section_2").offsetTop) {
            document.getElementById("section_2").classList.remove("sticky");
        }
    }

    function effectCard() {
        // console.log("affect: " + affect)
        if (window.scrollY + (window.innerHeight/4) >= document.getElementById("section_5").offsetTop) {
            document.getElementById("effect-card").classList.remove("effect-card-out");
            document.getElementById("effect-card").classList.add("effect-card-in");

            document.getElementById("effect-card1").classList.add("effect-card1");
            document.getElementById("effect-card2").classList.add("effect-card2");
            document.getElementById("effect-card3").classList.add("effect-card3");
            document.getElementById("effect-card4").classList.add("effect-card4");
            document.getElementById("effect-flash").classList.add("effect-flash");
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
// }
});


const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");
const dice = document.getElementById("dice");
window.onload = fetchAdvice;

dice.addEventListener("click", function(){
    fetchAdvice();
});

function fetchAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}
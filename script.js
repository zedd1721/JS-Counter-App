let curVal = 0 ;
let val = document.querySelector("h1")
let incVal = document.querySelector("#inc")

incVal.addEventListener("click", function() {
    curVal++;
    val.textContent = curVal;
});

let resVal = document.querySelector("#res")

resVal.addEventListener("click", function() {
    curVal = 0;
    val.textContent = "0";
});
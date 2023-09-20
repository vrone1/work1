"use strict"

let pole1 = document.getElementById("number1");
let plus1 = document.getElementsByClassName("plus1")[0];
let minus1 = document.getElementsByClassName("minus1")[0];

plus1.addEventListener("click", function () {

    pole1.value = parseInt(pole1.value) - 1;

});

minus1.addEventListener("click", function () {
    pole1.value = parseInt(pole1.value) + 1;
});

let pole = document.getElementById("number");
let plus = document.getElementsByClassName("plus")[0];
let minus = document.getElementsByClassName("minus")[0];

plus.addEventListener("click", function () {
    if (pole.value % 2 == 0) {
        pole.value = parseInt(pole.value) - 3;
    }

    else if (pole.value % 2 != 0) {
        pole.value = parseInt(pole.value) - 4;
    }
});

minus.addEventListener("click", function () {
    if (parseInt(pole.value % 2) != 0) pole.value = parseInt(pole.value) + 4;

    else if (pole.value % 2 == 0) {
        pole.value = parseInt(pole.value) + 3;
    }
});

function myFunc1() {
    var input_taker = document.getElementById('input').value;
    document.getElementById('block').innerHTML = input_taker;
  }

function myFunc() {
    for (var j = 1, k = -1, r = document.getElementById('tbl').rows, J = r.length; j < J; j++)
        if (r[j].cells[0].innerHTML == '&nbsp;') { k = j; break }
    if (k != -1)
        r[j].cells[0].innerHTML = document.getElementById('txt').value,
            r[j].cells[1].innerHTML = document.getElementById('per').value;
    else if (j == J) alert('строк не хватило');
}
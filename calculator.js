// function addition_add() {
//     let num1 = document.getElementById("number1").value;
//     num1 = parseFloat(num1);
//     let num2 = document.getElementById("number2").value;
//     num2 = parseFloat(num2);

//     add = num1 + num2;
//     document.getElementById("result").innerHTML='Result addition=' +add;
// }

// function subtraction_sub() {
//     let num1 = document.getElementById("number1").value;
//     num1 = parseFloat(num1);
//     let num2 = document.getElementById("number2").value;
//     num2 = parseFloat(num2);

//     sub = num1 - num2;
//     document.getElementById("result").innerHTML='Result subtraction=' +sub;
// }

// function multiplication_mul() {
//     let num1 = document.getElementById("number1").value;
//     num1 = parseFloat(num1);
//     let num2 = document.getElementById("number2").value;
//     num2 = parseFloat(num2);

//     mul = num1 * num2;
//     document.getElementById("result").innerHTML='Result multiplication=' +mul;
// }

// function division_div() {
//     let num1 = document.getElementById("number1").value;
//     num1 = parseFloat(num1);
//     let num2 = document.getElementById("number2").value;
//     num2 = parseFloat(num2);

//     div = num1 / num2;
//     document.getElementById("result").innerHTML='Result division=' +div;
// }


function tinhToan(toanTu) {
    let num1 = + document.getElementById('number1').value;
    let num2 = + document.getElementById('number2').value;
    let ketqua = 0;
    switch(toanTu) {
        case '+': {
            ketqua = num1 + num2;
            break;
        }
        case '-': {
            ketqua = num1 - num2;
            break;
        }
        case '*': {
            ketqua = num1 * num2;
            break;
        }
        case '/': {
            ketqua = num1 / num2;
            break;
        }
    }
    document.getElementById('result').innerHTML = ketqua;
}
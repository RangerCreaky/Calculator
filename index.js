console.log('Calculator');
let powerCount = 0;
let screen = document.getElementById('screen');
let powerBtn = document.getElementById('powerBtn');
let htmlParse = "";
let htmlScreen = "";
// Checking whether the calculator is on or not!
powerBtn.addEventListener('click', () => {
    powerCount += 1
    console.log(`Power button is clicked ${powerCount} no. of times`);
    if (powerCount % 2 == 1) {
        powerBtn.innerHTML = `<b>OFF</b>`;
        screen.classList.add('blink');
        // screen.style.border = '2px solid blue'
    } else {
        powerBtn.innerHTML = `<b>ON</b>`;
        screen.innerHTML = '';
        htmlParse = '';
        htmlScreen = "";
        screen.classList.remove('blink');
    }
})


let button = document.querySelectorAll('.button');
for (const item of button) {
    
        // console.log("hello world");
        item.addEventListener('click' , (e)=>{
            // if power button is switched on only then the calculator should start
            if (powerCount % 2 == 1){
            // e.target is that thing which targeted 
            buttonText = e.target.innerText;
            if (buttonText == '×') {
                buttonText = '*';
                //html is that string whom we are going to parse by a string
                htmlParse += buttonText;
                htmlScreen += "×"
                screen.innerHTML = `<b>${htmlScreen}</b>`; 
            }
            else if (buttonText == '÷') {
                buttonText = '/';
                htmlParse += buttonText;
                htmlScreen += "÷"
                screen.innerHTML = `<b>${htmlScreen}</b>`;
            }
            else if (buttonText == 'C') {
                
                htmlParse = htmlParse.substring(0 , htmlParse.length-1);
                htmlScreen = htmlScreen.substring(0 , htmlScreen.length-1);
                screen.innerHTML = `<b>${htmlScreen}</b>`;
            }
            else if (buttonText == '^') {
                buttonText = '**';
                htmlParse += buttonText;
                htmlScreen += "^"
                screen.innerHTML = `<b>${htmlScreen}</b>`;
            }
            else if (buttonText == 'AC') {
                htmlParse = '';
                htmlScreen = ""
                screen.innerHTML = `<b> ${htmlScreen}</b>`;
            }
            else if (buttonText == '='){
                console.log(htmlParse);
                // console.log(eval(htmlParse));
                try {
                    screen.innerHTML = `<b>${(eval(htmlParse))}</b>`;
                } catch (error) {
                    screen.innerHTML = `<b>Syntax Error</b>`;
                    console.log(error);
                }
             }
            // else if (buttonText == "−")
            else if((buttonText != '×')&&(buttonText != '=')&&(buttonText != 'AC')&&(buttonText != '^')&&(buttonText != '√')&&(buttonText != '÷')&&(buttonText != 'ON')&&(buttonText != 'OFF')){
                htmlParse += buttonText;
                htmlScreen += buttonText
                screen.innerHTML = `<b>${htmlScreen}</b>`;
            }


        }
    })
}










































// let numberKeys = document.getElementsByClassName('numberKeys');
// let allClear = document.getElementById('allClear');
// let html = ``;

// // targeting the number keys
// let key_1 = document.getElementById('1');
// let key_2 = document.getElementById('2');
// let key_3 = document.getElementById('3');
// let key_4 = document.getElementById('4');
// let key_5 = document.getElementById('5');
// let key_6 = document.getElementById('6');
// let key_7 = document.getElementById('7');
// let key_8 = document.getElementById('8');
// let key_9 = document.getElementById('9');
// let key_0 = document.getElementById('0');
// let decimal = document.getElementById('decimal');
// let dblZero = document.getElementById('dblZero');


// // showing the numbers on the screen


// console.log('calculator is switched on');
// key_1.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 1 is clicked');
//         html += "1"
//         screen.innerHTML = `<b>${html}</b>`;
//     }

// })
// key_2.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 2 is clicked');
//         html += "2"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_3.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 3 is clicked');
//         html += "3"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_4.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 4 is clicked');
//         html += "4"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_5.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 5 is clicked');
//         html += "5"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_6.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 6 is clicked');
//         html += "6"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_7.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 7 is clicked');
//         html += "7"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_8.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 8 is clicked');
//         html += "8"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_9.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 9 is clicked');
//         html += "9"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// key_0.addEventListener('click', () => {
//     if (powerCount % 2 == 1) {
//         console.log('number 0 is clicked');
//         html += "0"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// allClear.addEventListener('click' , ()=>{
//     screen.innerHTML = '';
//     html = '';
// })
// dblZero.addEventListener('click' , ()=>{
//     if (powerCount % 2 == 1) {
//         console.log('button 00 is clicked');
//         html += "00"
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })
// decimal.addEventListener('click' , ()=>{
//     if (powerCount % 2 == 1) {
//         console.log('button . is clicked');
//         html += "."
//         screen.innerHTML = `<b>${html}</b>`;
//     }
// })

// // Targetting the operaotrs
// let add = document.getElementById('add');

// // Showing the operators in the screen
// add.addEventListener('click' , ()=>{
//     if (powerCount % 2 == 1) {
//         console.log("add is clicked");
//         html += " + ";
//         screen.innerHTML = `<b>${html}</b>`;

//     }
// })

// // Targeting the equal to sign and showing it
// let equal = document.getElementById('equal');
// let screenVal;
// equal.addEventListener('click' , ()=>{
//     screenVal = html.split(" ");
//     let m = math.evaluate(screenVal);
//     console.log(m);
//     // console.log(screenVal);


// })


























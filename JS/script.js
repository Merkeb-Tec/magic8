const form = document.forms[0];

const output = document.getElementById('output');

let x = document.getElementById('ask');
let y = document.getElementById('question');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    output.innerText = `${form.elements.question.value}`;
    x.style.display = 'none';
    y.style.display = 'none';
});

const arr = [
    arr[0] = "./images/magic8ball_1.png",
    arr[1] = "./images/magic8ball_2.png",
    arr[2] = "./images/magic8ball_3.png",
    arr[3] = "./images/magic8ball_4.png",
    arr[4] = "./images/magic8ball_5.png",
    arr[5] = "./images/magic8ball_6.png",
    arr[6] = "./images/magic8ball_7.png",
    arr[7] = "./images/magic8ball_8.png",
    arr[8] = "./images/magic8ball_9.png",
    arr[9] = "./images/magic8ball_10.png",
    arr[10] = "./images/magic8ball_11.png",
    arr[11] = "./images/magic8ball_12.png",
    arr[12] = "./images/magic8ball_13.png",
    arr[13] = "./images/magic8ball_14.png",
    arr[14] = "./images/magic8ball_15.png",
    arr[15] = "./images/magic8ball_16.png",
    arr[16] = "./images/magic8ball_17.png",
    arr[17] = "./images/magic8ball_18.png",
    arr[18] = "./images/magic8ball_19.png",
    arr[19] = "./images/magic8ball_20.png"
]


function ask() {
    const question = document.getElementById("question").value;
    if (question.length === 0) {
       document.getElementById("answers").innerHTML = "<img src =./magic8/images/magic8ball_extra.png alt=''>";
    } else {
        let random = [Math.floor(Math.random() * arr.length)];
        document.getElementById("answers").innerHTML = "<img src='" + arr[random] +" 'alt=''>";
    }
 };



//     let one = getElementById("one");
// let two = getElementById("two");
// let three = getElementById("three");
// let four = getElementById("four");
// let five = getElementById("five");
// let six = getElementById("six");
// let seven = getElementById("seven");
// let eight = getElementById("eight");


// const arr = [one,two, three,four,five,six,seven,eight];
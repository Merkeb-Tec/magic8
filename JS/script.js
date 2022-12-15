const form = document.forms[0];

const output = document.getElementById("output");

let x = document.getElementById("ask");
let y = document.getElementById("question");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.innerText = `${form.elements.question.value}`;
  x.style.display = "none";
  y.style.display = "none";
});

const images = [
    "./images/magic8ball_1.png",
    "./images/magic8ball_2.png",
    "./images/magic8ball_3.png",
    "./images/magic8ball_4.png",
    "./images/magic8ball_5.png",
    "./images/magic8ball_6.png",
    "./images/magic8ball_7.png",
    "./images/magic8ball_8.png",
    "./images/magic8ball_9.png",
    "./images/magic8ball_10.png",
    "./images/magic8ball_11.png",
    "./images/magic8ball_12.png",
    "./images/magic8ball_13.png",
    "./images/magic8ball_14.png",
    "./images/magic8ball_15.png",
    "./images/magic8ball_16.png",
    "./images/magic8ball_17.png",
    "./images/magic8ball_18.png",
    "./images/magic8ball_19.png",
    "./images/magic8ball_20.png",
  ];


const answers = document.getElementById('answers');
let randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage)

function ask() {
  const question = document.getElementById("question").value;
  if (question.length === 0) {
    alert('Please Enter a Question');
  } else {
      console.log('inside else')
      const img = document.createElement('img');
    img.src = randomImage;
      //"<img src='" + randomImage + " 'alt=''>";
      answers.appendChild(img);
  }
}

document.getElementById('ask').addEventListener('click', ask);


// function ask() {
//     const question = document.getElementById("question").value;
//     if (question.length === 0) {
//          alert('Please Enter a Question');
//          document.getElementById("answers").innerHTML = "<img src =./magic8/images/magic8ball_extra.png alt=''>";
//     } else {
//         let random = [Math.floor(Math.random() * images.length)];
//         document.getElementById("answers").innerHTML = "<img src='" + images[random] +" 'alt=''>";
//     }
//  };
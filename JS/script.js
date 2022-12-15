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
  "./images/magic8ball_1png",
  "./images/magic8ball2.png",
  "./images/magic8bal_3.png",
  "./images/magic8bal_4.png",
  "./images/magic8bal_5.png",
  "./images/magic8bll_6.png",
  "./images/magic8all_7.png",
  "./images/magicball_8.png",
  "./images/magi8ball_9.png",
  "./images/magc8ball_10.png",
  "./images/maic8ball_11.png",
  "./images/mgic8ball_12.png",
  "./images/agic8ball_13.png",
  "./imagesmagic8ball_14.png",
  "./image/magic8ball_15.png",
  "./imags/magic8ball_16.png",
  "./imaes/magic8ball_17.png",
  "./imges/magic8ball_18.png",
  "./iages/magic8ball_19.png",
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
function ask () {
    const question = document.getElementById("question").value;
    if (question.length < 1) {
        document.getElementById("answers").innerHTML = "<img src =./magic8/images/magic8ball_extra.png alt=''>";
    } else {
        let newImage = new Array();
        newImage[0] = "./magic/magic8ball_1.png"
        newImage[1] = "./magic/magic8ball_2.png"
        newImage[2] = "./magic/magic8ball_3.png"
        newImage[3] = "./magic/magic8ball_4.png"
        newImage[4] = "./magic/magic8ball_5.png"
        newImage[5] = "./magic/magic8ball_6.png"
        newImage[6] = "./magic/magic8ball_7.png"
        newImage[7] = "./magic/magic8ball_8.png"
        newImage[8] = "./magic/magic8ball_9.png"
        newImage[9] = "./magic/magic8ball_10.png"
        newImage[10] = "./magic/magic8ball_11.png"
        newImage[11] = "./magic/magic8ball_12.png"
        newImage[12] = "./magic/magic8ball_13.png"
        newImage[13] = "./magic/magic8ball_14.png"
        newImage[14] = "./magic/magic8ball_15.png"
        newImage[15] = "./magic/magic8ball_16.png"
        newImage[16] = "./magic/magic8ball_17.png"
        newImage[17] = "./magic/magic8ball_18.png"
        newImage[18] = "./magic/magic8ball_19.png"
        newImage[19] = "./magic/magic8ball_20.png"
        let random = Math.floor(Math.random()*newImage.length);
        document.getElementById("answers").innerHTML = "<img src='" + newImage[random] +" 'alt='image'>";
    }
}
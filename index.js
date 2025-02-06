var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins";
} else if (randomNumber1===randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Draw";
} else{
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins";
}

var randomSource1 = "./images/dice"+ randomNumber1 +".png";
var randomSource2 = "./images/dice"+ randomNumber2 +".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomSource1);
image2.setAttribute("src", randomSource2);

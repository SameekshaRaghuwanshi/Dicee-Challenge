var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var heading = document.querySelector("h1");
var i = Math.random() * 6 + 1;
i = Math.floor(i);
var image1 = "images/dice" + i + ".png";
img1.setAttribute("src", image1);
var j = Math.random() * 6 + 1;
j = Math.floor(j);
var image2 = "images/dice" + j + ".png";
img2.setAttribute("src", image2);
if(i>j){
  heading.innerHTML = "🚩 Player 1 win!";
}else if(j>i) {
  heading.innerHTML = "Player 2 win! 🚩";
}else{
  heading.innerHTML = "Draw!"
}

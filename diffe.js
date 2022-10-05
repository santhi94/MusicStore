var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
	  slideIndex = 1
  }
  if (n < 1) {
	  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

function changeImage(appid) {
 document.getElementById(appid).src= "yt.jpg";
 
 
}
function setDefault(appid) {
 if (appid=="ok"){
	 document.getElementById(appid).src= "ok.jpg";
 }else if (appid=="LA"){
	 document.getElementById(appid).src= "LA.jpg";
 }else if (appid=="rolling"){
	 document.getElementById(appid).src= "rolling.jpg";
 }else if (appid=="london"){
	 document.getElementById(appid).src= "london.jpg";
 }else if (appid=="joy"){
	 document.getElementById(appid).src= "joy.jpg";
 }else if (appid=="manifesto"){
	 document.getElementById(appid).src= "manifesto.jpg";
 }else if (appid=="alchemist"){
	 document.getElementById(appid).src= "alchemist.jpg";
 }else if (appid=="cortes"){
	 document.getElementById(appid).src= "cortes.jpg";
 }else if (appid=="tricky"){
	 document.getElementById(appid).src= "tricky.jpg";
 }else if (appid=="fever"){
	 document.getElementById(appid).src= "fever.jpg";
 }else if (appid=="sudno"){
	 document.getElementById(appid).src= "sudno.jpg";
 }
 
}
function showmessage(){
	var str = document.getElementById("message").value;
	alert("Your email" + str);
 }
 


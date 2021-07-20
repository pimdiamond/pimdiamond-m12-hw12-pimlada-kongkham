const places = ["Alaska","Greece", "Iceland", "Japan", "Norway", "Antarctica", "Kukenan River", "Lake Urmia","Parc de la Vanoise", "Banff National Park",];
document.getElementById("list").innerHTML = places;  

function myFunction() {
  for (let i = places.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = places[i]
    places[i] = places[j]
    places[j] = k
  }
  document.getElementById("list").innerHTML = places;
}




//slideshow
$.backstretch([
   "images/beach.jpg", 
   "images/beach2.jpg",
   "images/beach3.jpg",
   "images/beach4.jpg"
 ], {duration: 3000, transition: "fade", transitionDuration: 2000, animateFirst: false});
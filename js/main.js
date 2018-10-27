/*Við erum með eitt array með object-um í
Array með a.m.k. 10 objects
Hvert object á að hafa a.m.k. 5 property
Á síðunni á að vera input þar sem hægt er að slá inn einhvern texta
Þegar textinn er slegin inn sýjast út þær niðurstöður sem leitað er eftir 
https://community.algolia.com/instantsearch.js/v2/examples/media/ 
Þú mátt ráða hvort leitin leitar í öllum property-unum eða bara einu eða eitthvað þar á milli
Þegar komið er inn á síðuna þurfa öll gögn að sjást. 
Þ.e. öll kortin með öllum (5 mismunandi gögnum/object properties)
*/

//CARD eitt array með 5 properties
var myDiv = document.querySelector("div");

var movies = [
  {
    names: "The Wolf",
    stars: "* * * * *",
    time: "11",
    style: "Drama",
    photos: "wolf.jpg",
  },
{
    names: "Hunger Games",
    stars: "* * *",
    time: "15",
    style: "Science Fiction",
    photos: "hunger.jpg",
  },
{
    names: "IT",
    stars: "* * * *",
    time: "1",
    style: "Horror",
    photos: "it.jpg",
  },
{
    names: "The Martain",
    stars: "* * *",
    time: "19",
    style: "Science Fiction",
    photos: "martain.jpg",
  },
{
    names: "Jurassic Park",
    stars: "* * * * *",
    time: "17",
    style: "Science Fiction",
    photos: "park.jpg",
  },
{
    names: "Misery",
    stars: "* *",
    time: "21",
    style: "Drama",
    photos: "misery.jpg",
  },
{
    names: "Terminator",
    stars: "* * * *",
    time: "23",
    style: "Thriller",
    photos: "term.jpg",
  },
{
    names: "Totoro",
    stars: "* * * * *",
    time: "13",
    style: "Fantasy",
    photos: "totoro.jpg",
  },
{
    names: "Ghostbusters",
    stars: "* * * *",
    time: "15",
    style: "Comedy",
    photos: "ghost.jpg",
  },
]

for (var i = 0; i<movies.length;i++) {
   myDiv.innerHTML +=
   `
         <div class="card" style="background-color: gray;">
         <h2>${movies[i].names}</h2>
         <span>${movies[i].stars}</span>
         <p>Show: ${movies[i].time}:00</p>
         <p>Style: ${movies[i].style}</p>
         <img src="img/${movies[i].photos}"/>
         </div>
   `
}

//FORMS Search
var button = document.querySelector("button"); //arrays breytilegt milli kassa
var titleInput = document.querySelector("#titill");
var formsDiv = document.querySelector("div");

button.onclick = function search() {
  //sækja texta úr input   
  var input = document.getElementById("titill");
  var filter = input.value.toUpperCase();
  //ef það er enginn texti þá gerist ekkert
 if (filter == "") {
    return;
  }
  var cards = document.getElementsByClassName("card");
  //fyrir hverja kvikmynd:
  for (var i = 0; i<movies.length;i++) {
    //  bera saman texta of tiltil
    //  Ef titill inniheldur ekki texta:
    if (movies[i].names.toUpperCase() == filter) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";  
    }
  }
}

  
 
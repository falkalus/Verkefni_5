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


var myDiv = document.querySelector("div");
for(var i = 0; i<110; i+=5){ 
}
var myvar = 0;
while(myvar<2000){ 
   myvar+=13;      
}

//CARD
var names = ["The Wolf","Hunger Games","IT","Scareface","The Martain","Jurassic Park","Misery","Terminator","Totoro","Ghostbusters"];   //Array er leið til þess að geyma fleirri en eitt gildi í breytu.
var stars = ["* * * * *","* * *","* * * *","* * * * *","* * * *","* * * *","* *","* * *","* * * * *","* * * *"];
var time = [ 11, 13, 15, 15, 17, 19, 20, 21, 23, 1];
var style = [ "Drama","Science Fiction","Horror","Crime","Science Fiction","Science Fiction","Drama","Thriller","Fantasy","Comedy"];
var photos = ["wolf.jpg", "hunger.jpg","it.jpg","scar.jpg","martain.jpg","park.jpg","misery.jpg","term.jpg","totoro.jpg","ghost.jpg"];


for(var i = 0; i<names.length;i++){
   myDiv.innerHTML +=
   `
         <div class="card" style="background-color: gray;">
         <h2>${names[i]}</h2>
         <span>${stars[i]}</span>
         <p>Show: ${time[i]}:00</p>
         <p>Style: ${style[i]}</p>
         <img src="img/${photos[i]}"/>
         </div>
   `
}  

//FORMS
var button = document.querySelector("button"); //arrays breytilegt milli kassa
var titleInput = document.querySelector("#titill");
var formsDiv = document.querySelector("div");
function myFunction() {
var input, filter, h2, p, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    div = document.getElementByClass("card");
    h2 = h2.getElementsByTagName("h2");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

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
for(var i = 0; i<110; i+=5){ //for er fyrir hvern af einhverju
}
var myvar = 0;
while(myvar<2000){ // While á meðan my var er minna en 2000
   myvar+=13;      //þarf að vera minna en breytiþátturinn 2000 svo að endalaus loopa myndist ekki
}

//CARD
var names = ["The Wolf","Hunger Games","IT","Scareface","The Martain"];   //Array er leið til þess að geyma fleirri en eitt gildi í breytu.
var stars = ["* * * * *","* * *","* * * *","* * * * *","* * * *"];
var time = [ 11, 13, 15, 15, 17, 19, 20, 21, 23, 1];
var style = [ "Drama", "Science Fiction", "Horror"];
var photos = ["wolf.jpg", "hunger.jpg","it.jpg","scar.jpg","martain.jpg",];


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
button.onclick = function(){

	var r = Math.floor(Math.random() * photos.length);
	var d = Math.floor(Math.random() * time.length);

    formsDiv.innerHTML += `
        <div class="forms" style="background-image: url(img/red.jpg);">
        <h1>${titleInput.value}</h1>

        </div>
    `
    titleInput.value="";
}
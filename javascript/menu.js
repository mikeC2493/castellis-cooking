

function mainDishPrices(){
   var mainDishArray = ["tbonePrice","sirloinPrice","ribeyePrice","porterhousePrice", 
"salmonPrice", "tilapiaPrice", "tunaPrice", "anglerPrice", "freeRangePrice", "cagedPrice", "gmoPrice", "feralPrice"];
   for(var i=0; i<mainDishArray.length;i++){
    let thisPrice = Math.random()*500;
    let thisPriceRounded = Math.round(thisPrice);
    document.getElementById(mainDishArray[i]).innerText = "$" + thisPriceRounded;
   }
}

function sideDishPrices(){
    var sideDishArray = ["linguinePrice","farfallePrice","spaghettiPrice","zitiPrice", 
 "mashedPotatoPrice", "bakedPotatoPrice", "friedPotatoPrice", "rawPotatoPrice", "brocoliPrice", "asparagusPrice", "pumpkinPrice", "spinachPrice"];
    for(var i=0; i<sideDishArray.length;i++){
     let thisPrice = Math.random()*200;
     let thisPriceRounded = Math.round(thisPrice);
     document.getElementById(sideDishArray[i]).innerText = "$" + thisPriceRounded;
    }
 }

 function dessertPrices(){
    var dessertArray = ["applePrice","blueberryPrice","strawberryPrice","cherryPrice", 
 "bananaPrice", "birthdayPrice", "carrotPrice", "weddingPrice", "vanillaPrice", "chocolatePrice", "mintPrice", "rumRaisinPrice"];
    for(var i=0; i<dessertArray.length;i++){
     let thisPrice = Math.random()*100;
     let thisPriceRounded = Math.round(thisPrice);
     document.getElementById(dessertArray[i]).innerText = "$" + thisPriceRounded;
    }
 }

window.onload = function(){
    mainDishPrices();
    sideDishPrices();
    dessertPrices();
}
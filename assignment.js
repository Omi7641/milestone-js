// feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var output = feetToMile(500);
console.log("your mile is :",output);


// woodCalculator
function woodCalculator(chair,table,bed){
    var chaircount = chair * 1 ;
    var tablecount = table *3 ;
    var bedcount = bed *5 ;
    var totalwood = chaircount + tablecount + bedcount ;
    return totalwood ;
}
var output = woodCalculator (2,1,1);
console.log(output);


// brickCalculator
function brickCalculator(floor){
    var feet = 1;
    if(floor<=10){
        feet *=15;
        var floor1 = 1000* feet * floor;
         return floor1;
    }
    else if( floor>10){
        feet *=12;
       var floor2 = 1000* feet * floor;
       return floor2;
    }
var total = floor1 + floor2 ;
}
var total = brickCalculator(15);
console.log(total);


//tinyFriend
function tinyFriend(arr){
    var shortest = arr[0];
    for( var i=0; i < arr.length ; i++) {
        var element = arr[i];
        if( element.length < shortest.length){
           shortest= element;
        }
    }
  return shortest;
  }
var shortesetName =tinyFriend(["gouri", "mahi", "trisha", "omi"]);
console.log(shortesetName);
var safebottle= 99;
var bottles = 99;
var bottlesstepback=98;

for (bottles = 99; bottles > 0; bottles--) {
     if (bottles > 1){
    
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
    Take one down and pass it around, ${bottlesstepback} bottles of beer on the wall`);
    bottlesstepback--;
}
    else{
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
    Take one down and pass it around, ${safebottle} bottles of beer on the wall`);
}
}
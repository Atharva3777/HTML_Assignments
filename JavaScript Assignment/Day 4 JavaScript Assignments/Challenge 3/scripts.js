// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// 1st Part OF Challenge 3
const dolphins = [96,108,89];
const koalas = [88,91,110];

const dolphins_sum = dolphins[0] + dolphins[1] + dolphins[2] ;
const dolphins_avg = dolphins_sum/dolphins.length;
console.log(dolphins_avg);

const koalas_sum = koalas[0] + koalas[1] + koalas[2];
const koalas_avg = koalas_sum/koalas.length;
console.log(koalas_avg);

// 2nd Part OF Challenge 3 

if (dolphins_avg > koalas_avg){
    console.log ("Dolphins Wins the Match !!");
}else if (koalas_avg > dolphins_avg) {
    console.log ("Koalas Wins the Match !!");
}else {
    console.log ("Its a Draw !!")
}

// 3rd Part OF Challenge 3 

const dolphinsB1 = [97,112,101];
const koalasB1 = [109,95,123];

const dolphins_sumB1 = dolphinsB1[0] + dolphinsB1[1] + dolphinsB1[2] ;
const dolphins_avgB1 = dolphins_sumB1/dolphinsB1.length;
console.log(dolphins_avgB1);

const koalas_sumB1 = koalasB1[0] + koalasB1[1] + koalasB1[2];
const koalas_avgB1 = koalas_sumB1/koalasB1.length;
console.log(koalas_avgB1);

if (dolphins_avgB1 >= 100 && dolphins_avgB1 > koalas_avgB1){
    console.log ("Dolphins Wins the Match !!");
}else if (koalas_avgB1 >=100 && koalas_avgB1 > dolphins_avgB1) {
    console.log ("Koalas Wins the Match !!");
}else if(dolphins_avgB1 >=100 && koalas_avgB1 >=100 && dolphins_avgB1 === koalas_avgB1 ){
    console.log ("Its a Draw !!");
}else {
    console.log ("No one wins the match");
}


// 4th Part OF the Challenge

const dolphinsB2 = [97, 112, 101];
const koalasB2 = [109, 95, 106];

const dolphins_sumB2 = dolphinsB2[0] + dolphinsB2[1] + dolphinsB2[2] ;
const dolphins_avgB2 = dolphins_sumB2/dolphinsB2.length;
console.log(dolphins_avgB2);

const koalas_sumB2 = koalasB2[0] + koalasB2[1] + koalasB2[2];
const koalas_avgB2 = koalas_sumB2/koalasB2.length;
console.log(koalas_avgB2);

if (dolphins_avgB2 >= 100 && dolphins_avgB2 > koalas_avgB2){
    console.log ("Dolphins Wins the Match !!");
}else if (koalas_avgB2 >=100 && koalas_avgB2 > dolphins_avgB2) {
    console.log ("Koalas Wins the Match !!");
}else if(dolphins_avgB2 >=100 && koalas_avgB2 >=100 && dolphins_avgB2 == koalas_avgB2 ){
    console.log ("Its a Draw !!");
}else {
    console.log ("No one wins the match");
}




















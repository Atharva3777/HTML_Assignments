
// TEST DATA 1
const bill1 = 275;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 > 300 ? bill1 * 0.20 : 0;

console.log(`The bill was ${bill1} $, the tip was ${tip1} $, and the total value is ${bill1 + tip1} $`);


// TEST DATA 2
const bill2 = 40 ;
const tip2 = bill2 >= 50 && bill2<= 300 ? bill2 * 0.15 : bill2 >300 ? bill2 * 0.2 : 0 ;

console.log (`the bill was ${bill2} $, the tip was ${tip2} $, and the total value is ${bill2+tip2} $`);


// TEST DATA 3
const bill3 = 430 ;
const tip3 = bill3 >= 50 && bill3<= 300 ? bill3 * 0.15 : bill3 >300 ? bill3 * 0.2 : 0 ;

console.log (`the bill was ${bill3} $, the tip was ${tip3} $, and the total value is ${bill3+tip3} $`);




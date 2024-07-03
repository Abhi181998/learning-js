// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)
  

console.log("2">1);
console.log("02">1);


console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
                                    //   avoid this type of conversion
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// the reason is that an equality check == and comparisons><>< >= <= work differently
// comparisons convert null to a number treating as 0 thats why null >=0 is true
function Checkingrates(filename,rate){
const playground = require(fileName);
playground.forEach(element => {
  ratesArray = element.rates;
  ratesArray.forEach(data =>{
    const checkingAmount = Math.round(rate);
try{
if(checkingAmount>=data[0] && checkingAmount<=data[1]){
  console.log(data[2]+' rate for the'+checkingAmount);
  throw 'Error2';
}
}catch(e){

} 
  })
});


}



// const checkingAmount = Math.round(process.argv[3]);

// if(checkingAmount>=tempStorageofcurrentrates[0] && checkingAmount<=tempStorageofcurrentrates[1]){
//   console.log(tempStorageofcurrentrates[2]+' rate for the'+checkingAmount);
//   throw 'Error2';
// }

const fileName = './'+process.argv[2];
const rates = process.argv[3];
Checkingrates(fileName,rates);


const checkingAmount = Math.round(process.argv[3]);
const fileName = './'+process.argv[2];
const playground = require(fileName);
//temporary variable to store previous tiered rates value
let tempStorageofpreviousrates = 0;
//temporary variable to store current tiered rates value
let tempStorageofcurrentrates = 0;
//a variable to track (which tiered are we are in) to track error value
let trakingTieaedrates = 0;
//the diffrence between current lower to upper amount
let DiffrenceUpper_to_lower = 0;
//the diffrence between upper amount of previous  to lower amount of current
let DiffrencePreviousUpperToCurrentlowervalue = 0;
try{
  //looping through json data
playground.forEach(element =>{
  ratesArray = element.rates;
  console.log(ratesArray.length);
  //looping through each tiered rates
  ratesArray.forEach(data =>{

    trakingTieaedrates = trakingTieaedrates + 1;
    tempStorageofcurrentrates = data;
    //checking if it is first iteration(to store evrything)
    if(trakingTieaedrates === 1){
      DiffrenceUpper_to_lower = tempStorageofcurrentrates[1] - tempStorageofcurrentrates[0];
      
      //checking the first value is not zero
      if(tempStorageofcurrentrates[0]<=0){
        console.log('the first lower amount should be always grater than zero');
        console.log('check '+trakingTieaedrates+' tieredvalue');
        throw 'Error2';
      }
      //Difference upper amount to lower if its -ve then through expection
      else if(DiffrenceUpper_to_lower<0){
        console.log('the first upper amount should be always greater than lower amount');
        console.log('check '+trakingTieaedrates+' tieredvalue');
        throw 'Error2';
      }
    }else if(trakingTieaedrates>1){
      DiffrencePreviousUpperToCurrentlowervalue = tempStorageofcurrentrates[0] - tempStorageofpreviousrates[1];
      DiffrenceUpper_to_lower = tempStorageofcurrentrates[1] - tempStorageofcurrentrates[0];
      //checking Difference previous upper amount to current lower amount -ve
      if(DiffrencePreviousUpperToCurrentlowervalue>1){
        console.log('the range diffarence is restricted to 1 not accepted if geater than 1');
        console.log('check '+trakingTieaedrates+' tiered value with previous upper limit');
        throw 'Error2';
      }

      else if(DiffrencePreviousUpperToCurrentlowervalue<=0){
          console.log('the lower amount should be always greater than previous upper amount');
          console.log('check ' +trakingTieaedrates+' tieredvalue');
          throw 'Error2';
        }else if(DiffrenceUpper_to_lower<0){
          console.log('the upper value should be always greater than lower value');
          console.log('check '+  trakingTieaedrates  +' tieredvalue');
          throw 'Error2';
        }
    }
    if(checkingAmount>=tempStorageofcurrentrates[0] && checkingAmount<=tempStorageofcurrentrates[1]){
      console.log(tempStorageofcurrentrates[2]+' rate for the'+checkingAmount);
      throw 'Error2';
    }
    // console.log(tempStorageofcurrentrates);
    // console.log("next");
  tempStorageofpreviousrates = tempStorageofcurrentrates;

  // console.log(tempStorageofpreviousrates);
  
  })
})

}catch(e){
  
}

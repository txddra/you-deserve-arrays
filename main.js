/******************
 * YOUR CODE HERE *
 ******************/
function getFirstItemFrom(arr){
  return arr[0]
}

function getLastItemFrom(arr){
  return arr[arr.length -1 ]
}

function getIndex3(evenBetter){
  if(evenBetter.length > 4){

    return evenBetter[3]
      
    }else{
      return evenBetter.pop()
    }}
    
  
function isLongList(arr){
  return arr.length >= 10

1}

  function firstItemIsNumber(num){
    return typeof num[0] ==='number'

}
  
function secondCharOfThirdString(str){
  return str[2][1]
  }
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}

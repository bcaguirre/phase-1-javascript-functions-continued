// code your solution here
function saturdayFun(plans = "roller-skate"){
    return `This Saturday, I want to ${plans}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(programmer){
   const innerFunction = function(overThinker = "special"){
return `You are ${programmer}${overThinker}${programmer}!`;
   }
   return innerFunction
}
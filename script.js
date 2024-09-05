/*
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let x = document.querySelector('.x');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let minus = document.querySelector('.minus');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let  plus = document.querySelector('.plus');
let zero= document.querySelector('.zero');
let dot = document.querySelector('.dot');
let multi = document.querySelector('.multi');
let division = document.querySelector('.divi');
let ac = document.querySelector('.ac');
let lcb = document.querySelector('.lcb');
let rcb = document.querySelector('.rcb');
let equal = document.querySelector('.equal');






function calculation(){
  
 


  let displayMain = document.querySelector('.disMain');

  displayMain.innerText =  displayMain.innerText + seven.innerText;

  return displayMain.innerText;


}*/









let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let x = document.querySelector('.x');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let minus = document.querySelector('.minus');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let  plus = document.querySelector('.plus');
let zero= document.querySelector('.zero');
let dot = document.querySelector('.dot');
let multi = document.querySelector('.multi');
let division = document.querySelector('.divi');
let ac = document.querySelector('.ac');
let lcb = document.querySelector('.lcb');
let rcb = document.querySelector('.rcb');
let equal = document.querySelector('.equal');



let preValue;

function calculation7(){

    let displayMain = document.querySelector('.disMain');

     preValue = displayMain.innerText;
    
    


  
    displayMain.innerText =  displayMain.innerText + seven.innerText;
  
    
    let disSec = document.querySelector('.disSecond');
  
  disSec.innerText = displayMain.innerText;
  
    return preValue, displayMain.innerText;
}


function calculation8(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + eight.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation9(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + nine.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationx(){

  let displayMain = document.querySelector('.disMain');

    
  

  displayMain.innerText = displayMain.innerText.slice(0, -1);

 
  let disSec = document.querySelector('.disSecond');


disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation4(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + four.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation5(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + five.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation6(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + six.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationMinus(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + minus.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation1(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + one.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation2(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + two.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation3(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + three.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationPlus(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + plus.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculation0(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + zero.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationDot(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + dot.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationMulti(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + multi.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationDivi(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + division.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationAc(){

  let displayMain = document.querySelector('.disMain');


  displayMain.innerText = '';

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationLcb(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + lcb.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationRcb(){

  let displayMain = document.querySelector('.disMain');
  preValue = displayMain.innerText;

  displayMain.innerText =  displayMain.innerText + rcb.innerText;

  
  let disSec = document.querySelector('.disSecond');

disSec.innerText = displayMain.innerText;

  return displayMain.innerText;
}

function calculationEqual(){

  let displayMain = document.querySelector('.disMain');

  let disSec = document.querySelector('.disSecond');
 
  
  let result = eval(displayMain.innerText);

  disSec.innerText = displayMain.innerText + equal.innerText + result;
  preValue = displayMain.innerText;

  displayMain.innerText = eval( displayMain.innerText);



  return displayMain.innerText;
}
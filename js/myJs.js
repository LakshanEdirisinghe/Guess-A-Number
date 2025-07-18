function test() {
  
  let randomNum =(Math.floor(Math.random()*10)+1);

  let inputLine = document.getElementById("inputData");
  let datafromInputLine=inputLine.value;
  document.getElementById("colo").style.color="white";

  if(randomNum===parseInt(datafromInputLine)){
    document.getElementById("colo").style.backgroundColor="Green";
    document.getElementById("displayText").innerHTML="You Win";
  }else{
    document.getElementById("colo").style.backgroundColor="Red";
    if(randomNum>parseInt(datafromInputLine)){
      
      document.getElementById("displayText").innerHTML="Number is greter than computer's thought number ";
    }else{
      document.getElementById("displayText").innerHTML="Number is lower than computer's thought number ";
    }
  }

  //console.log(randomNum);
  


}
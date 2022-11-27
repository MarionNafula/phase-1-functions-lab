// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
           if (someValue < 42){
                      return(42-someValue);
           }
           else{
                      return(someValue-42)
           }
}
function distanceFromHqInFeet(distance){
           return Math.abs(distanceFromHqInBlocks(distance)*264);
}
function distanceTravelledInFeet(a, b){
           return Math.abs((a-b)*264);
}
function calculatesFarePrice(start, destination){
           let distance = distanceTravelledInFeet(start, destination);
           if (distance <=400){
                      return 0
           }
           if (distance >= 400 && distance <=2000){
                      return (distance-400)*0.02;
           }
           else if(distance >=2000 && distance <= 2500){
                      return 25;
           }
           else if (distance > 2500) {
                      return 'cannot travel that far';
           }
}
           
         
          
          
           


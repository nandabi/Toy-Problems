checkSpeed(80); // Enter speed here to check its demerit points.


// var a = "speeed please "
// var checkSpeed = prompt(a)

function checkSpeed(speed) {

    const speedLimit = 70;
    
    const interval = 5;
// checks to see if current speed is less than speed limit
    if (speed < speedLimit + interval) 

console.log("okay");

else {
//  checks to see of demerit points are >=12
const demerit = Math.floor((speed - speedLimit) / interval); 

if (demerit >=12)
//  print if points are >=12
console.log("Licence Suspended");

else
//  total number of demerit points
console.log("Demerit Points" , demerit); 

}

}
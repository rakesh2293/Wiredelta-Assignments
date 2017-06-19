
//Calculate Age Script//

function submitCalculateage() {                                 //submitCalculateage function open it gives accurate birth age 

    var birth = document.getElementById("birthDate").value;     //birth year input value
    var curr = document.getElementById("currentdate").value;    //current year input value


    if (!/^[0-9]+$/.test(birth)) {                             //birth year form validation
        alert("BirthDate must be filled out with  number");
        return false;
    }
    if (!/^[0-9]+$/.test(curr)) { //current year form validation
        alert("Currentdate must be filled out with  number");
        return false;
    }

    var calculate = calculateAge(birth, curr);                  //calculateage function call
    document.getElementById("age1").innerHTML = calculate;      //output
    document.getElementById("agec").innerHTML = calculate - 1;
}                                                               //submitCalculateage function close

var currentTime = new Date();
var year = currentTime.getFullYear();
var result5 = calculateAge(1993, currentTime.getFullYear());

var result1 = calculateAge(1990, 2017);                         //calling function 3 times
var result2 = calculateAge(1995, 2016);
var result3 = calculateAge(1965, 2010);


document.getElementById("result11").innerHTML = result1;        //output of calling function
document.getElementById("result12").innerHTML = result1 - 1;
document.getElementById("result21").innerHTML = result2;
document.getElementById("result22").innerHTML = result2 - 1;
document.getElementById("result31").innerHTML = result3;
document.getElementById("result32").innerHTML = result3 - 1;
document.getElementById("cresult").innerHTML = result5;
document.getElementById("cresult1").innerHTML = result5 - 1;

function calculateAge(birthYear, currYear) {                    //calculateage function gives a correct birthage with validation
    if (birthYear > year) {
        alert("input error")
        
    } else {
        
        var calculate = currYear - birthYear;
        return calculate;
    }

}                                                              // calculate function close


//Temperature Convertor Script//

function submitTemperaturef() {                                 //submitTemperaturef function converts fahrenheit to celsius
    var fahre = document.getElementById("fahre").value;         //input value for fahrenheit
    if (!/^[0-9]+$/.test(fahre)) {                              //form validation of fahrenheit
        alert("Fahrenheit value must be filled out with  number");
        return false;
    }
    var far = (fahre - 32) * 5 / 9;                             //formula for calculate fahrenheit to celsius
    document.getElementById("fouput").innerHTML = far.toFixed(2);//output
}                                                               //submitTemperaturef function close

function submitTemperaturec() {                                 //submitTemperaturec function converts celsius to fahrenheit
    var cels = document.getElementById("cels").value;           //input value for celsius
    if (!/^[0-9]+$/.test(cels)) {                               //form validation of celsius
        alert("Celsius value must be filled out with  number");
        return false;
    }
    var cel = (cels * 9 / 5) + 31                               //formula for calculate celsius to fahrenheit
    console.log(cel);
    document.getElementById("coutput").innerHTML = cel.toFixed(2);//output
}                                                               //submitTemperaturef function close


//LIFE TIME SUPPLY Script//
var lifeExpectedyear11 = 75;
function submitCalculator() {                                   //submitCalculator function give amount of Life time supply 
    
    var age = document.getElementById("age").value;             //input value for age
    var amount = document.getElementById("amount").value;       //input value for amount
    if (!/^[0-9]+$/.test(age)) {                                //form validation of age
        alert("Age must be filled out");
        return false;
    }
    if (!/^[0-9]+$/.test(amount)) {                             //form validation of amount
        alert("Amount Per Day must be filled out with  number");
        return false;
    }

    var calculatedAge = calculateSupply(age, amount);           //calculateSupply function call
    document.getElementById("output").innerHTML = calculatedAge.toFixed(0); //output
    document.getElementById("output1").innerHTML = lifeExpectedyear11;
}
var resultc1 = calculateSupply(23, 2.5);                        //callind gunction 3 times
var resultc2 = calculateSupply(22, 2);
var resultc3 = calculateSupply(19, 3);


document.getElementById("resulta").innerHTML = resultc1;        //out put
document.getElementById("resulta1").innerHTML = lifeExpectedyear11;
document.getElementById("resultb").innerHTML = resultc2;
document.getElementById("resultb1").innerHTML = lifeExpectedyear11;
document.getElementById("resultc").innerHTML = resultc3;
document.getElementById("resultc1").innerHTML = lifeExpectedyear11;

function calculateSupply(age, amount) {                         //calculateSupply function call give amount of Life time supply 
    var n = new Date().getFullYear();
    var lifeExpectedyear = 75;                                  //fixed age
    var noOfyearsLeftForUser=lifeExpectedyear - age;               //noOfyearsLeftForUser 
    var fixedage1 = n + noOfyearsLeftForUser;                       //fixedage for leap years
    var a = [];
    var count = 0;
    for (var i = n; i <= fixedage1; i++) {
        a.push(i);                                              //age push to empty array
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 4 == 0) {
            count++; //leapyear calculate
        }
    }
    var diff = (((lifeExpectedyear - age) * 365 * amount) + count); //formula 
    return diff;
}                                                                   //calculateSupply function close


//THE CIRCLE PROPERTIES script//

var pi = 3.147;                                                 // global  variable pi
function submitGemotric() {                                     //submitGemotric function it gives properties of circle ie circumfrence and area
    var radius = document.getElementById("radius").value;       //input value for radius
    if (!/^[0-9]+$/.test(radius)) {                             //form validation of radius
        alert("Radius of circle must be filled out with  number");
        return false;
    }
    var cir = calcCircumfrence(radius);                         //calling calcCircumfrence function with parameter radius
    var area = calcArea(radius);                                //calling calcArea function with parameter radius
    document.getElementById("circumfrence").innerHTML = cir.toFixed(2); //output of Circumfrence
    document.getElementById("area").innerHTML = area.toFixed(2); //output of Area
} //submitGemotric function close

function calcCircumfrence(radius) {                         //calcCircumfrence function gives circumfernece of circle
    var cir = (2 * pi * radius);                            //formula
    return cir;
}                                                           //calcCircumfrence function gives area of circle

function calcArea(radius) {                                 //calcArea function open
    var area = (pi * (radius * radius));                    //formula
    return area;
}                                                           //calcArea function close

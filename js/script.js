function submitCalculateage() {

    var birth = document.getElementById("birthDate").value;
    var curr = document.getElementById("currentdate").value;
    if (birth == "") {
        alert("BirthDate must be filled out");
        return false;
    }
    if (curr == "") {
        alert("Currentdate must be filled out");
        return false;
    }
    var calculate = calculateAge(birth, curr);
    document.getElementById("age1").innerHTML = calculate;
    document.getElementById("agec").innerHTML = calculate - 1;
}

function calculateAge(birthYear, currYear) {
    var calculate = currYear - birthYear;
    //var diff1=diff-1;
    return calculate;
}

function submitTemperaturef() {
    var fahre = document.getElementById("fahre").value;
    if (fahre == "") {
        alert("Fahrenheit value must be filled out");
        return false;
    }
    var far = (fahre - 32) * 5 / 9;
    console.log(far);
    document.getElementById("fouput").innerHTML = far;
}

function submitTemperaturec() {
    var cels = document.getElementById("cels").value;
    if (cels == "") {
        alert("Celsius value must be filled out");
        return false;
    }
    var cel = (cels * 9 / 5) + 31
    console.log(cel);
    document.getElementById("coutput").innerHTML= cel;

}

function submitCalculator() {
    var age = document.getElementById("age").value;
    var amount = document.getElementById("amount").value;
     if (age == "") {
        alert("Age must be filled out");
        return false;
    }
    if (amount == "") {
        alert("Amount Per Day must be filled out");
        return false;
    }

    var calculatedAge = calculateSupply(age, amount);
    document.getElementById("output").innerHTML = calculatedAge;
    document.getElementById("output1").innerHTML = age;
}

function calculateSupply(age, amount) {
    var n = new Date().getFullYear();
    var lifeExpectedyear = 75;
    var fixedage1 = n + lifeExpectedyear;
    var a = [];
    var count = 0;
    for (var i = n; i <= fixedage1; i++) {
        a.push(i);
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 4 == 0) {
            count++;
        }
    }
    var diff = (((lifeExpectedyear - age) * 365 * amount) + count);
    return diff;
}

var pi = 3.147;

function submitGemotric() {

    var radius = document.getElementById("radius").value;
    if (radius == "") {
        alert("Radius of circle must be filled out");
        return false;
    }
    var cir = calcCircumfrence(radius);
    var area = calcArea(radius);
    document.getElementById("circumfrence").innerHTML = cir;
    document.getElementById("area").innerHTML= area;
}

function calcCircumfrence(radius) {
    var cir = (2 * pi * radius);
    return cir;
}

function calcArea(radius) {
    var area = (pi * (radius * radius));
    return area;
}

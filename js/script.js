function submitCalculateage() {
    alert("Working")
    var birth = document.getElementById("birthDate").value;
    var curr = document.getElementById("currentdate").value;
    var calculate = calculateAge(birth, curr);
    document.getElementById("age1").value = calculate;
    document.getElementById("agec").value = calculate + 1;
}

function calculateAge(birthYear, currYear) {
    var calculate = currYear - birthYear;
    //var diff1=diff-1;
    return calculate;
}

function submitTemperaturef() {
    var fahre = document.getElementById("fahre").value;
    var far = (fahre - 32) * 5 / 9;
    console.log(far);
    document.getElementById("fouput").value = far;
}

function submitTemperaturec() {
    var cels = document.getElementById("cels").value;
    var cel = (cels * 9 / 5) + 31
    console.log(cel);
    document.getElementById("coutput").value = cel;

}

function submitCalculator() {
    alert("Working")
    var age = document.getElementById("age").value;
    var amount = document.getElementById("amount").value;

    var calculatedAge = calculateSupply(age, amount);
    document.getElementById("output").value = calculatedAge;
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
    alert("Working")
    var radius = document.getElementById("radius").value;
    var cir = calcCircumfrence(radius);
    var area = calcArea(radius);
    document.getElementById("circumfrence").value = cir;
    document.getElementById("area").value = area;
}

function calcCircumfrence(radius) {
    var cir = (2 * pi * radius);
    return cir;
}

function calcArea(radius) {
    var area = (pi * (radius * radius));
    return area;
}

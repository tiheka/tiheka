var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;
    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else {
        document.getElementById('cool').classname = 'cool';
    }
};
var sayMyName = function (name) {
    alert('my name is: '+name);
};
var car = {type: "land rover", 
color:"green", 
isTurnedOn: false, 
numberOfWheels: 4, 
seats: [
'seat 1',
'seat 2',
'seat 3',
'seat 4',
'seat 5',
'seat 6',
'seat 7',
],
turnOn: function () {
    this.isTurnedOn = true;
},
fly: function () {
    alert('fly');
},
switchCar: function (isOn){
    console.log('turn car' +isOn);
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
};
document.getElementById("demo").innerHTML = "the car type is " + car.color + " " + car.type;
console.log('hello there');
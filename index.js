// defining the maximum date that you can choose by getting the today date.
let maxDay = new Date().getDate();
let maxMonth = new Date().getMonth()+1;

if(maxDay.toString().length < 2)
    maxDay = "0" + maxDay.toString();

if(maxMonth.toString().length < 2)
    maxMonth = "0" + maxMonth.toString();

document.getElementById("myDate").max = `${new Date().getFullYear()}-${maxMonth}-${maxDay}`;

document.getElementById("calculateBtn").onclick = function(){

let birthDate = document.getElementById("myDate").value;

let year = Number(birthDate.slice(0,4));
let month = Number(birthDate.slice(5,7));
let day = Number(birthDate.slice(8,10));

const date = new Date();

let todayDay = date.getDate();
let todayMonth = date.getMonth() +1;
let todayYear = date.getFullYear();

let calcMonth =0;
let calcYear =0;

//logic of the calculation: (Today_Date) - (Birth_Date) 
// calculating day
if(todayDay>=day){
    calcDay = todayDay-day;
}
else{
    todayDay += 30;
    todayMonth -= 1;
    calcDay = todayDay-day;
    
}

//Calculating month

if(todayMonth>=month){
    calcMonth = todayMonth-month;
}
else{
    todayMonth += 12;
    todayYear -= 1;
    calcMonth = todayMonth-month;
}
//Calculating year
calcYear = todayYear - year;

document.getElementById("result").innerHTML =("عمرك: " + calcYear + " سنة" +" و" + calcMonth + " شهر" + " و" + calcDay+ " يوم");

}
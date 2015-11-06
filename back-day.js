
var time = new Date();

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

console.log("so ngay trong thang",daysInMonth(10,2015));


function backDay(backday){
    if(backday >= daysInMonth(time.getMonth(),time.getFullYear())){

    }else{

    }
}
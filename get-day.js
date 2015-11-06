var time = new Date();
var thu = time.getDay();

console.log("thứ"+ thu  +" trong tháng ");

var month = time.getMonth();
console.log("thang trong nam ", month+1);

var year = time.getFullYear();

console.log("nam ",  year);

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

var item = daysInMonth(12,2015);

console.log("so ngay trong thang",item);
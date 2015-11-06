var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var router = express.Router();

//function cutWord(data){
//    var arr = [];
//    var itemWord = "";
//    data = data + " ";
//    for (i in data ) {
//        //console.log(i);
//        if(data[i] == " "){
//            arr.push(itemWord);
//            itemWord = "";
//        }else {
//            itemWord = itemWord + data[i];
//        }
//    }
//    return arr;
//}



//app.get('/', function(req, res){
//    req.send("hello work");
//});

// request url : http://localhost:3000/crawler/02-11-2015
router.get('/crawler/:day',function(req, res){
    var day = req.params.day.replace(/(?:-)/g, '/');
    //url = 'http://ketqua.net/in.php?type=mb&ngay=02/11/2015';
    url = 'http://ketqua.net/in.php?type=mb&ngay='+ day;
    request(url, function(error, response, html){

        if(!error){

            var $ = cheerio.load(html);
            var data_soxo = [];
            var ngay = {}
            var soxo = {};

            soxo.dacbiet = $('.span-10 .bo9y tbody td[colspan="12"]')[0].children[0].data;

            soxo.nhat = $('.span-10 .bo9y tbody td[colspan="12"] ')[1].children[0].data;

            soxo.nhi1 = $('.span-10 .bo9y tbody td[colspan="6"] ')[0].children[0].data;
            soxo.nhi2 = $('.span-10 .bo9y tbody td[colspan="6"] ')[1].children[0].data;

            soxo.ba1 = $('.span-10 .bo9y tbody td[colspan="4"] ')[0].children[0].data;
            soxo.ba2 = $('.span-10 .bo9y tbody td[colspan="4"] ')[1].children[0].data;
            soxo.ba3 = $('.span-10 .bo9y tbody td[colspan="4"] ')[2].children[0].data;
            soxo.ba4 = $('.span-10 .bo9y tbody td[colspan="4"] ')[3].children[0].data;
            soxo.ba5 = $('.span-10 .bo9y tbody td[colspan="4"] ')[4].children[0].data;
            soxo.ba6 = $('.span-10 .bo9y tbody td[colspan="4"] ')[5].children[0].data;

            soxo.bon1 = $('.span-10 .bo9y tbody td[colspan="3"] ')[0].children[0].data;
            soxo.bon2 = $('.span-10 .bo9y tbody td[colspan="3"] ')[1].children[0].data;
            soxo.bon3 = $('.span-10 .bo9y tbody td[colspan="3"] ')[2].children[0].data;
            soxo.bon4 = $('.span-10 .bo9y tbody td[colspan="3"] ')[3].children[0].data;

            soxo.nam1 = $('.span-10 .bo9y tbody td[colspan="4"] ')[6].children[0].data;
            soxo.nam2 = $('.span-10 .bo9y tbody td[colspan="4"] ')[7].children[0].data;
            soxo.nam3 = $('.span-10 .bo9y tbody td[colspan="4"] ')[8].children[0].data;
            soxo.nam4 = $('.span-10 .bo9y tbody td[colspan="4"] ')[9].children[0].data;
            soxo.nam5 = $('.span-10 .bo9y tbody td[colspan="4"] ')[10].children[0].data;
            soxo.nam6 = $('.span-10 .bo9y tbody td[colspan="4"] ')[11].children[0].data;

            soxo.sau1 = $('.span-10 .bo9y tbody td[colspan="4"] ')[12].children[0].data;
            soxo.sau2 = $('.span-10 .bo9y tbody td[colspan="4"] ')[13].children[0].data;
            soxo.sau3 = $('.span-10 .bo9y tbody td[colspan="4"] ')[14].children[0].data;

            soxo.bay1 = $('.span-10 .bo9y tbody td[colspan="3"] ')[4].children[0].data;
            soxo.bay2 = $('.span-10 .bo9y tbody td[colspan="3"] ')[5].children[0].data;
            soxo.bay3 = $('.span-10 .bo9y tbody td[colspan="3"] ')[6].children[0].data;
            soxo.bay4 = $('.span-10 .bo9y tbody td[colspan="3"] ')[7].children[0].data;

            ngay[day] = soxo;
            data_soxo.push(ngay);
            console.log("+++",data_soxo);
            res.send(data_soxo);
        }
    });
});

app.use('/', router);

app.listen('3000');
console.log('Magic happens on port 3000');
exports = module.exports = app;



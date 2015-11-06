var request = require('request');
var cheerio = require('cheerio');
var fs = require("fs");
var jsonfile = require('jsonfile')

var file = './data.json';
var link = 'http://ketqua.net/in.php?type=mb&ngay=';

function crawler_day(day){


    url = link + day;
    console.log("====",url);
    request(url, function(error, response, html){
        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            //fs.writeFile('./'+Date()+'soxo.html',html);
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
            //  console.log("+++",data_soxo);

            jsonfile.readFile(file, function(err, obj) {
                //console.dir(typeof obj)
                if(obj){
                    obj.push(ngay);
                    //console.dir(obj);
                    jsonfile.writeFile(file, obj, function (err) {
                        console.error(err)
                    });
                }else{
                    jsonfile.writeFileSync(file, data_soxo);
                }
            });
        }
    });
}

//console.log("+++++",crawler_day('03/11/2015'));

for (var i = 1; i < 10; i++){
    var item = '0'+i+'/10/2015';
    crawler_day(item);
}
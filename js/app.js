// var link='https://openweathermap.org/data/2.5/weather?q=Kabul&appid=';

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Kabul&units=metric&appid=f15d8c2958b29bc98d15e51675291134",function (data) {
    
    // var icon = "http://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);//tempeture
    var weather = data.weather[0].main; //weather status
    
    var wind = data.wind.speed;
    var cloud = data.clouds.all;
    var pres = data.main.pressure;

    //and now you can set these valus to htmls

        switch (data.weather[0].icon) {
            case '01d':
                var ico = "img/day.svg";
                break;
            case '01n':
                var ico = "img/night.svg";
                break;
            case '02d':
                var ico = "img/cloudy-day-2.svg";
                break;
             case '02n':
                var ico = "img/cloudy-night-2.svg";
                break;
                case '03d':
                    var ico = "img/cloudy.svg";
                    break;
                    
                case '03n':
                    var ico = "img/cloudy.svg";
                        break;
                case '04d':
                    var ico = "img/cloudy-day-3.svg";
                    break;     
                case '04n':
                    var ico = "img/cloudy-day-3.svg";
                    break;     
                                
                case '09d':
                    var ico = "img/rainy-2.svg";
                    break;
                case '09n':
                    var ico = "img/rainy-4.svg";
                    break;
                
                    case '10d':
                var ico = "img/rainy-3.svg";
                break;

                case '10n':
                    var ico = "img/rainy-6.svg";
                    break;

                case '11d':
                    var ico = "img/thunder.svg";
                    break;

                case '11n':
                    var ico = "img/thunder.svg";
                    break;
                case '13d':
                    var ico = "img/snowy-3.svg";
                    break;
                case '13n':
                    var ico = "img/snowy-6-3.svg";
                    break;
            default:
                var ico ='';
                break;
        }


    $(".icon").attr('src',ico);
    $(".degree").prepend(temp);
    $(".weather-status").append(weather);
    $("#wind").prepend(wind);
    $("#cloud").prepend(cloud);
    $("#pres").prepend(pres);

});



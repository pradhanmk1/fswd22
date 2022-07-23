function getWeather(){

    // create a request object
    let req = new XMLHttpRequest();
    // set the request type and URL
    let locationT = document.getElementById('locationText').value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${locationT}&appid=93f26e3c57081a6210de53b8dcfdfea4`
    req.open('GET',url,true);

    //onload of request
    req.onload = function(){
        if(req.status>=200 && req.status <400){
            //get the information
            let data = JSON.parse(req.responseText);
            console.log(data);
            console.log(data.main.temp-273.15);
            let ctemp =data.main.temp-273.15;
            let Currdate=new Date(data.dt * 1000);
            const icon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + "@2x.png"
            document.getElementById('wdate').textContent =Currdate;
            document.getElementById('wdate').style.backgroundColor = "yellow";
            document.getElementById('loca').textContent = data.name+" , "+data.sys.country;
            document.getElementById('loca').style.color = "blue";
            console.log(data.name);
            document.getElementById("imageid").src=icon;
            document.getElementById('weather').textContent = data.weather[0].description;
            document.getElementById('temp').textContent = "Temperature: "+Math.floor(ctemp)+"℃" ;
            document.getElementById('windspeed').textContent = "Wind Speed: "+data.wind.speed;
            document.getElementById('pressure').textContent = "Pressure: "+data.main.pressure+"hPa";
            document.getElementById('humidity').textContent = "Humidity: "+data.main.humidity+"%";
            document.getElementById('visibility').textContent = "Visibility: "+data.visibility/1000+"Km";
            
            //http://openweathermap.org/img/w/09d.png
            console.log(data.weather[0].icon);
        }
    }
    //send the request
    req.send();

    // message on error 
    req.onerror = function() {
        console.log("Error!!")
    }
}
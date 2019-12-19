var cities = [""];
 
 $("#run-search").on("click", function(){
     event.preventDefault()
    var city = $("#search-value").val();
    // queryURL is the url we'll use to query the API//
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=a12313c51c2009dc1f1a2d65537b6ca5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(x) {
      var data = x
      console.log(data)
      console.log(data.name)
      console.log(data.main.temp)
        
    
        
           var name = $("<p>").text(data.name)
           var temperature = $("<p>").text(data.main.temp);
           var humid = $("<p>").text(data.main.humidity);
           var wind = $("<p>").text(data.wind.speed);
           var lat = (data.coord.lat);
           var lon =(data.coord.lon);
           var today =  new Date().toLocaleDateString()
           var icon = data.weather[0].icon
           var iconURL = "https://openweathermap.org/img/wn/"+icon+".png"
          
    
           $("#display-name").append(name,today, $("<img>").attr("src",iconURL))
           $("#display-temp").append(temperature);
           $("#display-humidity").append(humid);  
           $("#display-windspeed").append(wind);
           

        var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat="+ lat +"&lon="+ lon +"&APPID=a12313c51c2009dc1f1a2d65537b6ca5";
           $.ajax({
            url: uvURL,
            method: "GET"
        }).then(function(y) {
            var weth = y.value 
        
            $("#display-uv").append(weth)


        var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&APPID=a12313c51c2009dc1f1a2d65537b6ca5"

        
        $.ajax({
            url: fiveDayURL,
            method: "GET"
        }).then(function(z) {
            var five = z
            n=0
            for (var i =0;i<5;i++ ){
                var icon2 = five.list[n].weather[0].icon
                var fiveIconURL = "https://openweathermap.org/img/wn/"+icon2+".png"
                var date =new Date(five.list[n].dt_txt).toLocaleDateString()
                var temp = $("<p>").text("Temp: "+five.list[n].main.temp)
                var hum = five.list[n].main.humidity

           n+=8





        }})
        
        
        
       
       
       
       
       
        })











    });
    
 });

 /*var forecast = ["cities"];

 $("#forecast").on("click", function(){
    event.preventDefault()
   var forecast = $("#search-value").val();
   // queryURL is the url we'll use to query the API//
   var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + forecast + "&units=imperial&APPID=a12313c51c2009dc1f1a2d65537b6ca5";
*/
  


  

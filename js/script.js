

window.onload = function(){
	getWeatherByCity("Bologna");
}

$(function(){
	$("#request").submit(function(){
		getWeatherByCity( $("#city").val() );
		return false;
	});

	$("#state-icon").attr( "onerror", "$(this).hide()" );
});

function getWeatherByCity( request ){
	var key = "6024503a1be922dca612b4abab7fd803";
	var apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=" + key + "&units=metric&lang=it&q=";


	function assign( data ){
		$("#city-name").html( data.name );
		$("#country").html( data.sys.country );
		$("#city-id").html( data.sys.id );
		$("#state").html( data.weather[0].description );
		$("#temp").html( data.main.temp + "°C" );
		$("#temp-max").html( data.main.temp_max + "°C" );
		$("#temp-min").html( data.main.temp_min + "°C" );
		$("#humidity").html( data.main.humidity + "%" );
		$("#pressure").html( data.main.pressure + " hpa" );
		$("#visibility").html( data.visibility );
	
		$("#lat").html( data.coord.lat );
		$("#lon").html( data.coord.lon );
	
		var sunrise = new Date( data.sys.sunrise * 1000 ) ;
		var sunset = new Date( data.sys.sunset * 1000 );
	
		$("#sunrise").html( sunrise.getHours() + ":" + sunrise.getMinutes() + ":" + sunrise.getSeconds() );
		$("#sunset").html( sunset.getHours() + ":" + sunset.getMinutes() + ":" + sunrise.getSeconds() );
	
		$("#speed").html( data.wind.speed + " m/s" );
		$("#deg").html( data.wind.deg + "°" );
	}

//MODALE

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});


	$.ajax({
		dataType: "json",
		url: apiUrl + request,
		data: "",
		success: function(){ console.log("meteo360@> Request Completed") },
		statusCode: {
			404: function(){
				modalBg.classList.add('bg-active');
			}
		}
	});


	$.getJSON( apiUrl + request,  function( data ){
		assign(data);
	});
}

//BACKGROUND

function changeBackground(image, state) {
    var day = image.indexOf("d");

    if (state === 'Cielo Sereno') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'clear sky') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'few clouds') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'few clouds') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'scattered clouds') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'scattered clouds') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'broken clouds') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'broken clouds') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'shower rain') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'shower rain') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'rain') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'rain') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'thunderstorm') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'thunderstorm') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'snow') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'snow') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day > -1 && weather == 'mist') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    } else if (day == -1 && weather == 'mist') {
      $('body').css("background-image", "url(/Users/darioorlandi/Desktop/meteo/img/gocce.jpg)");
    }

  }

  if (fTemp >= 100) {
	$(".container").css("background-image", "url(https://s2.postimg.org/6ss6kyuhl/yamaha_yzf_r1-wallpaper-1024x768.jpg)");
} else if (fTemp > 90) {
	$(".container").css("background-image", "url(https://s2.postimg.org/lapdsz8y1/beyonce_knowles_2-wallpaper-1024x768.jpg)")
} else if (fTemp > 80) {
	$(".container").css("background-image", "url(https://s2.postimg.org/i54s2ennd/Beyonce_in_Jamaica.jpg)")
} else if (fTemp > 70) {
	$(".container").css("background-image", "url(https://s2.postimg.org/t4pzebr0p/golf_course_landscape-wallpaper-1024x768.jpg)")
} else if (fTemp > 60) {
	$(".container").css("background-image", "url()")
} else if (fTemp > 50) {
	$(".container").css("background-image", "url(https://s2.postimg.org/8xcjlpoax/rihanna_9-wallpaper-1024x768.jpg)")
} else if (fTemp > 37.40) {
	$(".container").css("background-image", "url(https://s2.postimg.org/8xcjlpoax/rihanna_9-wallpaper-1024x768.jpg)")
} else if (fTemp > 30) {
	$(".container").css("background-image", "url(https://s2.postimg.org/nhtmgb6c9/white_snowy_road-wallpaper-1024x768.jpg)")
} else if (fTemp > 20) {
	$(".container").css("background-image", "url(https://s2.postimg.org/9a3xrntnd/rihanna_dior_sunglasses-wallpaper-1024x768.jpg)")
} else if (fTemp > 10) {
	$(".container").css("background-image", "url()")
} else if (fTemp > 0) {
	$(".container").css("background-image", "url(https://s2.postimg.org/r05mdaf49/snowy_cabin_mountains_winter-wallpaper-1024x768.jpg)")
} else if (fTemp > -10) {
	$(".container").css("background-image", "url(https://s2.postimg.org/7v2d3i5l5/skiing-wallpaper-1024x768.jpg)")
}







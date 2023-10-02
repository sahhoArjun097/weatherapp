const apikey="5e8304fa9a03c1cc95d00d4815e23c82";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".container input");
const searchbtn= document.querySelector(".container button");
const weathericon = document.querySelector(".atm");
async function checkweather(city){
    const response =await fetch(apiurl +  city +`&appid=${apikey}`);
    var data= await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed  + "km/hr";
    
    
    if(data.weather[0].main == "Clouds"){
     weathericon.src ="images/clouds.png";
    }
     else if (data.weather[0].main == "Drizzle"){
        weathericon.src ="images/drizzle.png";
       }
     else if (data.weather[0].main == "Clear"){
        weathericon.src ="images/clear.png";
       
       }
     else if (data.weather[0].main == "Rain"){
        weathericon.src ="images/rain.png";
       
       }
     else if (data.weather[0].main == "Mist"){
        weathericon.src ="images/mist.png";
        }

     else if (data.weather[0].main == "Snow"){
        weathericon.src ="images/snow.png";
       
       }
    else if (data.weather[0].main == "Humidity"){
        weathericon.src ="images/humidity.png";
       
       }
}
searchbtn.addEventListener("click",()=>{
  checkweather(searchbox.value);  
})

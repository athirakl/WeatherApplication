function fetchData(){
    let location=id_location.value
    // console.log(location);


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).then(res=>res.json()).then(data=>displaydata(data))


}


function displaydata(data){
    let name=data.name
    let temp=data.main.temp
    let description=data.weather[0].description
    let wtype=data.weather[0].main
    let windspeed=data.wind.speed
    let humidity=data.main.humidity
    let pressure=data.main.pressure
    let htmldata=`
    
    <div class="card text-center">
  <div class="card-header">
    Weather Application
  </div>
  <div class="card-body">
    <h5 class="card-title"><strong>${name}</strong></h5>
    <div class="center">

    <div class="sky text-center">
        <div class="sun"></div>
          <div class="cloud">
          <div class="circle-small"></div>
          <div class="circle-tall"></div>
          <div class="circle-medium"></div>
        </div>
    </div>
    </div>
    <p class="card-text"><strong>${temp}</strong></p>
    <p class="card-text"><strong>${description}</strong></p>
    <p class="card-text"><strong>${wtype}</strong></p>
    <p class="card-text"><strong>${windspeed}</strong></p>
    <p class="card-text"><strong>${humidity}</strong></p>
    <p class="card-text"><strong>${pressure}</strong></p>
 
</div>





   
    
    
    `
document.querySelector("#id_result").innerHTML=htmldata
    
}

function fetchCureentWeather(){
  navigator.geolocation.getCurrentPosition(p=>{
    // console.log(p.coords.latitude,p.coords.longitude)
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric&lat=${p.coords.latitude}&lon=${p.coords.longitude}`).then(res=>res.json()).
    then(data=>displaydata(data))
 
  })
}
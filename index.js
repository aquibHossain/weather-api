const loadData=()=>{
    const searchText=document.getElementById("searchText");
   
    if(searchText.value=="")
    {
         
    }
    else{
       url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&appid=24e80609c6feb6e10363ccc5b41db6e1&units=metric`
     fetch(url)
     .then(response=>response.json())
     .then(data=>displayWeather(data))
     searchText.value=""
     
    }
}

const displayWeather=(data)=>{
    const weather=document.getElementById("weather")
    weather.textContent=""
    
        const div=document.createElement("div")
        const imageUrl=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        
        div.innerHTML=`
        <img src=${imageUrl} alt="">
        <h1>${data.name}</h1>
        <h3><span>${data.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
        `
        weather.appendChild(div);
}
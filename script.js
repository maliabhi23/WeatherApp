const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");

const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchform]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");

getfromSessionStorage();
//then the any variable pass them
function switchTab(newTab)
{
    if(newTab!=oldTab)
        {
            //then the remove the css b
            oldTab.classList.remove("current-tab");
            oldTab=newTab;
            oldTab.classList.add("current-tab");

            if(!searchForm.classList.contains("active"))
                {   //then the search container is been invisisble
                    userInfoContainer.classList.remove("active");
                    grantAccessContainer.classList.remove("active");
                    searchForm.classList.add("active");
                }
                else
                {
                    //then the weather tab visisble karne 

                    searchForm.classList.remove("active");
                    userInfoContainer.classList.remove("active");
                    getfromSessionStorage();
                }
     }
}


//click tab weather or anothe them the
userTab.addEventListener("click",function()
{
    //then the current object pass them
    switchTab(userTab)
});


// userTab.addEventListener("click", () => {
//     //pass clicked tab as input paramter
//     switchTab(userTab);
// });


searchTab.addEventListener("click",function()
{
    switchTab(searchTab);
}); 

function getfromSessionStorage()
{
    const localcordinates=sessionStorage.getItem("user-cordinates");
    if(!localcordinates)
        {
            //then the not get local cordinate
                grantAccessContainer.classList.add("active");
        }
        else{
            const coordinates=JSON.parse(localcordinates);
            fetchUserWeatherInfo(coordinates);
            
        }
}
   async  function fetchUserWeatherInfo(coordinates)
    {
            const {lat,lon} =coordinates;
            //make grant container invisible
                grantAccessContainer.classList.remove("active");

        //make the loader visibile
        loadingScreen.classList.add("active");
        //then the api calls 
        try
        {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
              );

            const data=await response.json();

            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
        }
        catch(e)
        {
            loadingScreen.classList.remove("active");
        }

    }

    function renderWeatherInfo(weatherInfo)
    {
       
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudliness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}m/s`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

    }

    
function getlocation()
{
    if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition);

        }
            else
            {
                
            }
}
    function showPosition(position)
    {
        const userCoordinates={
            lat:position.coords.latitude,
            lon:position.coords.longitude,
        }
        sessionStorage.setItem("user-cordinates",JSON.stringify(userCoordinates));
        fetchUserWeatherInfo(userCoordinates);


    }



const grantAccessButton =document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click",getlocation);


const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
    
          const data = await response.json();
          
          loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        
        renderWeatherInfo(data);
    
    }
    catch(err) {
        //hW
    }
}



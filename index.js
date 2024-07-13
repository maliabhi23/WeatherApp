// const APIkey="d1845658f92b31c64bd94f0677188c9c";
// async function checkweatheer()
// {

//     try{
//         let city="goa";
//     const response=await fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={APIkey}');

//     const d=await response.json();
//     console.log(d);


//     }
//     catch(e)
//     {
//         console.log(e)
//     }

// }

// var b=document.querySelector(".mmmparas");

// async function weats()
// {
    
//     let rrespo=await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
//     let newdatas= await rrespo.json();

//     console.log(newdatas);

//     b.textContent=newdatas.textContent;
//     document.body.appendChild(b)

// }
// //then the get the  curr m location mmm
// function getLocation()
// {
//     if(navigator.geolocation)
//         {
//             navigator.geolocation.getCurrentPosition(getloc);
//         }
//         else
//         {
//             console.log('didnt get the')
//         }
// }
//     function getloc(position)
//     {
//             let lat=position.coords.latitude;
//             let longi=position.coords.longitude;

//                 console.log(lat)
//                 console.log(longi)


//     }

// //
// //To get weather basis on CITY:

// //const response await fetch('https://api.openweathermap.org/data/2.5/weather?q=(city)&appid» (API KEY)&units metric)

// //TO get weather basis on Current Location:

// //let result = await fetch(https://api.openweathermap.org/data/2.5/weather?lat=flatitude)&lon= (longitude)&appid=$(API_KEY)&units metric);





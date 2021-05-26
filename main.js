/*

    Monterrey weather and location
    36.6002° N, 121.8947° W

    For get data from API I'd using fetch.
*/


// const london = fetch('https://www.metaweather.com/api/location/search/?query=london');

// fetch('https://www.metaweather.com/api/location/search/?query=london')
//     .then(response =>response.text())
//     .then(data =>console.log(data));

async function getUsers(){
    const xhr = new XMLHttpRequest();
    let url = 'https://www.metaweather.com/api/location/search/?query=london';
    
    xhr.open('GET',url);
    
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
    xhr.onreadystatechange = someHandler;
    xhr.send();
    console.log(url);
}

getUsers();

// navigator.geolocation.getCurrentPosition(
//     function(position){
//         console.log(position.coords.latitude, position.coords.longitude);

//         function reqListener(){
//             console.log(this.responseText);
            
//         }

//         var oReq = new XMLHttpRequest();
//         oReq.addEventListener("load", reqListener);
//         oReq.open("GET", `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude}, ${position.coords.longitude}`);
//         oReq.send();
//     }
// )

const api_key = "5bb1e360c88ace5e3a7f0c8cfe9a34d7";
const url = "https://api.openweathermap.org/data/2.5/"

const setQuery = function(e) {
if(e.code == "Enter") {
 getResult(searchBar.value)
 searchBar.value = ""
  
}
}

const getResult =(cityName)=> {
  let query = `${url}weather?q=${cityName}&appid=${api_key}&units=metric`
  
  fetch(query)
  .then((res)=> {
    if(!res.ok){
      renderError(`burada bir hata var ${res.status}`);
      throw new Error();
      
    }
      return res.json();
  }).then(function(data) {
    render(data)
  }).catch(function(err) {
    console.log(err);
  })
}

const render = (result)=> {

  console.log(typeof result, result)
  const content = document.querySelector(".content")
   
  const {name, main:{temp_min,temp_max,temp},weather,sys:{country}} =result
 

    content.innerHTML = `
               <div class="city">${name} ${country}</div>
              <div class="temp">${Math.round(temp)}°C</div>
              <div class="desc">${weather[0].main}</div>
              <div class="minmax">${Math.round(temp_min)}°C / ${Math.round(temp_max)}°c</div>`;
  }
          
const renderError =()=> {

  const content = document.querySelector(".content");

  content.innerHTML = `
  <h2 style="color:#fbb034;" >Please enter a defined city </h2>
  
  `;
  setTimeout(() => {
    content.innerHTML = "";
  }, 2000);
}

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keydown", setQuery)


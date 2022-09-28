
const input = document.querySelector("#input")
const btn  = document.querySelector("#button")

btn.addEventListener("click", ()=> {
    if(!input.value) {
        alert("Please enter a food name ")
    }else {

        fetchRecipe(input.value)
        input.value= ""
    }
})

    const fetchRecipe =(recipe) => {

        const appID = "61dbc14c";
        const api_key = "0962eed2822938c8ade079f6856cfc98";
        const url = `https://api.edamam.com/search?q=${recipe}&app_id=${appID}&app_key=${api_key}`;
        console.log(url)

        fetch(url).then(function(res) {
            if(!res.ok) {
                // renderError()
                throw new Error(`Something went wrong ${res.status}`)
            }
            return res.json()
        }).then((data) =>  {
            renderRecipe(data)
        }).catch((err)=> console.log(err))
    }

       const  renderRecipe = (recipes) => {
        console.log(recipes)
        const row = document.querySelector("#row")

        console.log(recipes.hits[0].recipe)

        row.innerHTML += `
        <div id="card" class="card border border-4" style="width: 16rem; ">
         <img " src="${
           recipes.hits[0].recipe.image
         }" class="card-img-top " alt="...">
        <div class="card-flex d-flex flex-lg-column-reverse ">
            <div class="felxcard ">
                <div class="card-body">
                    <h5 class="card-title">${recipes.q}</h5>
                </div>
                <ul class="list-group d-flex justify-content-start list-unstyled ">
                    <li class="list ">Calories: <span>${recipes.hits[0].recipe.calories.toFixed(
                      2
                    )}</span></li>
                    <li class="list">Diet Label: <span>${
                      recipes.hits[0].recipe.dietLabels
                    }</span></li>
                    <li class="list">Healt Label: <span>${
                      recipes.hits[0].recipe.healthLabels[0]
                    }, ${recipes.hits[0].recipe.healthLabels[1]}</span></li>
                </ul>
            </div>
            <div class="card-body">
                <button><a href="${
                  recipes.hits[0].recipe.url
                }" target="_blank" class="card-link p-2">View Recipe</a></button>
            </div>
        </div>
        </div>
        `;
       }






    fetchRecipe("Baked Chicked")
    fetchRecipe("Baked Chicked")
    fetchRecipe("Baked Chicked")
    fetchRecipe("Baked Chicked")
    fetchRecipe("Baked Chicked")
    fetchRecipe("Baked Chicked")

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

        fetch(url).then((res)=> console.log(res))
    }
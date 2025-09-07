//Load Categories 
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(json => displayCategories(json.categories))
}

// Display Categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories-container")
    categoryContainer.innerHTML = ""

    categories.forEach((category) => {
        // console.log(category)
        const btn = document.createElement('div');
        btn.innerText = `${category.category_name}`;
        categoryContainer.append(btn)
    })
}
loadCategories()


// Load plants
const loadPlants = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlants(data.plants))
}

// display plants
const displayPlants = (plants) => {
    const plantsContainer =document.getElementById("plants-container")
    plantsContainer.innerHTML = ""

    plants.forEach((plant) =>{
        console.log(plant)
        const div = document.createElement("div")
        div.innerHTML = `<div class=" bg-white rounded-2xl shadow p-4">
                    <!-- Image -->
                    <div class="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                        <span class="text-gray-400 text-sm">${plant.image}</span>
                    </div>

                    <!-- Title & Description -->
                    <h2 class="text-lg font-bold mt-3">${plant.name}</h2>
                    <p class="text-gray-600 text-sm mt-1">${plant.description}</p>

                    <!-- Category & Price -->
                    <div class="flex items-center justify-between mt-3">
                        <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">${plant.category}</span>
                        <span class="font-semibold text-gray-800">${plant.price}</span>
                    </div>

                    <!-- Button -->
                    <button
                        class="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-medium">
                        Add to Cart
                    </button>
                </div>`
        plantsContainer.append(div)
    })
}
loadPlants()







// Remove active style from all category buttons
const removeActive = () => {
    const categoryButtons = document.querySelectorAll('.btn-category');
    categoryButtons.forEach((btn) => {
        btn.classList.remove("bg-green-600", "text-white"); // remove highlight
        btn.classList.add("bg-white", "text-black"); // default style
    });
}

// manage spinner
const manageSpinner = (status) => {
    if (status === true) {
        document.getElementById('spinner').classList.remove("hidden")
        document.getElementById('plants-container').classList.add("hidden")
    }
    else {
        document.getElementById('spinner').classList.add("hidden")
        document.getElementById('plants-container').classList.remove("hidden")
    }
}


//Load Categories 
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(json => displayCategories(json.categories))
}

// Load plants
const loadPlants = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlants(data.plants))
}


// load category plants
const loadCategoryPlants = (id) => {
    manageSpinner(true) //add spinner
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlants(data.plants))
}

// Display Categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories-container")
    categoryContainer.innerHTML = ""

    //  Add All Trees category
    const allTreesBtn = document.createElement('button');
    allTreesBtn.innerText = "All Trees";
    allTreesBtn.className =
        "w-full text-left px-4 py-2 rounded mb-1 border border-gray-200 btn-category transition-colors duration-200";

    allTreesBtn.onclick = () => {
        removeActive();
        allTreesBtn.classList.add("bg-green-600", "text-white");
        allTreesBtn.classList.remove("bg-white", "text-black");
        loadPlants();
    };
    categoryContainer.append(allTreesBtn);


    //  API categories
    categories.forEach((category) => {
        const btn = document.createElement('button');
        btn.innerText = `${category.category_name}`;
        btn.className =
            "w-full text-left px-4 py-2 rounded mb-1 border border-gray-200 btn-category transition-colors duration-200";

        btn.onclick = () => {
            removeActive();
            btn.classList.add("bg-green-600", "text-white");
            btn.classList.remove("bg-white", "text-black");
            loadCategoryPlants(category.id);
        };

        categoryContainer.append(btn);
    });

    // active  All Trees
    allTreesBtn.classList.add("bg-green-600", "text-white");
    allTreesBtn.classList.remove("bg-white", "text-black");
    loadPlants();
}

loadCategories();



// display plants
const displayPlants = (plants) => {
    const plantsContainer = document.getElementById("plants-container")
    plantsContainer.innerHTML = ""

    plants.forEach((plant) => {
        // console.log(plant)
        const div = document.createElement("div")
        div.innerHTML = `<div class=" bg-white rounded-2xl shadow p-4">
                    <!-- Image -->
                    <div class="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                        <span>${plant.image}</span>
                    </div>

                    <!-- Title & Description -->
                    <h2 class="text-lg font-bold mt-3">${plant.name}</h2>
                    <p class="text-gray-600 text-sm mt-1">${plant.description}</p>

                    <!-- Category & Price -->
                    <div class="flex items-center justify-between mt-3">
                        <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">${plant.category}</span>
                        <span class="font-semibold text-gray-800">৳${plant.price}</span>
                    </div>

                    <!-- Button -->
                    <button
                        class="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-medium addCart-btn">
                        Add to Cart
                    </button>
                </div>`


        // Add modal on name click
        div.querySelector("h2").onclick = () => openModal(plant);

        // Add to cart
        div.querySelector("button").onclick = () =>{
            addToCart(plant);
            alert(`${plant.name} has been added to the cart`)
        }
           

        plantsContainer.appendChild(div)
    })
    manageSpinner(false) //spinner used
}
loadPlants()


// Modal
const modal = document.getElementById("my_modal_5");
const modalContent = document.getElementById("modal-content");

const openModal = (plant) => {
    modalContent.innerHTML = `
        <div class="">
            <h2 class="text-2xl font-bold mb-2">${plant.name}</h2>
            <div class="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
            <span>${plant.image}</span>
            </div>
            
            <div class = "space-y-2">
            <p><span class = "font-bold">Category :</span> ${plant.category}</p>
            <p><span class = "font-bold">Price :</span> ৳${plant.price}</p>
            <p><span class = "font-bold">Description :</span> ${plant.description}</p>
            </div>

            <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    `;
    modal.showModal();
}





// Your Card section
let total = 0;

const addToCart = (plant) => {
    const cartContainer = document.getElementById("cart-container");
    const totalElement = document.getElementById("total-price");

    // Create li for cart item
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-white p-2 rounded ";
    li.innerHTML = `
      <div>
      <p class = "font-bold text-xl" >${plant.name}</p>
      <p>৳${plant.price}</p>
      </div>
      <div>
        <button class="text-red-500 font-bold ml-2 text-xl delete-item"><i class="fa-solid fa-xmark"></i></button>
      </div>
  `;

    // Remove item from cart
    li.querySelector(".delete-item").onclick = () => {
        li.remove();
        total -= parseFloat(plant.price);
        totalElement.innerText = total;
    };

    cartContainer.appendChild(li);

    // Update total
    total += parseFloat(plant.price);
    totalElement.innerText = total;
};








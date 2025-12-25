const allButton = document.querySelector(".allButton");
// const breakfastButton = document.querySelector("#b2");
// const lunchButton = document.querySelector("#b3");
// const shakesButton = document.querySelector("#b4");
// const dinnerButton = document.querySelector("#b5");
const foodContainer = document.querySelector(".foodsall");

const menus = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    desc: "Fluffy buttermilk pancakes served warm, with a soft, buttery finish. Classic buttermilk pancakes, light and airy, made fresh to order.",
    cat: "Breakfast",
    photo: "./images/buttermilk-pancakes-2.jpg",
    price: "$15.99",
  },
  {
    id: 2,
    name: "Double Dinner",
    desc: "A satisfying classic made for serious appetites. Sink your teeth into a juicy, perfectly grilled burger stacked with bold flavor, paired with a generous serving of hot, crispy fries. Double Dinner delivers big taste in every bite.",
    cat: "Dinner",
    photo: "./images/dinner-double.jpg",
    price: "$12.99",
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    desc: "An oversized, ultra-creamy milkshake packed with bold, indulgent flavor. A thick, towering milkshake made for serious sweet cravings.",
    cat: "Shake",
    photo: "./images/joycone_milkshakes3.jpeg",
    price: "$6.99",
  },
  {
    id: 4,
    name: "English Breakfast",
    desc: "A traditional English breakfast served hot and hearty. Classic English breakfast with a full, satisfying plate. A hearty English breakfast made to start the day right.",
    cat: "Breakfast",
    photo: "./images/english-breakfast.webp",
    price: "$11.99",
  },
  {
    id: 5,
    name: "Korean Lunch",
    desc: "A balanced Korean lunch with bold, comforting flavors. Classic Korean dishes served fresh and satisfying. A hearty Korean lunch packed with rich, savory taste.",
    cat: "Lunch",
    photo: "./images/korean-lunch.jpg",
    price: "$8.99",
  },
];

// const breakfast = menus.filter((menu) => menu.cat === "Breakfast");
// const dinner = menus.filter((menu) => menu.cat === "Dinner");
// const shake = menus.filter((menu) => menu.cat === "Shake");
// const everything = menus.filter((menu) => menu.price < "100");
// const lunch = menus.filter((menu) => menu.cat === "Lunch");

const renderFood = (item) => {
  foodContainer.innerHTML = "";
  item.forEach((item) => {
    foodContainer.innerHTML += `<div class="food1">
          
            <img class="zurag1food" src="${item.photo}" alt="${item.name}" />
        
          <div class="food1all">
            <div class="food1name">
              <p>${item.name}</p>
              <p>${item.price}</p>
            </div>
            <div class="food1info">
              <p>${item.desc}
              </p>
            </div>
          </div>
        </div>
        `;
  });
};

const filterfood = (filterValue) => {
  // const breakfast = menus.filter((menu) => menu.cat === "Breakfast");
  // breakfastButton.innerHTML = `<button class="allButtonNew" onclick="showBreakfast()">Breakfast</button>`
  if (filterValue === "cat") {
    renderFood(menus);
  } else {
    const filteredFoods = menus.filter((menu) => menu.cat === filterValue);
    renderFood(filteredFoods);
  }
};
renderFood(menus);

const showBreakfast = () => {
  // const breakfast = menus.filter((menu) => menu.cat === "Breakfast");
  // breakfastButton.innerHTML = `<button class="allButtonNew" onclick="showBreakfast()">Breakfast</button>`
  renderFood(breakfast);
};

const showDinner = () => {
  // const dinner = menus.filter((menu) => menu.cat === "Dinner");
  // dinnerButton.innerHTML = `<button class="allButtonNew" onclick="showDinner()">Dinner</button>`
  renderFood(dinner);
};

const showShake = () => {
  // const shake = menus.filter((menu) => menu.cat === "Shake");
  // shakesButton.innerHTML = `<button class="allButtonNew" onclick="showShake()">Shake</button>`
  renderFood(shake);
};

const showLunch = () => {
  // const lunch = menus.filter((menu) => menu.cat === "Lunch");
  // lunchButton.innerHTML = `<button class="allButtonNew" onclick="showLunch()">Lunch</button>`
  renderFood(lunch);
};

const showAll = () => {
  // const everything = menus.filter((menu) => menu.price < "100");
  // allButton.innerHTML = `<button class="allButtonNew" onclick="showAll()">All</button>`
  renderFood(everything);
};
renderFood(everything);

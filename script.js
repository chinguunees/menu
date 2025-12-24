const allButton = document.querySelector(".allButton");
const breakfastButton = document.querySelector(".breakfastButton");
const lunchButton = document.querySelector(".lunchButton");
const shakesButton = document.querySelector(".shakesButton");
const dinnerButton = document.querySelector(".dinnerButton");
const food1 = document.querySelector(".food1");

const menus = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    desc: "im baby woke milkshake wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
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
    desc: "im baby woke milkshake wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    cat: "Shake",
    photo: "./images/joycone_milkshakes3.jpeg",
    price: "$6.99",
  },
  {
    id: 4,
    name: "English Breakfast",
    desc: "im baby woke milkshake wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    cat: "Breakfast",
    photo: "./images/english-breakfast.webp",
    price: "$11.99",
  },
];

// const filterValue = "Breakfast";

const breakfast = menus.filter((menu) => menu.cat === "Breakfast");

console.log(breakfast);

const renderFood = () => {
  food1.innerHTML = `
   <div class="food1">
          <div>
            <img class="zurag1food" src="${breakfast.photo}" alt="" />
          </div>
          <div class="food1all">
            <div class="food1name">
              <p>${breakfast.name}</p>
              <p>$13.99</p>
            </div>
            <div class="food1info">
              <p>
                A satisfying classic made for serious appetites. Sink your teeth
                into a juicy, perfectly grilled burger stacked with bold flavor,
                paired with a generous serving of hot, crispy fries. Double
                Dinner delivers big taste in every bite.
              </p>
            </div>
          </div>
        </div>
        
  `;
};

let finalHTML = "";

const filteredArr = [1, 2];

const createElemen = (num) => {
  return "*" + num;
};

filteredArr.forEach((num) => {
  finalHTML += createElemen(num);
});

console.log(finalHTML);

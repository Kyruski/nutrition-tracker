const fs = require('fs');
const foodsList = require('./foodlist');

const meals = ["Breakfast", "Lunch", "Dinner"];
const foodItems = makeFoods();

function makeFoods() {
  const foods = [];
  for (let i = 0; i < foodsList.length; i++) {
    const calories = Math.floor(Math.random() * 100);
    const name = foodsList[i];
    let carbs = Math.round(Math.random() * 100);
    let pro = Math.round(Math.random() * (100 - carbs));
    let fats = 100 - carbs - pro;
    carbs = Math.round((calories * carbs) / 100 / 4),
    fats = Math.round((calories * fats) / 100 / 9),
    pro = Math.round((calories * pro) / 100 / 4)
    foods.push({
      id: i,
      name,
      calories,
      carbs,
      pro,
      fats,
    });
  }
  return foods;
}

function makeMeal() {
  const numItems = 1 + Math.floor((Math.random() * 4));
  const meal = [];
  for (let i = 0; i < numItems; i++) {
    const itemID = Math.floor(Math.random() * foodsList.length);
    const servings = Math.floor(Math.random() * 4) + 1;
    meal.push([
      foodItems[itemID],
      servings
    ]);
  }
  return meal;
}

function makeDay(date) {
  const meals = [];
  for (let i = 0; i < 3; i++) {
    meals.push(makeMeal());
  }
  return {meals, date, mealNames: ["Breakfast", "Lunch", "Dinner"]};
}

function makeMonth() {
  const month = {};
  for (let i = 1; i < 32; i++) {
    const day = (i < 10) ? `2019-12-0${i}` : `2019-12-${i}`;
    month[day] = makeDay(`2019-12-${i}`);
  }
  return month;
}

fs.appendFileSync('db.json', JSON.stringify(makeMonth()));
fs.appendFileSync('singleDay.json', JSON.stringify(makeDay('2019-12-01')));
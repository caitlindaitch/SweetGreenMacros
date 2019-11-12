angular
  .module('macrosCalculator', [])
  .controller('macrosController', [
    MacrosControllerFunc
  ]);

function MacrosControllerFunc() {
  var macros = this;

  macros.chicken = {
    name: "Chicken",
    calories: 130,
    fat: 5,
    protein: 22,
    carbs: 0,
    checked: false
  };

  macros.rice = {
    name: "Rice",
    calories: 160,
    fat: 2,
    protein: 5,
    carbs: 26,
    checked: false
  };

  macros.potatoes = {
    name: "Sweet potatoes",
    calories: 40,
    fat: 1,
    protein: 1,
    carbs: 8,
    checked: false
  };

  macros.kale = {
    name: "Kale",
    calories: 40,
    fat: 1,
    protein: 3,
    carbs: 9,
    checked: false
  };

  macros.apple = {
    name: "Apple",
    calories: 15,
    fat: 0,
    protein: 0,
    carbs: 4,
    checked: false
  };

  macros.pear = {
    name: "Pear",
    calories: 30,
    fat: 0,
    protein: 1,
    carbs: 5,
    checked: false
  };

  macros.caesarDressing = {
    name: "Casear Dressing",
    calories: 100,
    fat: 10,
    protein: 1,
    carbs: 1,
    checked: false
  };

  macros.parmCrisps = {
    name: "Parmasean Crisps",
    calories: 100,
    fat: 7,
    protein: 10,
    carbs: 0,
    checked: false
  };

  macros.tomatoes = {
    name: "Tomatoes",
    calories: 10,
    fat: 0,
    protein: 0,
    carbs: 2,
    checked: false
  };

  macros.calories = 0;
  macros.protein = 0;
  macros.carbs = 0;
  macros.fat = 0;

  macros.calculate = function() {
    calculate("calories");
    calculate("carbs");
    calculate("fat");
    calculate("protein");
  };

  function calculate(macro) {
    var total = 0;

    if (macros.chicken.checked) {
      total += macros.chicken[macro];
    }

    if (macros.rice.checked) {
      total += macros.rice[macro];
    }

    if (macros.potatoes.checked) {
      total += macros.potatoes[macro];
    }

    if (macros.kale.checked) {
      total += macros.kale[macro];
    }

    if (macros.apple.checked) {
      total += macros.apple[macro];
    }

    if (macros.pear.checked) {
      total += macros.pear[macro];
    }

    if (macros.caesarDressing.checked) {
      total += macros.caesarDressing[macro];
    }

    if (macros.parmCrisps.checked) {
      total += macros.parmCrisps[macro]
    }

    macros[macro] = total;
  }
}
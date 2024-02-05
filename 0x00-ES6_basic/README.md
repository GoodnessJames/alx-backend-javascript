# Project Title: 0x00. ES6 Basics

## Introduction
Welcome to the world of ES6 (ECMAScript 2015) Basics! This project is designed to help grasp the fundamentals of ES6, the latest version of JavaScript, through a series of fun and engaging tasks. We'll dive into the wonders of const, let, arrow functions, default parameters, spread syntax, template literals, and more.

## Timeline
Feb 5, 2024 6:00 AM to Feb 9, 2024 6:00 AM

## Overview
This project consists of 12 tasks, each focusing on a specific ES6 concept. From choosing between const and let to utilizing arrow functions, we'll explore various features that make ES6 a game-changer in JavaScript development. Below is a brief overview of each task:

## 0. Const or let?
Decide whether to use const or let in different scenarios. Modify functions to instantiate variables accordingly.

### Code:

```
// taskFirst
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// taskNext
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
```

## 1. Block Scope
Deal with block scope and prevent variable overwriting inside conditional blocks.

### Code:
```
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }
  return [task, task2];
}
```

## 2. Arrow functions
Upgrade a standard function to use ES6's arrow syntax.

### Code:
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
```

## 3. Parameter defaults 
Simplify a function with default parameter values.

### Code:
```
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

## 4. Rest parameter syntax for functions
Utilize rest parameter syntax to determine the number of arguments passed.

### Code:
```
export default function returnHowManyArguments(...args) {
  return args.length;
}
5. The wonders of spread syntax
Concatenate arrays and string characters using spread syntax.

Pseudo Code:

javascript
Copy code
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string].join('');
}
```

## 6. Take advantage of template literals
Enhance a return statement using template literals.

### Code:
```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

## 7. Object property value shorthand syntax
Simplify object property assignments using ES6 shorthand syntax.

### Code:
```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
```

## 8. No need to create empty objects before adding in properties
Use computed property names to rewrite a function.

### Code:

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
```

## 9. ES6 method properties
Enhance an object by using ES6 method properties.

### Code:
```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

## 10. For...of Loops
Upgrade a function to use ES6's for...of operator.

### Code:
```
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}
```

## 11. Iterator
Create an object using ES6 features, mapping department names to arrays of employees.

### Code:
```
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
```

## 12. Let's create a report object
Generate a report object with department-wise employee lists and a method to get the number of departments.

### Code:
```
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
```

## Conclusion
In this project, we embarked on an engaging exploration of ES6 basics, unraveling the transformative features that this
version of JavaScript brings to the table. From choosing between const and let for variable instantiation to mastering
arrow functions, default parameters, and the wonders of spread syntax, we delved into the essence of ES6 coding.
Along the way, we simplified code using template literals, embraced object property shorthand syntax and leveraged the
power of method properties.

With each task, we gained hands-on experience and a deeper understanding of how ES6 enhances code readability and
efficiency. This journey not only equipped me with practical skills in utilizing ES6 features but also fostered a
playful spirit of exploration in the realm of modern JavaScript development.





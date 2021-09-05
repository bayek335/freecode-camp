// adding a property and value to an array object
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberry = 27;
// Only change code above this line

console.log(foods);

// modify an object array
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

// hasOwnProperty and in
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) => {
    return userObj.hasOwnProperty(name);
  });

  // Only change code above this line
}

console.log(isEveryoneHere(users));

// count property objarray
let myArr = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: true,
  },
};
function countOnline(usersObj) {
  // Only change code below this line
  let onLine = 0;
  for (let name in usersObj) {
    if (usersObj[name]["online"] === true) {
      onLine += 1;
    }
    // Only change code above this line
  }
  return onLine;
}

console.log(countOnline(myArr));

//Generate object.keys
let users2 = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

const getArrayOfUsers = (obj) => Object.keys(obj);

console.log(getArrayOfUsers(users2));

//task modify object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));

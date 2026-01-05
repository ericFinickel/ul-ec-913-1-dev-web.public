// userService.js

function createUser(name, age, isAdmin) {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin || false,
    createdAt: new Date()
  };
}

function getUserLabel(user) {
  return user.name + " (" + user.age + " ans)";
}

function promoteUser(user) {
  if (!user.isAdmin) {
    user.isAdmin = true;
  }
  return user;
}

function averageAge(users) {
  let total = 0;

  for (let u of users) {
    total += u.age;
  }

  return users.length > 0 ? total / users.length : null;
}

const users = [
  createUser("Alice", 25),
  createUser("Bob", "30", true),
  createUser("Charlie", 20)
];

console.log("Premier user de la liste : ", getUserLabel(users[0]));
console.log("Age moyen :", averageAge(users));
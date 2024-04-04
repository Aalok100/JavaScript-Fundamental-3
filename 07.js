// Program using a Map to store user information
const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Aalok", 30, "aalokmunda03.com");
addUser("Munda", 25, "munda@.com");
console.log(userMap);

updateUser("Aalok", 31, "newemail@example.com");
console.log(userMap);

deleteUser("Munda");
console.log(userMap);
// ex 1.

function fetchData() {
  return new Promise((res, rej) => {
    let success = true;

    setTimeout(() => {
      if (success) {
        res("Data fetched successfully!");
      } else {
        rej(new Error("Error fetching data."));
      }
    }, 2000);
  });
}

// fetchData().then(console.log).catch(console.log);

async function getData() {
  try {
    const result = await fetchData();
    console.log("Resolved:", result);
  } catch (error) {
    console.log("Rejected:", error.message);
  }
}
// getData();

// task 1.
function delayedMessage(message, delay) {
  console.log("Type of delay:", typeof delay);
  return new Promise((res, rej) => {
    if (typeof delay !== "number" || delay < 0) {
      return rej(new Error("Delay time must be a number or greter than zero"));
    }

    setTimeout(() => {
      res(`Message: ${message}`);
    }, delay);
  });
}

// delayedMessage("Hello, I am vishal", -1000)
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Error:", err.message));

async function messageData() {
  try {
    const message = await delayedMessage("Hello buddy", 1000);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  }
}

// messageData();

// Task 2.
function checkEven(num) {
  return new Promise((res, rej) => {
    if (typeof num !== "number") {
      return rej(`${num} is not a number.`);
    }
    let result;
    if (num % 2 === 0) {
      result = `${num} is an even number.`;
    } else {
      result = `${num} is an odd number.`;
    }
    setTimeout(() => {
      res(result);
    }, 1000);
  });
}

// checkEven(5).then(console.log).catch(console.log);

// Task 3.
function login(username, password) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        res(`Welcome ${username}`);
      } else {
        rej("Invalid Credentials");
      }
    }, 2000);
  });
}

// login("admin", "1234").then(console.log).catch(console.log);

function getUser(username, password) {
  const userInfo = [
    { username: "admin", password: "1234" },
    { username: "vishal", password: "12345" },
  ];
  return new Promise((res, rej) => {
    const userFound = userInfo.find((user) => user.username === username);
    if (!userFound) {
      return rej("User not exist.");
    }
    if (userFound.password !== password) {
      return rej("Invalid credentials");
    }
    setTimeout(() => {
      res(`username: ${userFound.username}`);
    }, 1000);
  });
}

function getPosts(username) {
  return new Promise((res, rej) => {
    if (!username) {
      return rej("User not logged in");
    }
    setTimeout(() => {
      res(`${username}'s all posts`);
    }, 1000);
  });
}

getUser("vishal", "12345")
  .then((val) => {
    console.log(val);
    return val;
  })
  .then((val) => {
    const data = getPosts(val);
    return data;
  })
  .then((data) => {
    return JSON.stringify(data).split(": ")[1];
  })
  .then(console.log)
  .catch(console.log);

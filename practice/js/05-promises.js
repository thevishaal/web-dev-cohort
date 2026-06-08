// promises state --> 1. pending, 2. fulfilled(res, done), 3. reject

const promise = new Promise((resolve, reject) => {
  //   resolve("thevishaal");
  //   reject(new Error("Error aa gya"));
  //   setTimeout(() => {
  //     resolve("ChaiCode");
  //   }, 2000);
});

// console.log(promise); // isme state aur data mil rha h

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

const promise2 = new Promise((res, rej) => {
  res("Promise success");
  rej(new Error("M aa gya!"));
}); // koi ek hi chalega rej ya res

// promise2
//   .then(console.log)
//   .then(console.log) // yaha kuch data aaya hi nhi to undefined print ho gya
//   .catch((err) => console.log("Error: ", err.message));

// promise2
//   .then((val) => {
//     console.log(val);
//     return val.toUpperCase();
//   })
//   .then(console.log)
//   .catch((err) => console.log("Error:", err.message));

const turant = Promise.resolve("turant");
// console.log(turant);

const allPromises = Promise.all([
  Promise.resolve("the"),
  Promise.resolve("vishaal"),
  //   Promise.reject(new Error("Just m aa gya tujhe pareshan karne")),
]);

// allPromises // isme all promises resolve honge tabhi data aayega agar ek bhi promise reject hua to error dega, return an array
//   .then(console.log)
//   .catch((err) => console.log("Error:", err.message));

const anyPromise = Promise.any([
  Promise.reject(new Error("M any promise se hu")),
  Promise.resolve("HaHaHa"),
  Promise.resolve("HaHaHa2"),
]);
// isme agar koi bhi promise fulfill ho rha h to use return kar dega jo sabse pehle fulfill huya h, first promise return karega
// anyPromise.then(console.log).catch((err) => console.log(err));

const allSettledPromise = Promise.allSettled([
  Promise.reject(new Error("All settled se hu m ")),
  Promise.resolve("Chai"),
  Promise.resolve("Code"),
]);

// [
//   { status: "fulfilled", value: "Chai" },
//   { status: "fulfilled", value: "Code" },
// ];     isme array return karta h resolve and reject sabhi ka with state
// allSettledPromise
//   .then(console.log)
//   .catch((err) => console.log("Error:", err.message));

console.log("Promise se pehle");
const vishalKaPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise pura hua");
  }, 2000);
});

async function vPromise() {
  const promise = await vishalKaPromise;
  console.log("Vishal ka promise:", promise);
}

vPromise();
console.log("Sir ji hum h modi ji ");

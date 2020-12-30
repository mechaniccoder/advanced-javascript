// // Promise.all
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 0)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("error ")), 5000)
//   ),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error)); // Error: error

// Promise.allSettled
// Promise.allSettled([
//   new Promise((resolve) => setTimeout(() => resolve(1), 0)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("error ")), 3000)
//   ),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ]).then((result) => console.log(result));

// Promise.race
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 0)),
  new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("error ")), 3000)
  ),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]).then((result) => console.log(result));

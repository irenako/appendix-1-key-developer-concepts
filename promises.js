// Promises
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("i have succeeded");
    }, 1000);
  } else {
    reject("I have Failed");
  }
});

myPromise
  .then((value) => value + "!!!!")
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));

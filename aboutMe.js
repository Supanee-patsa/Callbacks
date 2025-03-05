const fetchData = (message, delay, callback) => {
  console.log(message);
  setTimeout(callback, delay);
};

const printName = (callback) => {
  fetchData("Fetching data...", 2000, () => {
    console.log("My name is Supanee Patsa");
    callback();
  });
};

const printAge = (callback) => {
  fetchData("3 sek delay", 3000, () => {
    console.log("I'm 35 years old");
    callback();
  });
};

const printLocation = (callback) => {
  fetchData("4 sek delay", 4000, () => {
    console.log("I'm from Thailand. I live in Malmo");
    callback();
  });
};

const printHobbies = (callback) => {
  fetchData("5 sek delay", 5000, () => {
    console.log("I like Music");
    callback();
  });
};

printName(() => {
  printAge(() => {
    printLocation(() => {
      printHobbies(() => {});
    });
  });
});

const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = ['John', 'Michael', 'David', 'James', 'Robert'];
const femaleNames = ['Mary', 'Jennifer', 'Linda', 'Susan', 'Karen'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];

function randChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName = gender === 'Male' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor(Math.random() * 30) + 20; // Ustal wiek osoby w zakresie 20-49 lat

  const person = {
    gender,
    firstName,
    lastName,
    age
  };

  people.push(person);
}

const jsonData = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Dane zostały zapisane do pliku people.json');
});


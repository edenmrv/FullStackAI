const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

const name = 'Alice'; // שם שלא קיים במערכת

if (reservations[name]) {
  if (reservations[name].claimed === false) {
    console.log("Welcome, " + name);
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  console.log("You have no reservation");
  reservations[name] = { claimed: true };
}
console.log(reservations);
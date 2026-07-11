const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

const name = 'tEd'; 

const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

if (reservations[formattedName]) {
  if (reservations[formattedName].claimed === false) {
    console.log("Welcome, " + formattedName);
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  console.log("You have no reservation");
  reservations[formattedName] = { claimed: true };
}
let family = {
  mother: {
    name: "Joyce Wambui",
    age: 55,
    occupation: "Nurse",
  },

  father: {
    name: "Benson Chege",
    age: 65,
    occupation: "Nurse",
  },

  siblings: {
    first: {
      name: "Racheal Githieya",
      age: 22,
      occupation: "Student",
    },

    second: {
      name: "Jane Njoki",
      age: 17,
      occupation: "Student",
    },
  },
}

//Accessing values of an object
//console.log(family.father.name); // Using the dot notation.
//console.log(family["only son"]) ; //Using square brackets.


//Destructuring

const {mother, father, siblings:{first: Racheal, second: Jayne}} = family ;

//console.log(mother, father, first, second) ;

console.log(Racheal, Jayne) ;

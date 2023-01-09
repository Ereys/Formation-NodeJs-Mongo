const my_string = 'Hello World!' // Valide en JS et TS
const my_typed_string: string = 'Hello World!' // Valide en TS

type personne = {
    lastname: any
    firstname: any
}


const user:personne =  {
    lastname : process.env.LASTNAME,
    firstname: process.env.FIRSTNAME
}


const {lastname, firstname} = user;
console.log(`Bonjour ${firstname} ${lastname}, comment allez-vous ?`);

console.log(process.env); // Print l'ensemble des %VAR%


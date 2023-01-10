// Pour réaliser ces exercices vous pouvez utiliser les supports typescript :
// https://github.com/Djeg/formation-react/tree/training/typescript

import { it } from "node:test";

// Créer deux constantes de type number
// contenant les chiffres 10 et 5

const five: number = 5;
const ten: number = 10;

// Utiliser console.log pour afficher les 2 constantes

console.log(five);
console.log(ten);

// Créer une constante notes de type tableaux de number
// contenant les deux constantes plus haut ainsi que la note 12

const notes: number[] = [ten, five];

// Afficher dans la console le tableaux de note en utilisant console.table

console.table(notes);

// Créer une fonction nommé « ordonnerNotes » accéptant un paramètre
// de type tableaux de notes. Cette fonction doit retourner un nouveau
// tableaux de note mais trier par note croissante
// (indice il vous faudra utiliser la méthode d'un tableaux : sort)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


type TableauxDeNotes = number[];


/**
 * Fonction qui renvoie un type TableauxDeNotes ordonnées par ordre croissant
 * @param tabToSort // type TableauxDeNotes = number[];
 * @returns // type TableauxDeNotes = number[]; ordonnées par ordre croissant
 */

const ordonnerNotes = (tabToSort : TableauxDeNotes): TableauxDeNotes => {
    return tabToSort.sort((a: number,b: number) => {return a-b});
}

/**
 * Fonction qui renvoie un type TableauxDeNotes ordonnées par ordre croissant
 * @param tabToSort // type TableauxDeNotes = number[];
 * @returns // type TableauxDeNotes = number[]; ordonnées par ordre croissant
 */

function ordonnerNotesF(tabToSort: TableauxDeNotes): TableauxDeNotes{
    return tabToSort.sort((a: number,b: number) => {return a-b});
}

const tableauDeNote : TableauxDeNotes = [0,10,5,7,9,19,5,8]
// Essayer d'afficher le resultat de la fonction ordonnerNote dans la console

console.table(ordonnerNotes(tableauDeNote));
console.table(ordonnerNotesF(tableauDeNote));

// Créer un type « Student » qui sera un objet contenant les champs suivant
// nom: string, prenom: string, age: number, notes: tableaux de number

type Student = {
    nom: string
    prenom: string
    age: number
    notes: number[]
}

// Créer une constante de type « Student », vous pouvez lui spécifier les valeurs
// de votre choix

const studentExemple: Student = {
    nom: "Doe",
    prenom: "John",
    age: 18,
    notes: notes
}

// Afficher la constante dans la console en utilisant console.table

console.table(studentExemple);

// Créer une fonction, accéptant un paramètre de Type student et affichant la chaïne de
// caractère suivante :
// « Bonjour <eleve.nom> <prenom.eleve>, vous avez <eleve.age> ans »

/**
 * Fonction qui affiche le nom, le prenom et l'âge d'un objet de type Student
 * @param studentTarget Un objet de type Student 
 */

function presentationEleve(studentTarget: Student): void{
    console.log(`Bonjour ${studentTarget.nom} ${studentTarget.prenom}, vous avez ${studentTarget.age} ans`);
}


// Afficher le resultat de cette fonction dans la console

presentationEleve(studentExemple);

// Créer une fonction afficher note qui accépte un paramètre de type tableaux de number
// et qui retourne un chaïne de caractère suivante :
// imaginons les notes suivante: [12, 10, 5] la fonction doit retourner :
// « Note n°1 : 12 / 20, Note n°2 : 10 / 20, Note n°3 : 05 / 20 »

function printNotes(notes: number[]): string{
    var stringToComplete: string = "";
    notes.forEach((item: Number, idx: number) => {
        stringToComplete += `Note n°${idx+1} : ${item}/20, `
    })
    return stringToComplete;
}

console.log(printNotes(studentExemple.notes));

// Créer une fonction moyenne qui accépte un tableaux de notes et retourne la moyenne
// de toutes les notes


/**
 * Renvoie la moyenne d'un tableau de number
 * @param notes Tableau de note, ne doit pas être vide
 * @returns Retourne la moyenne du tableau
 */

function getAverage(notes: number[]): number{
    var averageToReturn : number = 0;
    notes.forEach((item: number) => averageToReturn += item);

    return averageToReturn/notes.length;
}

console.log(getAverage(studentExemple.notes));

// Créer un type ProfPrincipal qui peut être soit :
// une chaine de caractère
// un objet avec les champs suivant : { nom: string, prenom: string, matiere: string }

type ProfPrincipal = string | {
    nom: string
    prenom: string
    matiere: string
}

const prof1 : ProfPrincipal = "Jean"

const prof2: ProfPrincipal = {
    nom: "Jean",
    prenom: "Dujardin",
    matiere: "Jardinage",
}

// Créer un type Identifiable qui accépte un générique et produit le type suivant :
// { id: <Generic> }

type Identifiable<A> = {
    id: A
}

// En utilisant le type identifiable, créer un type IdentifiableStudent qui fusionne
// un identifiable d'un nomber avec une Student

type IdentifiableStudent = Identifiable<number> & Student

const etudiantAleatoire: IdentifiableStudent = {
    nom: "Doe",
    prenom: "John",
    age: 18,
    notes: notes,
    id: 10,
}

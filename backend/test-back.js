import { allActivitesSorted, allInviteSorted, oneFilmID, oneActiviteID, oneActeurID, oneAnimateurID, oneAnimateurName } from './backend.mjs';

//une fonction qui retourne la liste des activités(Ateliers, expositions, animations…) triés par date de projection
/*
try {
    const test = await allActivitesSorted();
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}
*/

//une fonction qui retourne la liste de tous les acteurs / réalisateurs participant au festival triés par ordre alphabétique
/*
try {
    const test = await allInviteSorted();
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}
*/

//une fonction qui retourne les infos d'un film en donnant son id en paramètre
/*
try {
    const test = await oneFilmID('7ls6v1c37314fz8');
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}
*/

//une fonction qui retourne les infos d'une activité en donnant son id en paramètre
/*
try {
    const test = await oneActiviteID('ndap1utl8mc3jwz');
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}
*/

//une fonction qui retourne les infos d'un acteur / réalisateur en donnant son id en paramètre
/*
try {
    const test = await oneActeurID('c5kj9cc48dk4ka4');
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}
*/

//Une fonction qui retourne toutes les activités d’un animateur donné par son id
/*
try {
    const test = await oneActeurID('68wh7w596910gvl');
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}
    */

//Une fonction qui retourne toutes les activités d’un animateur donné par son nom
try {
    const test = await oneAnimateurName("Thomas Lefevre");
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}

//Une fonction qui permet d’ajouter ou modifier les informations d’un film, activité ou invité


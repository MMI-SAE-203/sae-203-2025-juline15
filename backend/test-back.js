import { allActivitesSorted, allInviteSorted, oneFilmID, oneActiviteID, oneActeurID, oneAnimateurID, oneAnimateurName, addNewFilm, addNewActivite, addNewInvite, updateFilmById, updateActiviteById, updateInviteById } from './backend.mjs';

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
/*
try {
    const test = await oneAnimateurName("Thomas Lefevre");
    console.log(JSON.stringify(test, null, 2));
} catch (e) {
    console.error(e);
}
*/


//Une fonction qui permet d’ajouter les informations d’un film
/*
try {
    const test = {
        "titre_film": "Titre test",
        "dateheureprojection_film": "2025-07-14 19:00:00",
        "synospsis_film": "ceci est un test de description",
        "genre_film": "Cinéma de fantasy",
        "relation": "t3v50xes2791xdr",
        "duree_film": "1h30",
        "datesortie_film": "2025-07-14",
        "Touts_publics": "True",
    };
    await addNewFilm(test);
} catch (e) {
    console.error(e);
}
*/

//Une fonction qui permet de modifier les informations d’un film


//Une fonction qui permet d’ajouter les informations d’une activité
/*
try {
    const test = {
        "titre_activite": "Titre test",
        "dateheure_activite": "2025-07-14 19:00:00",
        "description_activite": "ceci est un test de description",
        "categorie": "Animation",
        "relation": "fu3411vy9g4wo55"
    };
    await addNewActivite(test);
} catch (e) {
    console.error(e);
}
*/

//Une fonction qui permet de modifier les informations d’une activité


//Une fonction qui permet d’ajouter les informations d’un invité
/*
try {
    const test = {
        "nom_invite": "Nom test",
        "bio_invite": "Ceci est un test de bio",
        "role": "Animateur(trice)",
        "categorie": "Animation",
        "relation": "fu3411vy9g4wo55"
    };
    await addNewInvite(test);
} catch (e) {
    console.error(e);
}
*/

//Une fonction qui permet de modifier les informations d’un invité
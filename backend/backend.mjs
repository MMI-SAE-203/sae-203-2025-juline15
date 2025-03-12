import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

//une fonction qui retourne la liste des activités(Ateliers, expositions, animations…) triés par date de projection
export async function allActivitesSorted() {
    const sortedRecords = await pb.collection('activite').getFullList({
        sort: 'dateheure_activite',
    });
    return sortedRecords;
}

//une fonction qui retourne la liste de tous les acteurs / réalisateurs participant au festival triés par ordre alphabétique
export async function allInviteSorted() {
    const sortedRecords = await pb.collection('invite').getFullList({
        sort: 'nom_invite',
    });
    return sortedRecords;
}

//une fonction qui retourne les infos d'un film en donnant son id en paramètre
export async function oneFilmID(id) {
    const oneRecord = await pb.collection('film').getOne(id);
    return oneRecord;
}

//une fonction qui retourne les infos d'une activité en donnant son id en paramètre
export async function oneActiviteID(id) {
    const oneRecord = await pb.collection('activite').getOne(id);
    return oneRecord;
}

//une fonction qui retourne les infos d'un acteur / réalisateur en donnant son id en paramètre
export async function oneActeurID(id) {
    const oneRecord = await pb.collection('invite').getOne(id);
    return oneRecord;
}

//Une fonction qui retourne toutes les activités d’un animateur donné par son id
export async function oneAnimateurID(id) {
    const oneRecord = await pb.collection('activite').getFullList({ filter: `invite.id = '${id}'`, expand: 'invite' });
    return oneRecord;
}

//Une fonction qui retourne toutes les activités d’un animateur donné par son nom
export async function oneAnimateurName(nom_invite) {
    const oneRecord = await pb.collection('activite').getFullList({ filter: `relation.nom_invite = '${nom_invite}'`, expand: 'relation' });
    return oneRecord;
};

//Une fonction qui permet d’ajouter les informations d’un film
export async function addNewFilm(newFilm) {
    await pb.collection('film').create(newFilm);
};

//Une fonction qui permet de modifier les informations d’un film
export async function updateFilmById(id) {
    await pb.collection('films').update(id);
};

//Une fonction qui permet d’ajouter les informations d’une activité
export async function addNewActivite(newActivite) {
    await pb.collection('activite').create(newActivite);
};

//Une fonction qui permet de modifier les informations d’une activité
export async function updateActiviteById(id) {
    await pb.collection('activite').update(id);
};

//Une fonction qui permet d’ajouter les informations d’un invité
export async function addNewInvite(newInvite) {
    await pb.collection('invite').create(newInvite);
};

//Une fonction qui permet de modifier les informations d’un invité
export async function updateInviteById(id) {
    await pb.collection('invite').update(id);
};


// Fonction qui retourne les images
export const getAfficheFilm = async (collection = "film") => {
    try {
        let affiche = await pb.collection("film").getFullList();
        affiche = affiche.map((film) => {
            film.affiche = pb.files.getURL(film, film.affiche_film);
            film.imageCard = pb.files.getURL(film, film.photocard_film);
            return film;
        });
        return affiche;
    } catch (error) {
        console.error("Erreur lors de la récupération des affiches 1 :", error);
        return [];
    }
};

// Fonction qui retourne tous les films
export async function getAllFilms() {
    const oneRecord = await pb.collection('film').getFullList();
    return oneRecord;
}

// Pour les images multiples
export const getMultipleImg = async (id, collection = "film") => {
    try {
        const film = await pb.collection(collection).getOne(id);

        const allImages = [
            ...(Array.isArray(film.affiche_film) ? film.affiche_film : [film.affiche_film]),
            ...(Array.isArray(film.photo_film) ? film.photo_film : [film.photo_film]),
            ...(Array.isArray(film.photo2_film) ? film.photo2_film : [film.photo2_film]),
        ];

        const imageUrls = allImages
            .filter((image) => image)
            .map((image) => pb.files.getUrl(film, image, { thumb: "1024x1024" }));

        return [{
            ...film,
            imageUrls,
        }];
    } catch (error) {
        console.error("Erreur lors de la récupération des images :", error);
        return [];
    }
};

// Fonction qui retourne tous les invite
export async function getAllInvite() {
    const oneRecord = await pb.collection('invite').getFullList();
    return oneRecord;
}
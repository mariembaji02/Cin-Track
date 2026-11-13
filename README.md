# CinéTrack
une plateForm pour gerer les series et les films et permet l'utilisateur fait plusieur fonction
### Fonctionalités 
```text
 - Affichage des films et des séries.
 - Recherche par titre.
 - Filtrage par type de contenu (Film / Série).
 - Affichage des détails des films et des séries.
 - Ajout et suppression des favoris.
 - Gestion des favoris avec localStorage.
 - Comptage des films et des séries dans la liste des favoris.
 - Pagination des contenus.
 - Affichage dynamique des cartes
```
### Technologies utilisées
```text
  -HTML5
  -JavaScript (ES6+)
  -Tailwind CSS
  -API REST
  -Fetch API
  -LocalStorage
  -Git & GitHub
  -Jira
  -Vercel
```
### Structure du projet
```html
CinéTrack/ 
├── index.html
├── style.css
├── tailwind.confi.js  
├── js/ 
│ ├── api.js ( lecture et sauvegarde des données) 
│ ├── listFavor.js (affichage/suppression/ajouter) 
│ ├── pagination.js (pagination) 
│ ├── modal.js (fonctions d'affichage) 
│ ├── search.js (rechercher et filtrer) 
│ ├── ui.js (fonctions d'affichage) 
│ └── main.js (point d'entrée de index.html) 
│
└── README.md
```
### API utilisée
 Les données sont recuperer par une API MockAPI. 
 #### Exemple de données (série) :
 ```html
 {
  "id": "2",
  "title": "Breaking Bad",
  "type": "series",
  "releaseYear": 2008,
  "seasons": [1, 2, 3, 4, 5],
  "image": "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
  "description": "A chemistry teacher turns to manufacturing drugs.",
  "genres": ["Drama", "Crime", "Thriller"],
  "directors": ["Vince Gilligan"],
  "productionCountries": ["USA"]
}
```

import { sauvegarder,initaliser } from "./api.js";
import {modal} from './modal.js';
import {pagination} from './pagination.js'
import {addFavorite,listFavor,removeFavorite} from './listFavor.js';
let movies=await initaliser()
let nbrItem=6
let page=1

modal(movies);
console.table(movies)
// search(movies)
pagination(movies,page,nbrItem)
// getFavorite()

addFavorite(movies)
removeFavorite(movies)
let Favorite=new Set(JSON.parse(localStorage.getItem("favorite")) || [])
listFavor(Favorite)
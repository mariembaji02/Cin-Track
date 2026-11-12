import {initaliser } from "./api.js";
import {modal} from './modal.js';
import {pagination} from './pagination.js'
import {addFavorite,listFavor,removeFavorite,Favorite} from './listFavor.js';
let movies=await initaliser()
let nbrItem=6
let page=1

modal(movies);
pagination(movies,page,nbrItem)
addFavorite(movies)
removeFavorite(Favorite)
listFavor(Favorite)
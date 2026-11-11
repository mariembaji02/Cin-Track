import { sauvegarder,initaliser } from "./api.js";
import {afficherData} from './ui.js';
import {modal} from './modal.js';
import {search} from './search.js'
import {pagination} from './pagination.js'
let movies=await initaliser()
let nbrItem=6
let page=1
// afficherData(movies)
modal(movies);
// console.table(movies)
// search(movies)
pagination(movies,page,nbrItem)

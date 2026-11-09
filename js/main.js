import { sauvegarder,initaliser } from "./api.js";
import {afficherData} from './ui.js';
import {modal} from './modal.js';
import {search} from './search.js'
let movies=await initaliser()
afficherData(movies)
modal(movies);
// console.table(movies)
search(movies)

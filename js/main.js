import { sauvegarder,initaliser } from "./api.js";
import {afficherData} from './ui.js';
import {modal} from './modal.js';
let movies=await initaliser()
afficherData(movies)
modal(movies);
console.table(movies)

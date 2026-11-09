import { sauvegarder,initaliser } from "./api.js";
import {afficherData} from './ui.js';

let movies=await initaliser()
afficherData(movies)
console.table(movies)

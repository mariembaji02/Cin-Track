import {initaliser } from "./api.js";
import {modal} from './modal.js';
import {pagination} from './pagination.js'
import {search} from './search.js'
import {addFavorite,listFavor,removeFavorite,Favorite} from './listFavor.js';
let movies=await initaliser()
let nbrItem=6
let page=1

modal(movies);
pagination(movies,page,nbrItem)
search(movies)
addFavorite(movies)
removeFavorite(Favorite)
listFavor(Favorite)
let CountOfAll=document.querySelector(".allCount");
let SeriesCount=document.querySelector(".SeriesCount");
let MoviesCount =document.querySelector(".MoviesCount");
CountOfAll.textContent=Favorite.size
  let result=[...Favorite].reduce((total,fav)=>{
              if(fav.type==="series")
              {
                total.series++
              }
              else
              {
               total.movie++
              }
              return total
            },{movie:0,series:0})
            
            MoviesCount.textContent=result.movie
            SeriesCount.textContent=result.series
//hide && show menu
let btn = document.querySelector(".btnShow");
let listFavorite=document.querySelector(".FavorMovie")
btn.addEventListener("click",()=>{
    if(btn.classList.contains("btnShow"))
    {
       btn.classList.remove("btnShow")
       btn.classList.add("btnHide")
       btn.classList.replace("fa-list","fa-x")
       listFavorite.classList.remove("hidden")
    }
    else
    {
        btn.classList.remove("btnHide")
        btn.classList.add("btnShow")
        btn.classList.replace("fa-x","fa-list")
       listFavorite.classList.add("hidden")

    }
})
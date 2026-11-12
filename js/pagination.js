// import{initaliser} from './api.js'
import { addFavorite, listFavor,removeFavorite } from './listFavor.js'
import{search} from './search.js'
import{afficherData} from './ui.js'
// let movies=await initaliser()
let Favorite=new Set(JSON.parse(localStorage.getItem("favorite")) || [])

export function pagination(movies,Page,nbrItem)
{
      let paginElement=document.querySelector(".pagination")
      let startIndex=(Page-1)*nbrItem
      let endIndex=Page*nbrItem
      let filterTable=movies.slice(startIndex,endIndex)
      afficherData(filterTable)
      addFavorite(filterTable)
      listFavor(Favorite)
      // listFavor()
      let nbrPage=Math.ceil(movies.length/nbrItem)
    
      let btnNbr=Array.from({length:nbrPage},(_,i)=>i+1)
      paginElement.innerHTML=
      `<button data- class="rounded  w-10 h-10 bg-[rgba(230,225,225,0.78)]"  id="preview">&lt;</button>
      ${paginElement.innerHTML=btnNbr.map((btn,index)=>{
      return `<button   data-page=${index+1} class="num rounded  w-10 h-10 bg-[rgba(230,225,225,0.78)]">${btn}</button>`
      }).join("")}
        
        <button class="rounded  w-10 h-10 bg-[rgba(230,225,225,0.78)]" id="after">&gt;</button>`
        let number=document.querySelectorAll(".num")
        number.forEach(num=>{
          if(num.textContent.trim()==Page)
          {
             num.style.backgroundColor="#be185d"
             num.style.color="white"
        
          }
        })
      

      paginElement.addEventListener("click",(e)=>{
        let btn=e.target.closest("[data-page]")
        if(!btn) return
        Page=Number(btn.dataset.page)
        pagination(movies,Page,nbrItem)
       
      })
      let prv=document.getElementById("preview");
      if(Page==1)
      {
        prv.disabled=true;
        prv.style.opacity="0.5"
      }
     
      let next=document.getElementById("after")
        if(Page===nbrPage)
      {
        // console.log("true")
        next.disabled=true;
        next.style.opacity="0.5"
      }
      prv.addEventListener("click",function(){
        console.log("preview")
         if(Page>1)
         {
            Page--
            // console.log(Page)
            pagination(movies,Page,nbrItem)
            
         }
      })
      next.addEventListener("click",function(){
        if(Page<nbrPage)
         {
            Page++
            // console.log(Page)
            pagination(movies,Page,nbrItem)
            
         }
        
      })
      
}
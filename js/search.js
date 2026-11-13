import {pagination} from './pagination.js';
import {initaliser} from './api.js';
let movies=await initaliser();
let nbrItem=6
let page=1
 let input=document.querySelector(".Search");
 let type=document.querySelector(".genreType")
    let typeStatut="all"

export function search(movies)
{        
      
        let result=movies.filter(item=>{
        let search= item.title.toLowerCase().includes(input.value.toLowerCase().trim())
         
  
        let filter= typeStatut==="all"|| item.type===typeStatut;
         return filter && search
       })
            let message=document.querySelector(".message")
            let gird=document.querySelector(".CardGrid");
            let paginElement=document.querySelector(".pagination")
        if(result)
        {
            gird.classList.remove("hidden")
            paginElement.classList.remove("hidden")
            message.classList.add("hidden")
            pagination(result,page,nbrItem);
        }
        if(result.length==0)
        {
            
            gird.classList.add("hidden")
            paginElement.classList.add("hidden")
            message.classList.remove("hidden")
            message.textContent="Aucun Titre Correspand ..."
        }
       
          
}
           
            input.addEventListener("input",()=>{
                search(movies)
                
            })
            type.addEventListener("click",(e)=>{
              let btn =e.target.closest("[data-type]");
               if(!btn) return
               typeStatut=btn.dataset.type;
               type.querySelectorAll("button").forEach(btn=>
                btn.classList.remove("border-white","bg-[rgba(220,206,220,0.52)]","border-b-5")
               )
               btn.classList.add("border-white","bg-[rgba(220,206,220,0.52)]","border-b-5","rounded")
              search(movies)

              })
 
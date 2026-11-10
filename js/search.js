import {afficherData} from './ui.js';
import {initaliser} from './api.js';
let movies=await initaliser();
 let input=document.querySelector(".Search");
 let type=document.querySelector(".genreType")
    let typeStatut="all"

export function search(movies)
{        
        // console.log(input.value)
      
        let result=movies.filter(item=>{
        let search= item.title.toLowerCase().includes(input.value.toLowerCase().trim())
         
  
        let filter= typeStatut==="all"|| item.type===typeStatut;
         return filter && search
       })
        
        if(result)
        {
            afficherData(result)
        }
        else
        {
            console.log("no data found ")
        }
       
          
}
           
            input.addEventListener("input",()=>{search(movies)})
            type.addEventListener("click",(e)=>{
              let btn =e.target.closest("[data-type]");
               if(!btn) return
              typeStatut=btn.dataset.type;
              search(movies)

              })
 
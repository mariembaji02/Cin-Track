

export function addFavorite(movies)
{
  
   
   let Favorite=new Set(JSON.parse(localStorage.getItem("favorite")) || [])
//    Favorite= JSON.parse(localStorage.getItem("favorite"))
       let cards=document.querySelectorAll(".card")
    cards.forEach(card=>{
    let button=card.querySelector(".addFavor");
     button.addEventListener("click",(e)=>{
         e.stopPropagation()
         let nbr=button.dataset.model
         let result=movies.find(item=>{
          return item.id==nbr
         })
         if(result)
         {
             if ([...Favorite].some(item => item.id == result.id)) return
            
            Favorite.add(result)
           
            // console.log(Favorite)
            localStorage.setItem("favorite",JSON.stringify([...Favorite]))
            
           
         }
        listFavor(Favorite)
        
     })
          
     })
 

 
}
export function listFavor(list)
{       
    
       let listFavor=document.querySelector(".FavorMovie")
        listFavor.innerHTML=[...list].map(item=>{
          return `<li class="favor"> <div class="flex items-center gap-2"><img src=${item.image} alt="big Picture" class="h-15 w-10  object-cover  rounded"><p class="flex justify-start flex-col "><span class="font-semibold text-md">${item.title}</span><span class="text-gray-700 flex  text-xs  w-[100%] ">${item.genres.join("-")}</span></p></div> <i class="remove fa-solid fa-x cursor-pointer" data-id=${item.id}></i></li>`
       }).join("")
       let icon = document.querySelectorAll(".heart")
       icon.forEach(icon=>{
        let id=icon.dataset.btn;
          let result =[...list].some(mv=>mv.id==id)
          if(result)
          {
            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")
            icon.style.color="red"
          }
          else
          {
            icon.classList.remove("fa-solid")
            icon.classList.add("fa-regular")
            icon.style.color="grey"
          }
       })
      
}
export function removeFavorite(movies)
{
  
   
   let Favorite=new Set(JSON.parse(localStorage.getItem("favorite")) || [])
//    Favorite= JSON.parse(localStorage.getItem("favorite"))
    let ul=document.querySelector(".FavorMovie")
    
    
     ul.addEventListener("click",(e)=>{
        //  e.stopPropagation()
         let li=e.target.closest("i");
         if(!li)return
         console.log(li)
         let nbr=li.dataset.id
         let result=[...Favorite].find(item=>{
          return item.id==nbr
         })
         if(result)
         {
            
            Favorite.delete(result)
            
            // console.log(Favorite)
            localStorage.setItem("favorite",JSON.stringify([...Favorite]))
            
           
         }
        listFavor(Favorite)
        
     })
          
     
 

 
}
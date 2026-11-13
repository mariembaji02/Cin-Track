export let Favorite=new Set(JSON.parse(localStorage.getItem("favorite")) || [])
let CountOfAll=document.querySelector(".allCount"); 
let SeriesCount=document.querySelector(".SeriesCount");
let MoviesCount =document.querySelector(".MoviesCount");
export function addFavorite(movies)
{
  
   
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
            saveFavorite()
            CountOfAll.textContent=Favorite.size
            
            let count=[...Favorite].reduce((total,fav)=>{
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
            
            MoviesCount.textContent=count.movie
            SeriesCount.textContent=count.series
           
         }
        listFavor(Favorite)
        
     })
          
     })
 

 
}
function saveFavorite()
{
    localStorage.setItem("favorite",JSON.stringify([...Favorite]))
}
export function listFavor(Favorite)
{       
    
       let listFavor=document.querySelector(".FavorMovie")
        listFavor.innerHTML=[...Favorite].map(item=>{
          return `<li class="favor"> <div class="flex items-center gap-2"><img src=${item.image} alt="big Picture" class="h-15 w-15  object-cover  rounded"><p class="flex justify-start flex-col "><span class="font-semibold text-md">${item.title}</span><span class="text-gray-300 flex  text-xs  w-[100%] ">${item.genres.join("-")}</span></p></div> <i class="remove fa-solid fa-x cursor-pointer hover:text-pink-700" data-id=${item.id}></i></li>`
       }).join("")

     
        
       let icon = document.querySelectorAll(".heart")
       icon.forEach(icon=>{
        let id=icon.dataset.btn;
          let result =[...Favorite].some(mv=>mv.id==id)
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
export function removeFavorite(Favorite)
{
  
   
    let ul=document.querySelector(".FavorMovie")
    
    
     ul.addEventListener("click",(e)=>{
         let li=e.target.closest("i");
         if(!li)return
         // console.log(li)
         let nbr=li.dataset.id
         let result=[...Favorite].find(item=>{
          return item.id==nbr
         })
         if(result)
         {
            
            Favorite.delete(result)
            saveFavorite()
            CountOfAll.textContent=Favorite.size
              let count=[...Favorite].reduce((total,fav)=>{
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
            
            MoviesCount.textContent=count.movie
            SeriesCount.textContent=count.series
            
           
         }
        listFavor(Favorite)
        
     })
          
     
 

 
}
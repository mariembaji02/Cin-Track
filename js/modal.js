export function modal(movies)
{
       let grid=document.querySelector(".CardGrid");
       let modal=document.querySelector(".modal")
       let infos=document.querySelector(".infos")
    
        grid.addEventListener("click",(e)=>{
            let card = e.target.closest("[data-id]");
            if(!card)return
             let id=card.dataset.id

             let result=movies.find(item=>{
                return item.id===id
             })
             if(result)
             {
               infos.innerHTML=""
               //  console.log(result)
                modal.classList.remove("hidden")
               //  infos.style.backgroundImage=`url(${result.image})`
               //  infos.style.backgroundSize="100% 100%"
                infos.innerHTML+=
                `  <div class="details relative h-full  shadow-xl rounded-lg flex flex-col sm:flex-row  gap-1   bg-white ">
                         <img  src=${result.image} class=" w-[100%] h-[50%] object-fit sm:w-[50%] sm:h-[100%]  rounded-l-lg"/>
                         
                         <div class="flex flex-col w-full ml-2 relative sm:w-[50%]  sm:h-full sm:gap-3">
                          <h1 class=" text-2xl lg:text-4xl  font-bold mt-5 ">${result.title}</h1>
                         <ul class="flex justify-start gap-2 md:gap-4  mt-3">
                         ${
                               infos.innerHTML=(result.genres).map(genre=>{
                                   return `<li class=" rounded-lg text-xs md:text-sm p-2 bg-[rgba(173,168,173,0.39)] ">${genre}</li>`
                               }).join("")
                          }
                         </ul>
                         <p class=""> <span class="font-semibold text-lg">Year:</span> <span id="year" class="text-sm">${result.releaseYear}</span></p>
                         <p class="flex flex-col"><span class="font-semibold text-lg">Description:</span><span id="description" class="text-sm w-[90%]">${result.description}</span></p>
                         <p><span class="font-semibold text-lg">Director:</span>
                           ${infos.innerHTML=(result.directors).map(director=>{
                                   return `<span class=" rounded-lg text-sm p-2 ">${director}</span>`
                               }).join("-")}
                         
                         
                       
                         </p> 
                         <p> <span class="font-semibold text-lg">${result.type==="movie"?`Duree : `:`Seasons: `}</span><span>${result.type==="movie"?`${Math.floor(result.duration/60)}h ${Math.floor(result.duration%60)}min`:`{${result.seasons.join("-")}}`}</span>
                         </p>
                         <p class="text-right mr-3 absolute right-3 bottom-2 sm:top-7 sm:relative">
                            <span class="text-sm bg-bg-[rgba(173,168,173,0.59)]  p-2 rounded-lg "><i class="fa-solid fa-download " ></i>Download</span>
                            <span class="text-sm bg-black text-white p-2 rounded-lg "><i class="fa-solid fa-play "></i> Watch Now</span>
                         
                         </p>
                          
                         </div>
                         <button class="hideModal cursor-pointer absolute top-3 hover:text-white right-5"> <i class="fa-solid fa-x"></i> </button>
                        </div>`
                let btnHide=document.querySelector(".hideModal");
                btnHide.addEventListener("click",()=>{
                modal.classList.add("hidden")
                    
                })
              
                
             }
             else
             {
                console.log("not found")
             }
        })
        
}
export function modal(movies)
{
       let grid=document.querySelector(".CardGrid");
       let modal=document.querySelector(".modal")
       let infos=document.querySelector(".infos")
    
        grid.addEventListener("click",(e)=>{
            let card = e.target.closest("[data-id]");
             let id=card.dataset.id

             let result=movies.find(item=>{
                return item.id===id
             })
             if(result)
             {
                console.log(result)
                modal.classList.remove("hidden")
                infos.style.backgroundImage=`url(${result.image})`
                infos.style.backgroundSize="100% 100%"
                infos.innerHTML+=
                `  <div class="details absolute top-[50%] left-[5%]">
                         <h1 class=" text-4xl text-white font-bold  ">${result.title}</h1>
                         <ul class="flex gap-4 mt-3 ">
                         ${
                               infos.innerHTML=result.genres.map(genre=>{
                                    `<li class="bg-[rgba(230,225,225,0.78)] rounded-2xl text-lg p-2">${genre}</li>`
                               }).join("")
                          }
                         </ul>
                         <p class="text-[rgb(130,129,129)] text-lg mt-3">Year: <span id="year">${result.releaseYear}</span></p>
                         <p class="text-[rgb(130,129,129)] text-lg mt-3 w-[70%]">Year: <span id="description">${result.description}</span></p>
                       </div>`
                
                // console.log()
                console.log(result.description)
                console.log(result.genres)
                console.log(result.releaseYear)
                console.log(result.directors)
                console.log(result.productionCountries)
                console.log(result.type)
                
             }
             else
             {
                console.log("not found")
             }
        })
}
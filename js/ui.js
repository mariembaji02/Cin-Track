export function afficherData(movies)
{
    let gird=document.querySelector(".CradGrid");
    gird.innerHTML=movies.map(card=>{
        const {image,type,id}=card
        return `   <div class="card relative" data-id=${card.id}><img src=${card.image} class="rounded h-[100%] object-cover" alt="big Picture"><i class="fa-regular fa-heart  text-gray-300 absolute top-6 right-6 text-2xl"></i>
                             <div class="absolute bottom-20 left-4 text-white w-[80%] p-2 ">                               
                             </div>
                              <p class="type text-center py-2 mr-10 text-xl absolute bottom-7 w-20 rounded-lg right-0 bg-[rgba(186,182,182,0.71)] font-semibold">${card.type}</p>  
                            </div>`
         
    }).join("")
}
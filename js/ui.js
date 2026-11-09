export function afficherData(movies)
{
    let gird=document.querySelector(".CardGrid");
    gird.innerHTML=movies.map(card=>{
        const {image,type,id}=card
        return `   <div class="card relative" data-id=${id} ><img src=${image} class="rounded h-[90%] cursor-pointer   object-cover w-[100%]"  alt="big Picture"><i class="fa-regular fa-heart  text-gray-300 absolute top-6 right-6 text-2xl"></i>
                             <div class="absolute bottom-20 left-4 text-white w-[80%] p-2 ">                               
                             </div>
                              <p class="type text-center py-4 mr-10 text-xl absolute top-5 w-25 rounded-lg left-5 bg-[rgba(230,225,225,0.78)] font-semibold">${type}</p>  
                            </div>`
         
    }).join("")
}

import {afficherData} from './ui.js';
export function search(movies)
{
    let input=document.querySelector(".Search");
    input.addEventListener("input",()=>{
        // console.log(input.value)
    
    let result=movies.filter(item=>{
        return item.title.toLowerCase().includes(input.value.toLowerCase().trim())
    })
    if(result)
    {
        afficherData(result)
    }
    })
}
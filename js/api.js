export async function initaliser()
{
    let Movies=JSON.parse(localStorage.getItem("movies"))
    if(Movies===null)
    {
        try{
            
        const response= await fetch("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")
        if(!response.ok)
        {
            console.log("error :",response.status)
        }
              Movies= await response.json()
            
                return Movies
            }
            catch(error)
            {
            console.log("error:",error.message)
            }
            finally{
            console.log("fetch terminée")
            }
    }
    else
    {
        return Movies
    }
   
        
}
export function sauvegarder(Movies)
{
     localStorage.setItem("movies",JSON.stringfy(Movies));
}
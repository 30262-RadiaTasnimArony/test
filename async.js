const  loadDashboard= async(userld)=>{
    showloader(true)
    try{
        const userResponse= await fetch(`GET /api/users/${userld}`)
        if(!userResponse.ok){
            throw new Error("User request failed")
        }
        const user= await data.json()
    }
    catch{
        
    }
    showloader(false)

}
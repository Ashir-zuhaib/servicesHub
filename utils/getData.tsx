import firebase from "../config";

const getAllService =async()=>{
    let services = []
    await firebase.firestore().collection("Services").get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            let data = doc.data()
            data.id = doc.id
            services.push(data)
        })
    })
    return services
}
const getWorkerByService =async(role)=>{
    console.log("rossle",role);
    
    let services = []
    if(role){
    await firebase.firestore().collection("Users").where("worker","==", true)
    .where("role","==",role).get()
    .then((querySnapshot)=>{
        console.log("sixe", querySnapshot.size);
        
        querySnapshot.forEach((doc)=>{
            let data = doc.data()
            data.id = doc.id
            services.push(data)
        })
    })
}
    return services
}

export {getAllService, getWorkerByService}
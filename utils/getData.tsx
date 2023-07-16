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

export {getAllService}
import { Persona } from "@/Interfaces/Interfaces";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";
//se busca agregar un documento cn una coleccion
export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db, "persona"),persona);

}
export const obtenerPersonas = async()=>{
    const querySnapshot = await getDocs(collection(db, "persona"));
    let personas:Persona[] = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        let persona:Persona = {
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            edad:doc.data().edad,
            fechaNacimiento:doc.data().fechaNacimiento,
            nombre:doc.data().nombre,
            rut:doc.data().rut
        }
        personas.push(persona)
});
return personas
}
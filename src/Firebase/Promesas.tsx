import { Persona } from "@/Interfaces/Interfaces";
import { addDoc, collection, getDoc, getDocs, doc, updateDoc } from "firebase/firestore";
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
            rut:doc.data().rut,
            key:doc.id
        }
        personas.push(persona)
});
return personas
}
export const obtenerPersona = async(key:string)=>{   //esta es distinta a la de arriba
    const docRef = doc(db, "persona", key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        let persona:Persona = {
            apellido:docSnap.data().apellido,
            correo:docSnap.data().correo,
            edad:docSnap.data().edad,
            fechaNacimiento:docSnap.data().fechaNacimiento,
            nombre:docSnap.data().nombre,
            rut:docSnap.data().rut,
            key:docSnap.id
        }
        return persona
    
      } else {
        return undefined
      }
}
export const modificarPersona = async(persona:Persona)=>{
    const ref = doc(collection(db,"persona"),persona.key)
    //con key incluida
    //await updateDoc(ref,{...persona})
    //sin key
    await updateDoc(ref,{
        nombre:persona.nombre,
        apellido:persona.apellido,
        rut:persona.rut,
        edad:persona.edad,
        fechaNacimiento:persona.fechaNacimiento,
        correo:persona.correo
    })
}
import React from 'react'    //escribir raf solo se puede cn las extensiones
import { Permiso } from './Permiso'
interface Props{
    nombre:string,
    apellido:string,
    edad?:number
    
}
export const Perfil = (props:Props) => {
  return (
    <>
        <h1>hola!</h1>
        <p>nombre:{props.nombre} </p>
        <p>apellido:{props.apellido}</p>
        <p>edad: {props.edad}</p>
        {
            props.edad!=undefined &&  // & es un and, si tiene 2 prueba uno y no el otro, si tiene 1 prueba ambos
            props.edad > 18 &&
            <>
            <p>tienes permitido pasar</p>
            <Permiso permiso1='Beber' permiso2='conducir'/>
            </>
        }
{
            props.edad!=undefined &&
            props.edad <18 &&
            <>
            <p>No tienes permiso para pasar</p>
            <Permiso permiso1='tomar leche' permiso2='divertirse'/>
            </>
}
    </>
  )
}

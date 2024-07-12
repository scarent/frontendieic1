import { obtenerPersonas } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/Interfaces'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { FaUserEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
export const Pagina4 = () => {
    const [personas, setPersonas] = useState<Persona[]>([]) //importar la Persona
    useEffect(()=>{
        obtenerPersonas().then((personas)=>{  
            console.log(personas)
            setPersonas(personas)   
        }).catch((e)=>{
            alert("NO se logran cargar los datos")
            console.log(e)
        })
    
    },[]) //corchete recupera personas
  return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Rut</th>
                    <th>Correo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                    <th>Accion</th>
                    </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{   // .map javascript  
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechaNacimiento}</td> 
                                <td>{p.edad}</td> 
                                <td> 
                                    <Link href={{pathname:"Pagina5",query:{key:p.key}}}>  
                                        <Button variant='warning'><FaUserEdit /></Button>
                                    </Link>
                                        <Button variant='danger'><FaDeleteLeft /></Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
    </>
  )
}
export default Pagina4
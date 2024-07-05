import { obtenerPersonas } from '@/Firebase/Promesas'
import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
export const Pagina4 = () => {
    useEffect(()=>{
        obtenerPersonas().then((personas)=>{  
            console.log(personas)
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
                    <th>Corre</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                    <th>Accion</th>
                    </tr>
            </thead>
            <tbody>

            </tbody>
            </Table>
    </>
  )
}
export default Pagina4
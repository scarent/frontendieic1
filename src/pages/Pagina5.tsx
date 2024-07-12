import { initialStatePersona } from '@/EstadosiIniciales/Persona'
import { modificarPersona, obtenerPersona } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/Interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export const Pagina5 = () => {
    const [persona,setPersona]= useState<Persona>(initialStatePersona)
    const handlePersona = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        //validacion
        if(typeof key == "string"){
            obtenerPersona(key).then((p)=>{
                if(p!=undefined){
                    setPersona(p)
                }else{
                    //devolver la tabla
                }
        })
    }else{
        //cdevuelte la tabla
    }
        

    },[])

  const handleModificar = ()=>{
    modificarPersona(persona).then(()=>{
        alert("Se modifico con exito")
    }).catch((e)=>{
        alert("Algo ocurrio")
    })

  }  
    return (
        <>
        <Form> 
                <Form.Group>
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type='text' placeholder='ingresa tu nombre'
                        value={persona.nombre}
                        name='nombre' // siempre el name tiene que tener el mismo nombre d lo de arriba
                        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> 
                    <Form.Text></Form.Text>

                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type='text' placeholder='ingresa tu Apellido'
                    value={persona.apellido}
                    name='apellido'
                    onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                    <Form.Text></Form.Text>

                </Form.Group>
                <Form.Group>
                    <Form.Label>Rut:</Form.Label>
                    <Form.Control type='text' placeholder='ingresa tu Rut'
                    value={persona.rut}
                    name='rut'
                    onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                    <Form.Text></Form.Text>

                </Form.Group>
                <Form.Group>
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type='email' placeholder='Ingresa tu correo'
                    value={persona.correo}
                    name='correo'
                    onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                    <Form.Text></Form.Text>

                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha Nacimiento:</Form.Label>
                    <Form.Control type='date' placeholder='ingresa tu fecha nacimiento'
                    value={persona.fechaNacimiento}
                    name='fechaNacimiento'
                    onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                    <Form.Text></Form.Text>

                </Form.Group><Form.Group>
                    <Form.Label>Edad:</Form.Label>
                    <Form.Control type='number' placeholder='ingresa tu edad'
                    value={persona.edad}
                    name='edad'
                    onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                    <Form.Text></Form.Text>

                </Form.Group>
                <Button type='button' variant='primary'
                    onClick={handleModificar}>Modificar</Button>
            </Form>
        </>
    )
}
export default Pagina5

//eliminar -> modal

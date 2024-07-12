import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Persona } from '@/Interfaces/Interfaces'
import { initialStatePersona } from '@/EstadosiIniciales/Persona'
import { registrarPersona } from '@/Firebase/Promesas'
export const Pagina3 = () => {
    const [persona,setPersona]= useState<Persona>(initialStatePersona)
    const handlePersona = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }
    const handleRegistrar =()=>{
        registrarPersona(persona).then(()=>{
            alert("se registro con exito")
        }).catch((e)=>{
            alert("Algo ocurrio")
            console.log(e)
        })

    }
  return (
    <>
        <Form> 
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type='text' placeholder='ingresa tu nombre'
                    name='nombre' // siempre el name tiene que tener el mismo nombre d lo de arriba
                    onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> 
                <Form.Text></Form.Text>

            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type='text' placeholder='ingresa tu Apellido'
                name='apellido'
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                <Form.Text></Form.Text>

            </Form.Group>
            <Form.Group>
                <Form.Label>Rut:</Form.Label>
                <Form.Control type='text' placeholder='ingresa tu Rut'
                name='rut'
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                <Form.Text></Form.Text>

            </Form.Group>
            <Form.Group>
                <Form.Label>Correo:</Form.Label>
                <Form.Control type='email' placeholder='Ingresa tu correo'
                name='correo'
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                <Form.Text></Form.Text>

            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha Nacimiento:</Form.Label>
                <Form.Control type='date' placeholder='ingresa tu fecha nacimiento'
                name='fechaNacimiento'
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                <Form.Text></Form.Text>

            </Form.Group><Form.Group>
                <Form.Label>Edad:</Form.Label>
                <Form.Control type='number' placeholder='ingresa tu edad'
                name='edad'
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
                <Form.Text></Form.Text>

            </Form.Group>
            <Button type='button' variant='primary'
                onClick={handleRegistrar}>Registrar</Button>
        </Form>
    </>
  )
}
export default Pagina3
import React from 'react'
import Button from '../Button/Button'
import {useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {

    const navigate = useNavigate()

  return (

      <div className='dashboard'>
                <Button onClick={() => { navigate('/') }} 
                text="Inicio"
                />
                <ul>
                    <Button onClick={() => { navigate('/Usuarios') }} 
                    text='Usuarios' alt='Aba01' title='Aba01'
                    />

                    <Button onClick={() => { navigate('/login') }} 
                    text='Sair' alt='Sair' title='Sair'
                    //text={<img src="https://img.icons8.com/material/48/000000/user-male-circle--v1.png" alt='Sair' title='Sair'/>}
                    />
                </ul>
            </div>
  )
}

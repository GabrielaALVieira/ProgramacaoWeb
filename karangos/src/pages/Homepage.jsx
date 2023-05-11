import React from 'react'
import Typography from '@mui/material/Typography'
//import {Typography} from '@mui/material' - outra maneira de importar esse elemento
import Box from '@mui/material/Box'
import image from '../assets/vintage-cars.png'


export default function Homepage(){
    return (
        <>
            <Typography variant= "h1" sx={{
                mb: '50px'   //marginBottom
            }}>
                Bem-vindo (a) à loja Karangos!
                
            </Typography>

            <Box sx={{
                textAlign: 'center',
               
                '& img': {
                maxWidth: '800px',
                width: '80%' //para deixar a figura da página responsiva
                }
            }}>
                <img src={image} alt="Carros antigos"/>
                
            </Box>
        </>
    )
}




import React from 'react'
import Typography from '@mui/material/Typography'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; //elemento coração 

import image from '../assets/Gabriela.jpg' 


export default function TestForm(){ //função será executada apenas 1x - queremos executar a ação de inicialização do estado apenas durante
    //a fase de "mount" do ciclo de vida do componente, o que é chamado "lazy initializer" - não vai chamar a função toda hora, só na fase mount, 1x
    
    const [state, setState] = React.useState(

        ()=> JSON.parse(window.localStorage.getItem('likes'))  //lazy initializer         
    )
    
    React.useEffect(()=>{        
        window.localStorage.setItem('likes', JSON.stringify(state))
    }, []) //vetor de dependencia vazio - é executado apenas na primeira atualização, após fase de mount
    

    function handleCurtirButtonClick(){ //função para incrementar likes

     setState(event.target.value)
           
    } 
    
    return(
        <>
            <Typography variant="h1" sx={{ mb: '50px'}}>
               Sobre a autora
            </Typography>


            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 300 }}
                image="../assets/Gabriela.jpg"
                title="Gabriela"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Gabriela Alves Licursi Vieira
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Sou uma pessoa muito responsável, porém bastante ansiosa. Busco evoluir a cada dia e sempre ser melhor que ontem.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Curtir</Button>
                
                
                <IconButton 
                    aria-label= "Curtir"
                    onClick={()=> handleCurtirButtonClick()} 
                >
                    <FavoriteIcon color="error" /> {/*coração em vermelho*/}
                </IconButton>

            </CardActions>
            </Card>


        </>
    )
}
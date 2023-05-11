import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CoffeeIcon from '@mui/icons-material/Coffee';


export default function FooterBar() { //mudamos somente o nome da função para FooterBar
  return (
    <Toolbar 
        variant="dense" 
        component="footer"
        sx={{
            backgroundColor: 'action.disabledBackground',
            justifyContent: 'center',
            minHeight: '30px',
            position: 'fixed',
            bottom: 0,
            width: '100vw',
            '& a': {
                color: 'secondary.light'
            } 

        }} //fica uma barra cinza, no modo escuro, atrás do copywrite
    >
          <Typography variant= "caption" sx= {{ color: 'text.secondary' }}>
                Desenvolvido com <CoffeeIcon fontSize="small"/> por <a href="mailto:galv_bio@yahoo.com.br">Gabriela Alves Licursi Vieira</a>. Todos os direitos reservados.
          </Typography>
    </Toolbar>
     
  );
}
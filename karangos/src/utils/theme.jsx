import { createTheme } from '@mui/material/styles';
import { yellow, pink } from '@mui/material/colors';
import { ptBR } from '@mui/x-data-grid'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: pink[500],
    },
  },
  typography:{
    h1: {
      fontSize: '30px',
      fontWeight: 'bold'
    }
  },  
}, ptBR); //para as opções da tabela virem em portugues, em vez de ingles nos tres pontinhos de cada coluna para organizar

export default theme
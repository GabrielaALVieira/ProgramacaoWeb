import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import TopBar from './components/ui/TopBar'
import theme from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FooterBar from './components/ui/FooterBar'
import { CssBaseline } from '@mui/material';

import Homepage from './pages/Homepage';
import CustomersList from './pages/CustomersList';
import CustomersForm from './pages/CustomersForm';
import CarsList from './pages/CarsList'; //import de element CarsList - para a rota adicionada abaixo
import CarsForm from './pages/CarsForm'; //import de element CarsForm - para as rotas adicionadas abaixo



function App() { 

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ 
            width: '100vw', 
            minHeight: '100vh', 
            backgroundColor: 'background.default'
          }}>
            <TopBar />
            <Box sx={{
              margin: '25px 25px 55px 25px', 
              //backgroundColor: 'blue' - tira o azul do segundo box que estava dentro do primeiro box
            }}>

              <Routes>
              
                <Route path="/" element={ <Homepage /> } />
                <Route path="/customers" element={ <CustomersList /> } />
                <Route path="/customers/new" element={ <CustomersForm /> } />
                <Route path="/customers/:id" element={ <CustomersForm /> } />
                <Route path="/cars" element={ <CarsList /> } />       {/*  inserção de nova rota: /cars que aponta para seu elemento CarsList */}
                <Route path="/cars/new" element={ <CarsForm /> } />   {/*  inserção de nova rota: /cars/new que aponta para seu elemento CarsForm */}
                <Route path="/cars/:id" element={ <CarsForm /> } />   {/*  inserção de nova rota: /cars/:id que aponta para seu elemento CarsForm */}

              </Routes>

            </Box>
            <FooterBar/>
          </Box>
        </ThemeProvider>  
      </BrowserRouter>
    </>
  )
}

export default App

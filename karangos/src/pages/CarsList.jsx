import React from 'react';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'; //import de ícone de botão diferente para delete
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; //sempre assim o import de ícone
import AddCircleIcon from '@mui/icons-material/AddCircle'; //import de ícone de botão diferente para Cadastrar novo carro
import { Link } from 'react-router-dom'

export default function CarsList(){ //Função CarsList - para gerar lista de carros

    const [state, setState] = React.useState({
        cars: {} //variável com objeto vazio

    })

    //Desestruturando as variáveis de estado
    const{
        cars
    } = state


    //Esse useEffect() será executado apenas uma vez, durante o carregamento da página    
    React.useEffect(() => {
        loadData()    //Carrega dos dados do backend
    }, [])

    async function loadData(){ //função que carrega os dados de backend
        try {    //try e catch sao formas de cercar o erro, de forma q não atrapalhe o andamento da página
            const result = await fetch('https://api.faustocintra.com.br/cars')   //URL de backend// fetch mecanismo nativo do js 
        
            //requisição ao backend OK
        if(result.ok) setState ({...state, cars: await result.json()})
            //requisição ao backend com erro
        else throw new Error (`[HTTP ${result.status}] ${result.statusText}`)
        
        }
        catch(error) {
            //exibimos o erro no console
            console.error (error)
        }
    }

    //Abaixo, estão todos os campos da tabela para os Carros, que são as colunas da tabela e seus cabeçalhos.
    const columns = [
        { 
            field: 'id', //é o campo que se associa com o item de mesmo nome no backend  
            headerName: 'ID', //headerName é o cabeçalho da coluna
            width: 90 }, //largura da coluna
        {
          field: 'brand',
          headerName: 'Marca', //por default, se não há indicação de alinhamento para o texto, este fica à esquerda.
          width: 150
        },
        {
            field: 'model',
            headerName: 'Modelo',
            align: 'center',  //alinhamento central do conteúdo
            headerAlign: 'center', //alinhamento central do cabeçalho
            width: 150
          },
        {
          field: 'color',
          headerName: 'Cor',
          align: 'center',
          headerAlign: 'center',
          width: 100, 
        },        
        {
            field: 'year_manufacture',
            headerName: 'Ano de fabricação',
            align: 'center',
            headerAlign: 'center',
            width: 200,
          },
        {
          field: 'imported',
          headerName: 'Importado (1) / Nacional (0)',
          align: 'center',
          headerAlign: 'center',
          width: 250
        },
        {
            field: 'plates',
            headerName: 'Placas',
            align: 'center',
            headerAlign: 'center',
            width: 150,
        },
        {
          field: 'selling_price',
          headerName: 'Preço de venda',
          align: 'center',
          headerAlign: 'center',
          width: 150,
        },
        {
            field: 'edit',
            headerName: 'Editar',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params =>
                <Link to={'./' + params.id}> {/*botão editar leva à Cadastro de carros (CarsForm)*/}
                    <IconButton aria-label= "Editar"> 
                        <EditIcon />
                    </IconButton>
                </Link>    
        },
        {
            field: 'delete',
            headerName: 'Excluir',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params =>
                <IconButton 
                    aria-label= "Excluir"
                    onClick={()=> handleDeleteButtonClick(params.id)} //está esperando o id para fazer a deleção
                >
                    <DeleteIcon color="error" />
                </IconButton>
        },  //alteração do ícone para deleção - DeleteIcon
      ];     
      
      async function handleDeleteButtonClick(id){
        if(confirm('Deseja realmente excluir este item?')){
            try{
                //faz a chamada ao back-end para excluir o carro
                const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, { //URL de backend para exclusão de item carro
                    method: 'DELETE'
                })
                //Se a exclusão tiver sido feita com sucesso, atualiza a listagem
                if(result.ok) loadData() //recarrega os carros novamente, agora, já sem o carro deletado, se for o caso de deleção. 
                alert('Exclusão efetuada com sucesso!')
            }
            catch(error){
                console.error(error)
            }
        }
      } 

    return ( //alteração para Listagem de carros - título da página altera quando clicar no menu Carros
        <>
            <Typography variant="h1" sx={{ mb: '50px'}}> 
                Listagem de carros   
            </Typography>

            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                mb: '25px' //margin bottom
            }}>
                <Link to = "new"> 
                    <Button      //Botão para Cadastrar novo carro - alinhado à direita; com alteração de cor e de ícone.   
                        variant="contained" 
                        color="success" //alteração de cor para verde
                        size="large"
                        startIcon={<AddCircleIcon />} //alteração para um ícone de círculo no botão para cadastro de novos carros
                        >
                        Cadastrar novo carro
                    </Button>
                </Link>
            </Box>

            {/*Alteração de sombreamento de Paper para elevation={15} - sombreamento ao redor da tabela de Listagem de carros*/}
            <Paper elevation ={15} sx={{ height: 400, width: '100%' }}> 
            <DataGrid
                rows={cars} //linhas indicam os diferentes conteúdos de carros
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
            </Paper>

        </>
    )
}
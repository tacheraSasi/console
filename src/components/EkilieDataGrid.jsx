import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const EkilieDataGrid = ({rows, columns})=>{
    return(
        <Box 
            className = 'box'
            height="75vh" 
            p="0"
            m="auto"
            sx={{ 
            width: '100%',
            "& .MuiDataGrid-columnHeaders":{
            backgroundColor:"#2d4938",
            borderColor:"#2d4938"
            },
            "& .MuiDataGrid-root":{
            borderColor:"#2d4938"
            },
            "& ,MuiDataGrid-virtualScroller":{
            backgroundColor:"#222"
            },
            "& .MuiDataGrid-footerContainer":{
            backgroundColor:"#2d4938",
            color:"white",
            borderColor:"#2d4938"
            },
            "& .MuiTablePagination-root":{
            color:"white"
            },
            "& .MuiList-root":{
                color:'white',
                backgroundColor:'#201f1f'
            }
            }}>
            
            <DataGrid
            sx={{color:'white'}}
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            />
        </Box>
    )
}

export default EkilieDataGrid
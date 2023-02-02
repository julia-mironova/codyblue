import React from "react";
import { ModalComponent } from "../modal/Modal.jsx";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { products } from "../../fake_data.js";
import styles from "./Table.module.css";

const columns = [
  { field: 'id', headerName: 'ID', width: 170, headerClassName: 'header' },
  { field: 'name', headerName: 'Name', width: 300, headerClassName: 'header' },
  { field: 'year', headerName: 'Year', width: 300, headerClassName: 'header' }  
];

const rows = [...products];
const colorsAll = [...rows.map(e => e.color)];
const colors = Array.from(new Set(colorsAll))
console.log(colors, "colors")

class TableComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      productInfo:""
    };
  } 

  handleCloseModal = () =>{
    this.setState({
      showModal: false,
      productInfo: "",
    });
  }

  showInfo = (rowInfo) => {
    this.setState({
      showModal: true,
      productInfo: rowInfo.row,
    });
  }

  getColor = () => {   
    return "green"
  }

  getColor2 = () => {   
    return "yellow"
  }

   getColor3 = () => {   
    return "pink"
  }

   getColor4 = () => {   
    return "red"
  }

  render() {
    return (
      <Box className={styles.table} sx={{
        '& .header': { backgroundColor: "#32a1ce" },
        '& .color': { backgroundColor: this.getColor },
        '& .color2': { backgroundColor: this.getColor2 },
        '& .color3': { backgroundColor: this.getColor3 },
        '& .color4': { backgroundColor: this.getColor4 },
        //https://mui.com/x/react-data-grid/style/
        //https://www.ag-grid.com/react-data-grid/row-styles/
        }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowClassName={(params) => {
            //console.log(params.row.color, "params.row.color")
            return params.row.color === "green" ? 'color' : (params.row.color === "yellow")?"color2": (params.row.color === "pink")?"color3":"color4"
          }}        
        onRowClick={this.showInfo}
        />
        <ModalComponent showModal={this.state.showModal} closeModal={this.handleCloseModal}>
          <h1>{JSON.stringify(this.state.productInfo)}</h1>
        </ModalComponent>
    </Box>
  );  
  }    
}

export { TableComponent }

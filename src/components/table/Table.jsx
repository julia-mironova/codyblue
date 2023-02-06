import React from "react";
import { ModalComponent } from "../modal/Modal.jsx";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import styles from "./Table.module.css";

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
  
  render() {
    const columns = [
    { field: 'id', headerName: 'ID', width: 170, headerClassName: 'header' },
    { field: 'name', headerName: 'Name', width: 300, headerClassName: 'header' },
    { field: 'year', headerName: 'Year', width: 300, headerClassName: 'header' }  
   ];


    const colorsAll = [...this.props.rows.map(e => e.color)];
    //const colors = Array.from(new Set(colorsAll))
       
    return (
      <Box className={styles.table} sx={{
        '& .header': { backgroundColor: "#32a1ce" },
        '& .color': { backgroundColor: colorsAll[0] },
        '& .color1': { backgroundColor: colorsAll[1] },
        '& .color2': { backgroundColor: colorsAll[2] },
        '& .color3': { backgroundColor: colorsAll[3] },
        '& .color4': { backgroundColor: colorsAll[4] },
        '& .color5': { backgroundColor: colorsAll[5] },
        '& .color6': { backgroundColor: colorsAll[6] },
        '& .color7': { backgroundColor: colorsAll[7] },
        '& .color8': { backgroundColor: colorsAll[8] },
        '& .color9': { backgroundColor: colorsAll[9] },
        '& .color10': { backgroundColor: colorsAll[10] },
        '& .color11': { backgroundColor: colorsAll[11] }
        //https://mui.com/x/react-data-grid/style/
        //https://www.ag-grid.com/react-data-grid/row-styles/
        }}>
      <DataGrid
        rows={this.props.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
          getRowClassName={(params) => { 
            const tookColor = params.row.color;
            switch (tookColor) {
              case colorsAll[0]: return "color";
              case colorsAll[1]: return "color1";
              case colorsAll[2]: return "color2";
              case colorsAll[3]: return "color3";
              case colorsAll[4]: return "color4";
              case colorsAll[5]: return "color5";
              case colorsAll[6]: return "color6";
              case colorsAll[7]: return "color7";
              case colorsAll[8]: return "color8";
              case colorsAll[9]: return "color9";
              case colorsAll[10]: return "color10";
              case colorsAll[11]: return "color11";
              default: return;
            }
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

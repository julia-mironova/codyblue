import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { products } from "../../fake_data.js";
import { styled } from '@mui/material/styles';
import styles from "./Table.module.css";
import { height } from "@mui/system";
import { yellow } from "@mui/material/colors";

const columns = [
  { field: 'id', headerName: 'ID', width: 170, headerClassName: 'header' },
  { field: 'name', headerName: 'Name', width: 300, headerClassName: 'header' },
  { field: 'year', headerName: 'Year', width: 300, headerClassName: 'header' }  
];

const rows = [ ...products];

class TableComponent extends React.Component {
  render() {
    return (
      <Box className={styles.table} sx={{
        '& .header': { backgroundColor: "#32a1ce" }, '& .yellow': {
          backgroundColor: "yellow",
        }
        //https://mui.com/x/react-data-grid/style/
        }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowClassName={(params) => `yellow`}
      />
    </Box>
  );  
  }    
}

export { TableComponent }

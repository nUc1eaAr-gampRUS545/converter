import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ handleValute,state,handleState }) {
  
  const handleChange = (e) => {
    const click = `${e.target.value}`;
    handleValute(`${click.substring(0, 3)}`);
    handleState(e.target.value);
  };
  const dfsf=(data)=>{
    handleState(data)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          onChange={handleChange}
        >
          <MenuItem
            value={"RUB"}
            onClick={() => {
              dfsf("RUB");
            }}
          >
            RUB Российский рубль
          </MenuItem>
          <MenuItem
            value={`USD`}
            onClick={() => {
              dfsf("USD");
            }}
          >
            USD Американский доллар
          </MenuItem>
          <MenuItem
            value={`EUR`}
            onClick={() => {
              dfsf("EUR");
            }}
          >
            EUR Евро
          </MenuItem>
          <MenuItem
            value={`YUN`}
            onClick={() => {
              dfsf("YAN");
            }}
          >
            YUN Юань
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ handleValute, currency }) {
  
  const [bum, setBum] = React.useState(currency);
  


  const handleChange = (e) => {
    const cak = `${e.target.value}`;
    handleValute(`${cak.substring(0, 3)}`);
    setBum(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bum}
          onChange={handleChange}
        >
          <MenuItem
            value={"RUB"}
            onClick={() => {
              setBum("RUB");
            }}
          >
            RUB Российский рубль
          </MenuItem>
          <MenuItem
            value={`USD`}
            onClick={() => {
              setBum("USD");
            }}
          >
            USD Американский доллар
          </MenuItem>
          <MenuItem
            value={`EUR`}
            onClick={() => {
              setBum("EUR");
            }}
          >
            EUR Евро
          </MenuItem>
          <MenuItem
            value={`YUN`}
            onClick={() => {
              setBum("YAN");
            }}
          >
            YUN Юань
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

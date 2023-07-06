import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ handleValute, currency }) {
  
  const [state, setState] = React.useState(currency);
  const handleChange = (e) => {
    const click = `${e.target.value}`;
    handleValute(`${click.substring(0, 3)}`);
    setState(e.target.value);
  };

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
              setState("RUB");
            }}
          >
            RUB Российский рубль
          </MenuItem>
          <MenuItem
            value={`USD`}
            onClick={() => {
              setState("USD");
            }}
          >
            USD Американский доллар
          </MenuItem>
          <MenuItem
            value={`EUR`}
            onClick={() => {
              setState("EUR");
            }}
          >
            EUR Евро
          </MenuItem>
          <MenuItem
            value={`YUN`}
            onClick={() => {
              setState("YAN");
            }}
          >
            YUN Юань
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

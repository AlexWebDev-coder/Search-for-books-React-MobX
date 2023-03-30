import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  values: string[];
  inputLabel?: string;
  minWidth?: number;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  disabled?: boolean;
  placeholder?: string;
}

const FormSelect: React.FC<IProps> = (props) => {
  const {
    value,
    onChange,
    values,
    inputLabel,
    minWidth = 120,
    size = "small",
    disabled,
    placeholder,
    variant,
  } = props;

  return (
    <Box sx={{ minWidth }}>
      <FormControl fullWidth>
        <InputLabel>{inputLabel}</InputLabel>
        <Select
          size={size}
          value={value}
          variant={variant}
          disabled={disabled}
          label={inputLabel}
          onChange={onChange}
        >
          {values.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelect;

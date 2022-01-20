import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TypeDrowpDown() {
  const [language, setLanguage] = React.useState("");
  const [cvType, setCvType] = React.useState("");

  return (
    <Box className="d-flex justify-content-between mt-3 mb-5">
      <div className="select-resume-dropdown">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>French</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="select-resume-dropdown">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Cv Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cvType}
            label="Cv Type"
            onChange={(e) => setCvType(e.target.value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}

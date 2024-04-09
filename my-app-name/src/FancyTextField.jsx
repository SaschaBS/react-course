import { TextField } from '@mui/material';
import React, { useState } from 'react';

const FancyTextField = ({ label, limit = 5 }) => {
  const [charCount, setCharCount] = useState(0);

  const onChange = (event) => {
    let length = event.target.value.length;
    setCharCount(length);
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      helperText={`${charCount}/${limit}`}
      inputProps={{ maxlength: limit, 'data-cy': 'fancy' }}
      onChange={onChange}
    ></TextField>
  );
};
export default FancyTextField;

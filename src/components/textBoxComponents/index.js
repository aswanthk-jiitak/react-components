import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldComponent = ({
    label,
    variant = "outlined",
    type = "text",
    multiline = false,
    rows = 1,
    fullWidth = true,
    value,
    onChange,
    size = "medium",
    sx = {}
}) => {
    return (
        <TextField
            label={label}
            variant={variant}
            type={type}
            multiline={multiline}
            rows={multiline ? rows : 1}
            fullWidth={fullWidth}
            value={value}
            size={size}
            onChange={onChange}
            sx={sx}
        />
    );
};

export default TextFieldComponent;

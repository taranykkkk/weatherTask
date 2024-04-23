import TextField from '@mui/material/TextField';
import { FC } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<FormInputProps> = ({ label, type, value, handleInput }) => {
  return (
    <TextField
      value={value}
      onChange={handleInput}
      label={label}
      variant="outlined"
      fullWidth
      type={type}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#EC6E4C',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#EC6E4C',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#EC6E4C',
        },
        '& label.Mui-focused': {
          color: '#EC6E4C',
        },
        '& .MuiFormLabel-root': {
          color: '#EC6E4C',
        },
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: '#EC6E4C',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#EC6E4C',
          },
        },
        '& .MuiInputBase-input': {
          color: '#EC6E4C',
        },
      }}
    />
  );
};

export default FormInput;

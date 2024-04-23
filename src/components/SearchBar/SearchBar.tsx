import TextField from '@mui/material/TextField';
import { Dispatch, FC, SetStateAction } from 'react';

interface SearchBarProps {
  inputVal: string;
  label: string;
  width: string;
  setInputVal: Dispatch<SetStateAction<string>>;
}

const SearchBar: FC<SearchBarProps> = ({
  inputVal,
  setInputVal,
  label,
  width,
}) => {
  return (
    <TextField
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
      id="input-with-sx"
      label={label}
      variant="standard"
      InputProps={{
        sx: { color: '#f3f3f3' },
      }}
      sx={{
        '& label.Mui-focused': {
          color: '#f3f3f3',
        },

        '& .MuiInput-underline:after': {
          borderBottomColor: '#f3f3f3',

          '&:hover': {
            color: '#f3f3f3',
          },
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: '#f3f3f3',
        },
        '& .MuiFormLabel-root': {
          color: '#f3f3f3',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: '#f3f3f3',
        },
        width: { width },
      }}
    />
  );
};

export default SearchBar;

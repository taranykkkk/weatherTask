import { useAppDispatch } from '../../hooks/redux-hooks';
import { getDataWeather } from '../../redux/slices/weatherSlice';
import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import LocationCityIcon from '@mui/icons-material/LocationCity';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

function Search() {
  const [inputVal, setInputVal] = useState<string>('');
  const dispatch = useAppDispatch();

  const handelSearch = () => {
    dispatch(getDataWeather(inputVal));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <LocationCityIcon sx={{ color: '#f3f3f3', mr: 0.5, my: 0.5 }} />

      <SearchBar
        inputVal={inputVal}
        setInputVal={setInputVal}
        label={'Write the name of the city'}
        width={'200px'}
      />
      <Link to="/cities">
        <IconButton
          onClick={handelSearch}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ color: '#f3f3f3', padding: '4px', ml: 0.5 }}>
          <SearchIcon />
        </IconButton>
      </Link>
    </Box>
  );
}

export default Search;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Search from '../../components/Search/Search';

import styles from './Title.module.scss';

function Title() {
  return (
    <Box className={styles.title_wrapper}>
      <Box className={styles.title}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ color: '#f3f3f3', fontSize: '50px' }}>
          Welcome to Weather App
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: '#f3f3f3', maxWidth: '600px' }}>
          To use this application, you need to enter the name of the city, and
          then the weather data will appear on the map. You can specify any
          number of cities. Enjoy your use!
        </Typography>

        <Search />
      </Box>
    </Box>
  );
}

export default Title;

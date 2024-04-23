import ThermostatIcon from '@mui/icons-material/Thermostat';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useNavigate, useParams } from 'react-router-dom';
import Description from './components/Description';
import { deleteCity, getDataWeather } from '../../redux/slices/weatherSlice';

function MoreInfo() {
  const { cityId } = useParams();
  const { data } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();
  const cityData = data.find((elem) => elem.id === Number(cityId));
  const navigate = useNavigate();

  const handleDeleteCard = () => {
    dispatch(deleteCity(Number(cityId)));
    navigate('/');
  };
  const handleUpdateCard = () => {
    const city: any = cityData.name;
    dispatch(getDataWeather(city));
  };

  function convertTimezoneToUTC(timezoneOffset: number) {
    const hours = Math.floor(timezoneOffset / 3600);
    if (timezoneOffset < 0) {
      return `${hours}`;
    }
    return `+${hours}`;
  }

  return (
    <Box
      width="100%"
      overflow="auto"
      sx={{
        backgroundColor: '#1976D2',
        borderRadius: '5px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <CardContent sx={{ position: 'relative' }}>
        <Typography
          variant="h2"
          component="div"
          sx={{ color: '#f3f3f3', padding: '15px 0' }}>
          {cityData?.name}
          <span
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              backgroundColor: '#EC6E4C',
              padding: '5px',
              borderRadius: '5px',
              position: 'absolute',
              top: 5,
              right: 5,
            }}>
            {cityData?.sys.country}
          </span>
        </Typography>

        <Typography
          variant="h3"
          component="span"
          sx={{
            color: '#EC6E4C',
            fontSize: '2rem',
          }}>
          UTC {convertTimezoneToUTC(cityData?.timezone)}
        </Typography>

        <Typography
          variant="h3"
          component="div"
          sx={{
            color: '#EC6E4C',
            fontSize: '6rem',
            position: 'relative',
            alignSelf: 'end',
          }}>
          <img
            src={`https://openweathermap.org/img/wn/${cityData?.weather[0].icon}@2x.png`}
            alt=""
            style={{ width: 100 }}
          />
          <Typography
            variant="h3"
            component="span"
            sx={{
              color: '#EC6E4C',
              fontSize: '2rem',
              position: 'absolute',
              top: '80px',
              left: 0,
            }}>
            {cityData?.weather[0].main}
          </Typography>
          <span style={{ paddingLeft: '10px' }}>
            {Math.round(cityData?.main.temp)}
            <sup>
              <ThermostatIcon sx={{ fontSize: 50 }} />
            </sup>
          </span>
        </Typography>
        <Description cityData={cityData} />
      </CardContent>

      <CardActions sx={{ alignSelf: 'end' }}>
        <Button
          size="small"
          color="error"
          sx={{ color: '#f3f3f3' }}
          onClick={handleUpdateCard}>
          Update
        </Button>
        <Button size="small" color="error" onClick={handleDeleteCard}>
          Delete
        </Button>
      </CardActions>
    </Box>
  );
}

export default MoreInfo;

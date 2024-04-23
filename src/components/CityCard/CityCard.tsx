import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { deleteCity } from '../../redux/slices/weatherSlice';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CityCardProps {
  name: string;
  temp: number;
  img: string;
  humidity: string;
  wind: number;
  country: string;
  id: string;
}

const CityCard: FC<CityCardProps> = ({
  name,
  temp,
  img,
  humidity,
  wind,
  country,
  id,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteCard = () => {
    dispatch(deleteCity(id));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ backgroundColor: '#1976d200', margin: '20px 0' }}>
        <CardContent sx={{ position: 'relative' }}>
          <Typography
            variant="h2"
            component="div"
            sx={{ color: '#f3f3f3', padding: '15px 0' }}>
            {name}
            <span
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                backgroundColor: '#EC6E4C',
                padding: '5px',
                borderRadius: '5px',
                // marginLeft: '10px',
                position: 'absolute',
                top: 5,
                right: 5,
              }}>
              {country}
            </span>
          </Typography>
          <img
            src={`https://openweathermap.org/img/wn/${img}@2x.png`}
            alt=""
            style={{ position: 'absolute', right: '10px', top: '70px' }}
          />
          <Typography
            variant="h3"
            component="span"
            sx={{
              position: 'absolute',
              right: '10px',
              top: '135px',
              color: '#EC6E4C',
            }}>
            {Math.round(temp)}
            <sup>
              <DeviceThermostatIcon sx={{ fontSize: 30 }} />
            </sup>
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: '#f3f3f3' }}>
            Humidity <span style={{ color: '#EC6E4C' }}>{humidity}%</span>
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: '#f3f3f3' }}>
            Wind{' '}
            <span style={{ color: '#EC6E4C' }}>{Math.round(wind)} m/s</span>
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-around' }}>
          <Link to={`/${name}/${id}`}>
            {' '}
            <Button size="small" sx={{ color: '#f3f3f3' }}>
              More Info
            </Button>
          </Link>

          <Button size="small" color="error" onClick={handleDeleteCard}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CityCard;

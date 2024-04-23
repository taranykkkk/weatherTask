import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { FC } from 'react';

interface DescriptionProps {
  cityData: any;
}

const Description: FC<DescriptionProps> = ({ cityData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Humidity <span style={{ color: '#EC6E4C' }}>%</span>
            </TableCell>
            <TableCell>
              Wind <span style={{ color: '#EC6E4C' }}> m/s</span>
            </TableCell>
            <TableCell>
              Feel like <span style={{ color: '#EC6E4C' }}>°C</span>
            </TableCell>
            <TableCell>
              Pressure <span style={{ color: '#EC6E4C' }}> mm</span>
            </TableCell>
            <TableCell>
              Max temp <span style={{ color: '#EC6E4C' }}> °C</span>
            </TableCell>
            <TableCell>
              Min temp <span style={{ color: '#EC6E4C' }}> °C</span>
            </TableCell>
            <TableCell>
              Visibility <span style={{ color: '#EC6E4C' }}> km</span>
            </TableCell>
            <TableCell>
              Wind Gust <span style={{ color: '#EC6E4C' }}> m/s</span>
            </TableCell>
            <TableCell>
              Clouds <span style={{ color: '#EC6E4C' }}> %</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{cityData?.main.humidity}</TableCell>
            <TableCell>{cityData?.wind.speed}</TableCell>
            <TableCell>{cityData?.main.feels_like}</TableCell>
            <TableCell>{cityData?.main.pressure}</TableCell>
            <TableCell>{cityData?.main.temp_max}</TableCell>
            <TableCell>{cityData?.main.temp_min}</TableCell>
            <TableCell>{cityData?.visibility}</TableCell>
            <TableCell>{cityData?.wind.gust}</TableCell>
            <TableCell>{cityData?.clouds.all}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Description;

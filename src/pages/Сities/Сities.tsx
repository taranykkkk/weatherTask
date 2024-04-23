import Grid from '@mui/material/Grid';

import CityCard from '../../components/CityCard/CityCard';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { db } from '../../../firebase.config';
import { setDoc, doc, collection } from 'firebase/firestore';
import { useEffect } from 'react';

type CityValue = {
  sys: {
    country: string;
  };
  weather: any;
  main: any;
  id: string;
  name: string;
  img: string;
  temp: number;
  wind: {
    speed: number;
  };
  humidity: string;
};

function Сities() {
  const citiesData = useAppSelector((state) => state.weather.data);
  const { id } = useAuth();

  useEffect(() => {
    const fcFirebase = async () => {
      try {
        const collectionRef = collection(db, 'user');
        const userDocRef = doc(collectionRef, id?.toString());
        await setDoc(userDocRef, { test: citiesData }, { merge: true });
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fcFirebase();
  }, [citiesData]);

  return (
    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {citiesData?.map((city: CityValue) => (
        <CityCard
          key={city.id}
          id={city.id}
          name={city.name}
          country={city.sys.country}
          img={city.weather[0].icon}
          temp={city.main.temp}
          wind={city.wind.speed}
          humidity={city.main.humidity}
        />
      ))}
    </Grid>
  );
}

export default Сities;

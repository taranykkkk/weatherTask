import { Routes, Route } from 'react-router-dom';

import Box from '@mui/material/Box';

import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Cities from '../Сities/Сities';
import { Container } from '@mui/material';
import SingUp from '../SingUp/SingUp';
import Login from '../Login/Login';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../redux/slices/userSlice';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { setDataWeather } from '../../redux/slices/weatherSlice';
import MoreInfo from '../../components/MoreInfo/MoreInfo';

function Home() {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      dispatch(
        setUser({ email: user.email, id: user.uid, token: user.getIdToken() }),
      );
      const userDocRef = doc(db, 'users', user.uid);
      try {
        const userSnapshot = await getDoc(userDocRef);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          dispatch(setDataWeather(userData.test));
        } else {
          console.log('Данные для пользователя с ID', user.uid, 'не найдены.');
        }
      } catch (e) {
        console.error('Ошибка при чтении данных пользователя:', e);
      }
    }
  });
  return (
    <>
      <Box>
        <Header />
        <Container maxWidth="xl" sx={{ height: '100vh' }}>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/register" element={<SingUp />} />
            <Route path="/:cityName/:cityId" element={<MoreInfo />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default Home;

import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form/Form';
import { useState } from 'react';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string>('');

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.getIdToken(),
          }),
        );
        navigate('/');
      })
      .catch(() => setLoginError('Invalid login or password'));
  };

  return (
    <Form
      title={'Login'}
      buttonName={'Login'}
      handleClick={handleLogin}
      error={loginError}
    />
  );
}

export default Login;

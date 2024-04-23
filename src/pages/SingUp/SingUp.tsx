import { useAppDispatch } from '../../hooks/redux-hooks';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/userSlice';

import Form from '../../components/Form/Form';

function SingUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.log);
  };
  return (
    <Form
      title={'Register'}
      buttonName={'Sing Up'}
      handleClick={handleRegister}
    />
  );
}

export default SingUp;

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormInput from '../FormInput/FormInput';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface FormProps {
  title: string;
  buttonName: string;
  handleClick: (email: string, password: string) => void;
  error?: string;
}

const Form: FC<FormProps> = ({ title, buttonName, handleClick, error }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
        height: '100vh',
      }}>
      <Typography
        variant="h4"
        align="center"
        textTransform="uppercase"
        sx={{ color: '#EC6E4C' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormInput
            label={'Email'}
            type={'email'}
            value={email}
            handleInput={handleEmailInput}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            label={'Password'}
            type={'password'}
            value={password}
            handleInput={handlePasswordInput}
          />
        </Grid>
        {title === 'Login' && (
          <Grid item xs={12}>
            <Typography sx={{ color: '#f3f3f3' }}>
              If you are new to us? Please{' '}
              <Link to="/register" style={{ color: '#EC6E4C' }}>
                register
              </Link>
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ bgcolor: '#EC6E4C', '&:hover': { bgcolor: '#EC6E4C' } }}
            fullWidth
            onClick={() => handleClick(email, password)}>
            {buttonName}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ color: 'red', textAlign: 'center' }}>
            {error}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;

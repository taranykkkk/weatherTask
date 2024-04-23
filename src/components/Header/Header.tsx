import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Home from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../redux/slices/userSlice';
import { useState } from 'react';
import UserModal from '../UserModal/UserModal';
import { getAuth } from 'firebase/auth';
import { clearDataWeather } from '../../redux/slices/weatherSlice';

function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(event.currentTarget as unknown as null);
  };

  const handleClose = () => {
    setIsOpen(null);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await auth.signOut();
      dispatch(clearDataWeather());
      dispatch(removeUser());
      setIsOpen(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: '#EC6E4C' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <Home />
            </IconButton>
          </Link>

          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1, color: '#EC6E4C', fontSize: '25px' }}>
            Weather
          </Typography>
          {isAuth ? (
            <UserModal
              isOpen={isOpen}
              handleClose={handleClose}
              handleClick={handleClick}
              handleLogout={handleLogout}
            />
          ) : (
            <Link to="/login">
              <Button sx={{ color: '#EC6E4C', textTransform: 'capitalize' }}>
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;

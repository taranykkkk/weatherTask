import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../hooks/use-auth';
import { Link } from 'react-router-dom';

function UserModal({ isOpen, handleClick, handleClose, handleLogout }) {
  const { email } = useAuth();
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        aria-controls="user-menu"
        aria-haspopup="true"
        sx={{ color: '#EC6E4C' }}
        onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={isOpen}
        open={Boolean(isOpen)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#1976D2',
          },
        }}>
        <MenuItem sx={{ backgroundColor: '#1976D2', color: '#f3f3f3' }}>
          {email}
        </MenuItem>

        <Link to="/cities" style={{ color: '#f3f3f3' }}>
          <MenuItem sx={{ backgroundColor: '#1976D2', color: '#f3f3f3' }}>
            Cities
          </MenuItem>
        </Link>

        <MenuItem
          onClick={handleLogout}
          sx={{ backgroundColor: '#1976D2', color: '#f3f3f3' }}>
          Exit
        </MenuItem>
      </Menu>
    </div>
  );
}

export default UserModal;

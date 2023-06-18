import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../fireBase';

const Header = () => {
  const dispatch = useDispatch();

  const logOutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header-left'>
        <img
          src='https://www.freepnglogos.com/uploads/linkedin-logo-transparent-picture-31.png'
          alt=''
        />
        <div className='header-search'>
          {/* searchicon */}
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOptions Icon={HomeIcon} title={'home'} />
        <HeaderOptions Icon={SupervisorAccountIcon} title={'My Network'} />
        <HeaderOptions Icon={BusinessCenterIcon} title={'Jobs'} />
        <HeaderOptions Icon={ChatIcon} title={'Messaging'} />
        <HeaderOptions Icon={NotificationsIcon} title={'Notifications'} />
        <HeaderOptions avatar={true} title={'me'} onClick={logOutApp} />
      </div>
    </div>
  );
};

export default Header;

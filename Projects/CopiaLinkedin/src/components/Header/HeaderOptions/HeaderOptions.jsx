import { useSelector } from 'react-redux';
import './HeaderOptions.css';
import Avatar from '@mui/material/Avatar';
import { selectUser } from '../../../features/userSlice';

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='HeaderOptions'>
      {Icon && <Icon className='headerOptions-icon' />}
      {avatar && (
        <Avatar className='headerOptions-icon' src={user?.profileUrl}>
          {user.email[0]}
        </Avatar>
      )}
      <h3 className='headerOptions-title'>{title}</h3>
    </div>
  );
};

export default HeaderOptions;

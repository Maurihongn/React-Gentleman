import './HeaderOptions.css';
import Avatar from '@mui/material/Avatar';

const HeaderOptions = ({ avatar, Icon, title }) => {
  return (
    <div className='HeaderOptions'>
      {Icon && <Icon className='headerOptions-icon' />}
      {avatar && <Avatar className='headerOptions-icon' src={avatar} />}
      <h3 className='headerOptions-title'>{title}</h3>
    </div>
  );
};

export default HeaderOptions;

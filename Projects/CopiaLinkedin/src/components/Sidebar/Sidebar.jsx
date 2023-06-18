import { useSelector } from 'react-redux';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import { selectUser } from '../../features/userSlice';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className='Sidebar-recentItem'>
        <span className='Sidebar-hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className='Sidebar'>
      <div className='Sidebar-top'>
        <img src={user.profileUrl} alt='' />
        <Avatar src={user.profileUrl} className='Sidebar-avatar'>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
      </div>

      <div className='Sidebar-stats'>
        <div className='Sidebar-stat'>
          <p>Who viewed you</p>
          <p className='Sidebar-stat-number'>0</p>
        </div>
        <div className='Sidebar-stat'>
          <p>Views on post</p>
          <p className='Sidebar-stat-number'>0</p>
        </div>
        <div className='Sidebar-stat'></div>
      </div>

      <div className='Sidebar-bottom'>
        <p>Recent</p>

        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
      </div>
    </div>
  );
};

export default Sidebar;

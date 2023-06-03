import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {
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
        <img
          src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_33.jpg'
          alt=''
        />
        <Avatar className='Sidebar-avatar' />
        <h2>Username</h2>
        <p>User information</p>
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

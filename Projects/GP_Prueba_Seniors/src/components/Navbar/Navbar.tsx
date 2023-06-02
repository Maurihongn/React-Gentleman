import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { CustomDialog, FavoriteTable } from '..';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { useSelector } from 'react-redux';
import { Appstore } from '../../redux/store';

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  useSelector((store: Appstore) => store.favorites);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Gentleman Senior Test
          </Typography>
          <Button variant='contained' onClick={handleClick}>
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

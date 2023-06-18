import { useSelector } from 'react-redux';
import './App.css';
import { Feed, Header, Login, Sidebar } from './components';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './fireBase';
import { useDispatch } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      {/* Header */}
      <div className='app'>
        <Header />
        {!user ? (
          <Login />
        ) : (
          <div className='app-body'>
            {/* sidebar */}
            <Sidebar />
            {/* feed */}
            <Feed />
          </div>
        )}
        {/* App Body */}
      </div>

      {/* widgets */}
    </>
  );
}

export default App;

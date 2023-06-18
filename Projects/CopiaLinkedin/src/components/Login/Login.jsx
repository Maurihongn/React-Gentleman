import { useState } from 'react';
import './Login.css';
import { auth } from '../../fireBase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!fullName) {
      return alert('Please enter a fullname');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fullName,
            photoURL: profileUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fullName,
                photoURL: profileUrl,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className='Login'>
      <img
        src='https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png'
        alt=''
      />
      <form>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type='text'
          placeholder='FullName (required if registering)'
        />
        <input
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
          type='text'
          placeholder='Profile pic URL (optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{' '}
        <span className='Login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;

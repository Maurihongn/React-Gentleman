import { useNavigate } from 'react-router-dom';
import { UserKey, createUser, resetUser } from '../../redux/states/user';
import { getMorty } from '../../services';
import { useDispatch } from 'react-redux';
import { PrivateRoutes, PublicRoutes } from '../../models';
import { useEffect } from 'react';
import { clearLocalStorage } from '../../utilities';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Hola este es el login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;

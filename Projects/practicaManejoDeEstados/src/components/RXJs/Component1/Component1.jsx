import { sharingInformationService } from '../../../services/sharing-information.service';
import './Component1.css';

const Component1 = () => {
  const handleClick = (sendInfo) => {
    sharingInformationService.setSubject(sendInfo);
  };
  return (
    <div className='Component1'>
      <h1>Componente 1</h1>

      <button onClick={() => handleClick(true)}>Enviar informacion</button>
      <button onClick={() => handleClick(false)}>NO Enviar informacion</button>
    </div>
  );
};

export default Component1;

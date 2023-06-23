import { useEffect, useState } from 'react';
import './Component2.css';
import { sharingInformationService } from '../../../services/sharing-information.service';

const Component2 = () => {
  const [count, setCount] = useState(0);
  const suscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    suscription$.subscribe((data) => {
      if (data) {
        setCount(count + 1);
      }
    });
  });

  return <div className='Component2'>{count}</div>;
};

export default Component2;

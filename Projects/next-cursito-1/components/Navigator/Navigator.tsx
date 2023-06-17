import { Route } from '@/models';
import Link from 'next/link';

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'row' }}>
      {pathNames.map((pathName) => (
        <Link
          className='bg-fuchsia-500 hover:bg-fuchsia-700'
          key={pathName.path}
          href={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  );
}
export default Navigator;

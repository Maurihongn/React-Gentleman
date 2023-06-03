import './App.css';
import { Feed, Header, Sidebar } from './components';

function App() {
  return (
    <>
      {/* Header */}
      <div className='app'>
        <Header />
        {/* App Body */}
        <div className='app-body'>
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />
        </div>
      </div>

      {/* widgets */}
    </>
  );
}

export default App;

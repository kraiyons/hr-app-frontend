import { Link } from 'react-router-dom';
import './HomePage.css';

function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>HR App</li>
          <li>
            <Link to='/login'>
              <button className='warning'>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Welcome</h1>
      </main>
    </>
  );
}

export default Home;

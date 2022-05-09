import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {/* { width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    :<FaLaptop/>
            }
             */}

      <Link to='/signin'>
        <button type='submit' className='sign-btn'>
          Sign In
        </button>
      </Link>
    </header>
  );
};

export default Header;

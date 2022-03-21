import '../../styles/layout/the-header.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import debounce from '../../helpers/debounce';
import { useSelector, useDispatch } from 'react-redux';

function TheHeader() {
  const { cart, token } = useSelector((store) => store);

  const dispatch = useDispatch();
  const location = useLocation();

  const [yOffset, setYOffset] = useState(0);
  const addBackground = { backgroundColor: '#fff' };
  const removeBackground = { backgroundColor: 'transparent' };

  const styles = {
    backgroundColor: token ? 'rgb(26 18 18 / 83%)' : '#ccc'
  }

  const checkSlide = () => {
    if (window.scrollY > 10) return setYOffset(1);
    return setYOffset(0);
  };

  window.addEventListener('scroll', debounce(checkSlide));

  return (
    <div
      className='header-container'
      style={yOffset !== 0 ? addBackground : removeBackground}
    >
      <div className='header-container__motto' style={styles}>
        <Link to='/auth'>
          <i className='las la-user'></i>
        </Link>
      </div>

      <div className='header-container__logo'>
        <Link to='/'>
          <h2>Octane.</h2>
        </Link>
      </div>

      <div
        className={`header-container__cart ${location.pathname === '/checkout' ? 'hide' : null}`}
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
      >
        <p>Cart({cart.length})</p>
      </div>
    </div>
  );
}

export default TheHeader;

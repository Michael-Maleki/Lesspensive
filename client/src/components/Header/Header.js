import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../Assets/Logo/Lesspensive.png';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div>
        <a name="home"></a>
        <div className='logo'><img className='logo__image' src={logo}></img></div>

        <div className='nav'>
          <Link className='nav__items' to='/'><div className='nav__items'>HOME</div></Link>
          <Link className='nav__items' to='bedrooms'><div className='nav__items'>BEDROOMS</div></Link>
          <Link className='nav__items' to='living-rooms'><div className='nav__items'>LIVING ROOMS</div></Link>
          <Link className='nav__items' to='dining-rooms'><div className='nav__items'>DINING ROOMS</div></Link>
          <Link className='nav__items' to='request'><div className='nav__items'>REQUEST</div></Link>
        </div>

      </div>
    );
  }
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {

  return (
    <>
    <div className='header' >
      <Link className='logo-container' to="/">
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to="/shop">SHOP</Link>
        <Link className='option' to="/shop">CONTACT</Link>
        {
          currentUser ?
            <div className='option' onClick={() => auth.signOut()}>Sign out [{currentUser.displayName}]</div>
            :
            <Link className='option' to='/signIn'>Sign in</Link>
        }
        <CartIcon />
      </div>
      {!hidden ? <CartDropdown /> : null}
      </div >
      <div className="cleaner"> &nbsp;</div>
      </>
  );
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }
)

export default connect(mapStateToProps)(Header);
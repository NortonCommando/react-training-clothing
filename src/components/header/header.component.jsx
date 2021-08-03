import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Cleaner
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">
            SHOP
          </OptionLink>
          <OptionLink to="/shop">
            CONTACT
          </OptionLink>
          {currentUser ? (
            <OptionLink as='div' onClick={() => auth.signOut()}>
              Sign out [{currentUser.displayName}]
            </OptionLink>
          ) : (
            <OptionLink to="/signIn">
              Sign in
            </OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {!hidden ? <CartDropdown /> : null}
      </HeaderContainer>
      <Cleaner> &nbsp;</Cleaner>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)

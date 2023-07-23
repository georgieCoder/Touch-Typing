import React from 'react';
import MyButton from './MyButton';

const MyButtonRed = ({children, ...props}) => {
  return (
    <MyButton {...props} style={{backgroundColor: '#dc3545'}}>
        {children}
    </MyButton>
  )
}

export default MyButtonRed;

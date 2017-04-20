import React from 'react';
import { Button } from 'components/Buttons'

const buttonStyles = {
  display: 'block',
  margin: '10% auto',
  width: '80%',
  textAlign: 'center'
};

const ButtonContainer = (props) => {
  return (
      <div style={buttonStyles}>
        <Button {...props} />
      </div>
  )
}
export default ButtonContainer;

import './textfield.css';
import React from 'react';
import TextField from '@mui/material/TextField';
 
function TextBox(props){
  return( 
  <div className="form">
   <TextField label={props.label} variant="outlined" style={{width:'100%'}} />
  </div>
    );
}
 
export default TextBox;
import { Box, TextField } from '@mui/material';
import React, { FC } from 'react';
import logo from '../../assets/logo.jpg';
import styles from './Signin.module.css';

interface SigninProps {}

const Signin: FC<SigninProps> = () => (
  <div className={styles.Signin}>

    <img src={logo} className="App-logo" alt="logo" />
    <h1>
      Sorare MX Sign in
    </h1>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >

      <div>
          <TextField
            id="filled-email"
            label="Email"
            variant="filled"
            type="email"
          />
        </div>

        <div>
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </div>
      
    </Box>


      
  </div>
);

export default Signin;

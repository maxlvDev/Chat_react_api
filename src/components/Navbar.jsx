import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AUTH_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import {Context} from '../index';
import {useAuthState} from "react-firebase-hooks/auth"



export default function Navbar() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return <AppBar color = {"secondary"} position="static">
  <Toolbar variant = {'dense'}>
    <Grid container justifyContent={"flex-end"}>
      {user ? 
      <Button onClick={()=>{auth.signOut()}} variant = {"outlined"}>Выйти</Button>
      :
      <NavLink to = {AUTH_ROUTE} >
      <Button variant = {"outlined"}>Логин</Button>
      </NavLink>
      }
    </Grid>
   
  </Toolbar>
</AppBar>;
}

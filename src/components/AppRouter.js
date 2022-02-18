import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { AUTH_ROUTE, CHAT_ROUTE } from '../utils/consts';
import Auth from './Auth';
import Chat from './Chat';
import { useContext } from 'react';
import {Context} from '../index';
import {useAuthState} from "react-firebase-hooks/auth"



export default function AppRouter() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  
  
  return user ? 
  (<Routes>
      {privateRoutes.map(({path, Component})=>
      <Route key={path} path = {path} element = {<Component/>}/>
      )}
     <Route
        path="*"
        element={<Navigate to= {CHAT_ROUTE} />}
    />
  </Routes>)
  :
  (<Routes>
    {publicRoutes.map(({path, Component})=>
    <Route key={path} path = {path} element = {<Component/>}/>
    )}
    <Route
        path="*"
        element={<Navigate to={AUTH_ROUTE} />}
    />
    </Routes>)


}

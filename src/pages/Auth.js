import classes from './Auth.module.css';
import React, { useState } from 'react';

import Login from '../components/enroll/Login';
<<<<<<< HEAD


const Auth = (props) => {
=======
import Signup from '../components/enroll/Signup';

const Auth = (props) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const loginModeHandler = () => {
    setIsLoginMode((prev) => !prev);
  };

>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
  // Login 컴포넌트에서 Login 시도했을 때 App.js로 전송
  const userLoginInformation = (userInformation) => {
    const userData = {
      ...userInformation,
      mode: 'LOGIN',
    };

    props.onAuth(userData);
  };

<<<<<<< HEAD
  return (
    <div className={classes.authContainer}>
      <h3 style={{textAlign: 'center', marginBottom: '30px'}}>로그인</h3>
      <Login onInformation={userLoginInformation} />
=======
  // Signup 컴포넌트에서 Signup 시도했을 때 App.js로 전송
  const userSignupInformation = (userInformation) => {
    const userData = {
      ...userInformation,
      mode: 'SIGNUP',
    };

    props.onAuth(userData);
  };

  return (
    <div className={classes.authContainer}>
      {isLoginMode && <Login onModeChange={loginModeHandler} onInformation={userLoginInformation} />}
      {!isLoginMode && <Signup onModeChange={loginModeHandler} onInformation={userSignupInformation} />}
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
    </div>
   
  )
};

export default Auth;
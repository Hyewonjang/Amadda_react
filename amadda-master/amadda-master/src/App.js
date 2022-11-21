import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';
import Events from './pages/Events';

import logoImage from './assets/logo_amadda.png';

import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Product_details from './pages/Product_details';
import Shopping_basket from './pages/Shopping_basket';
import RW_Review from './pages/Rw_review';
import Payment from './pages/Payment';

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  
  // useEffect(() => {

  // }, []);

  const userAuthed = (userInformation) => {
    const userData = {
      ...userInformation
    };

    console.log(userData);

    // Authentication

    // 1. userData.mode === 'LOGIN'
    if(userData.mode === 'LOGIN'){
      localStorage.setItem(userData.userEmail, userData.userPassword);
      setIsAuthed(true);
      setUserDetail(userData);
    };

    // 2. userData.mode === 'SIGNUP'

  };

  const unauthedHandler = () => {
    setIsAuthed(false);
  };

  return(
    <div className='content-container'>
      {!isAuthed &&
      <React.Fragment>
        <Switch>
          <Route path='/' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/' exact>
                <Home authState={isAuthed} />
              </Route>              
            </Navigation>
          </Route>
          
          <Route path='/product-details' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/product-details' exact>
              <Product_details authState={isAuthed} />
              </Route>              
            </Navigation>
          </Route>

          <Route path='/shopping-basket' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/shopping-basket' exact>
              <Shopping_basket authState={isAuthed} />
              </Route>              
            </Navigation>
          </Route>

          <Route path='/rw-review' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/rw-review' exact>
              <RW_Review authState={isAuthed} />
              </Route>              
            </Navigation>
          </Route>

          <Route path='/payment' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/payment' exact>
              <Payment authState={isAuthed} />
              </Route>              
            </Navigation>
          </Route>

          <Route path='/auth'>
            <div className='logo-amadda'>
              <img src={logoImage} className='logoImage' />
              <Auth onAuth={userAuthed} />
            </div>
          </Route>

          <Route path='/events' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Events />
            </Navigation>
          </Route>
        </Switch>

      </React.Fragment>
      }

      {isAuthed &&
      <Navigation logout={unauthedHandler} authState={isAuthed} userDetail={userDetail}>
        <Switch>

          <Route path='/' exact>
            <Home authState={isAuthed} />
          </Route>

          <Route path='/Product-details' exact>
            <Product_details authState={isAuthed} />
          </Route>

          <Route path='/shopping-basket' exact>
            <Shopping_basket authState={isAuthed} />
          </Route>

          <Route path='/payment' exact>
            <Payment authState={isAuthed} />
          </Route>

          <Route path='/rw-review' exact>
              <RW_Review authState={isAuthed} />
          </Route>

          <Route path='/events' exact>
            <Events />
          </Route>
        </Switch>
      </Navigation>
      }
    </div>
  )
}

export default App;

import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';
import Events from './pages/Events';

import logoImage from './assets/logo_amadda.png';

import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import MyPage from './pages/MyPage';

import BasicInfo from './components/myPage/BasicInfo';
import InfoChange from './components/myPage/InfoChange';
import NewMember from './pages/NewMember';

=======

import Product_details from './pages/Product_details';
import Shopping_basket from './pages/Shopping_basket';
import RW_Review from './pages/Rw_review';
import Payment from './pages/Payment';
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  
<<<<<<< HEAD
  useEffect(() => {
    if(localStorage.length > 0){
      setIsAuthed(true);
    }

    // 이 부분 DB로 변경하기...
  }, []);
=======
  // useEffect(() => {

  // }, []);
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393

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
<<<<<<< HEAD
      // 현재는 userData로 userDetail을 업데이트했지만, DB에서 닉네임, 주소 등까지 가져오기...
    };

    // 2. userData.mode === 'SIGNUP'
    if(userData.mode === 'SIGNUP'){
      // DB로 전송
    }
=======
    };

    // 2. userData.mode === 'SIGNUP'

>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
  };

  const unauthedHandler = () => {
    setIsAuthed(false);
<<<<<<< HEAD
    localStorage.clear();
=======
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
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
<<<<<<< HEAD
              </Route>
=======
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
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
            </Navigation>
          </Route>

          <Route path='/auth'>
            <div className='logo-amadda'>
              <img src={logoImage} className='logoImage' />
              <Auth onAuth={userAuthed} />
            </div>
          </Route>

<<<<<<< HEAD
          <Route path='/new-member'>
            <div className='logo-amadda'>
              <img src={logoImage} className='logoImage' />
              <NewMember onAuth={userAuthed} />
            </div>
          </Route>

=======
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
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

<<<<<<< HEAD
          <Route path='/events' exact>
            <Events />
          </Route>

          <Route path='/my-page'>
            <MyPage />
          </Route>

=======
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
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
        </Switch>
      </Navigation>
      }
    </div>
  )
}

export default App;

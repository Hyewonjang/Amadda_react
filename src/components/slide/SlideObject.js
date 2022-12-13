<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
import './SlideObject.css';
import LineIcon from "react-lineicons";

const SlideObject = (props) => {
<<<<<<< HEAD
  return(
    <div>
      <div className='event-box'>
        <div className='event'>
          <div className='event-image'>
            <div className='event-image-text'>{props.onCurrentCategory}1</div>
          </div>
        </div>
        <div className='event'>
          <div className='event-image'>
            <div className='event-image-text'>{props.onCurrentCategory}2</div>
          </div>
        </div>
        <div className='event'>
          <div className='event-image'>
            <div className='event-image-text'>{props.onCurrentCategory}3</div>
          </div>
        </div>
      </div>
      {/* <div className='slide-object'>
        <button className='slide-button'><LineIcon name="chevron-left"></LineIcon></button>
        
        <button className='slide-button'><LineIcon name="chevron-right"></LineIcon></button>
      </div> */}
    </div>
=======
  const [slidePx, setSlidePx] = useState(0);

  return(
    <React.Fragment>
      <div>{props.onCurrentCategory}</div>
      <div className='slide-object'>
        <button className='slide-button'><LineIcon name="chevron-left"></LineIcon></button>
        
        <button className='slide-button'><LineIcon name="chevron-right"></LineIcon></button>
      </div>
    </React.Fragment>
>>>>>>> 383d0978984ac2420961919d398a75ed7c818393
  )
};

export default SlideObject;
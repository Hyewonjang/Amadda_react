import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from '../components/navigation/Footer';
import BreadCrumb from '../components/navigation/BreadCrumb';
import RWR_Frame from '../components/rw_reveiw/Rw_review_frame';
import RWR_Frame_Title from './../components/rw_reveiw/Rw_review_title';
import RWR_Item from './../components/rw_reveiw/Rw_review_item';
import WriteReviewPopup from '../components/popup/WriteReviewPopup';

const RW_Review = (props) => {
  const [wrPopupShow, setWrPopupShow] = useState(0);
  const WRP_show = (show) => {
    setWrPopupShow(show);
  }
  
  return(
    <React.Fragment>
      <React.Fragment>
        <BreadCrumb>
          <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                  <h1 className="page-title" style={{display: "inline-block", marginRight: "10px"}}>구매후기 작성</h1>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                    <li><a href="index.html" style={{textDecorationLine:'none'}}><i class="lni lni-home"></i> 홈 </a></li>
                    <li><a href="mypage.html" style={{textDecorationLine:'none'}}><i class="lni lni-home"></i> 마이페이지 </a></li>
                    <li>구매후기 작성</li>
              </ul>
          </div>
        </BreadCrumb>

        
        <RWR_Frame>
            <RWR_Frame_Title />
            <RWR_Item propFunction = {WRP_show}/>
            <RWR_Item propFunction = {WRP_show}/>
            <button class="review-more" onclick="">더보기</button>
        </RWR_Frame>
                
        {wrPopupShow ? <WriteReviewPopup propFunction = {WRP_show}/> : ""}
        
      </React.Fragment>
      <Footer />
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </React.Fragment>
    
  )
};

export default RW_Review;
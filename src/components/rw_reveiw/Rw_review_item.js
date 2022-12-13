import product_image from '../../assets/images/products/product-9.jpg'

const RWR_Item = (props) => {

    const write_review_popUp_visible = ()=>{
        props.propFunction(1)
    }

    return(
        <div className="single-item">
            <div className="row" style={{paddingTop:'10px', textAlign: 'center'}}>
                <div className="col-lg-2 col-12" style={{paddingLeft:'30px'}}>
                    <div style={{float:'left', textAlign: 'center'}}>
                        <div style={{paddingTop:'28px', fontWeight: '600'}}>oooo-oo-oo</div>
                        <div>(IC12345678)</div>
                    </div>
                </div>
                <div className="col-lg-4 col-12" style={{paddingLeft:'30px'}}>
                    <div style={{float:'left'}}><img src={product_image} style={{width:'100px',height:'100px', marginRight: '15px'}}/></div>
                    <div style={{float:'left', textAlign: 'left'}}>
                        <div style={{paddingTop:'28px', fontWeight: '600'}}>화장품 용기(1묶음당 4병)</div>
                        <div>8000원 </div>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div style={{marginTop:'20px'}}>미작성</div>
                    <button className="rw_review_btn" onClick={()=>write_review_popUp_visible()}>후기작성</button>

                </div>
                <div className="col-lg-3 col-12" style={{paddingTop: '35px'}}>XXXX-XX-XX</div>
            </div>
        </div>
    
//     <div class="single-item">
//     <div class="row" style="padding-top:10px; text-align: center;">
//         <div class="col-lg-2 col-12" style="padding-left:30px;">
//             <div style="float:left; text-align: center;">
//                 <div style="padding-top:28px; font-weight: 600;">xxxx-xx-xx</div>
//                 <div>(DK12345678)</div>
//             </div>
//         </div>
//         <div class="col-lg-4 col-12" style="padding-left:30px;">
//             <div style="float:left"><img src="./assets/images/products/product-10.jpg" style="width:100px;height:100px; margin-right: 15px;"></div>
//             <div style="float:left; text-align: left;">
//                 <div style="padding-top:28px; font-weight: 600;">35온스 세제</div>
//                 <div>10000원</div>
//             </div>
//         </div>
//         <div class="col-lg-3 col-12">
//             <div style="margin-top:20px">작성완료</div>
//             <a class="rw_review_btn" href="">후기확인</a><!--상품의 구매후기 페이지로 이동-->
//             <!-- <button class="rw_review_btn">후기확인</button> -->
//         </div>
//         <div class="col-lg-3 col-12" style="padding-top: 35px;">OOOO-OO-OO</div>
//     </div>
// </div>
       
    );
        

  };
  
  export default RWR_Item;
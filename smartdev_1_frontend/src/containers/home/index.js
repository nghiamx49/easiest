import React, { useEffect } from "react";
import home_img_1 from "../../assests/img/home-img-4.jpg";
import home_img_2 from "../../assests/img/home-img-1.png";
import home_img_3 from "../../assests/img/home-img-2.png";
import home_img_4 from "../../assests/img/home-img-3.png";
import home_search_top_1 from "../../assests/img/searchtop-1.JPG";
import home_search_top_2 from "../../assests/img/searchtop-2.JPG";
import home_search_top_3 from "../../assests/img/searchtop-3.JPG";
import {
  Container,
  DisplayFlex,
  DisplayFlexWrap,
} from "../../assests/common/stylecomon";
import * as HOME from "./style";
import * as LIST from "./contants";
import {
  FcSynchronize,
  FcStumbleupon,
  FcShipped,
  FcNext,
} from "react-icons/fc";
import Endow from "./endown";
import CategoryItem from "./categoryItem";
import FlashSale from "./flashsale";
import ShopSmallItem from "./shopsmall";
import HomeSearch from "./search";
import Product from "../../components/cardProduct";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getProductsRequest } from "../../actions/productAction";

function Home({list,getList}) {
  useEffect(()=>{
    getList()
  },[getList])
  return (
    <div>
      <Container>
        <HOME.HomeSlider>
          <HOME.HomeSliderLeft>
            <img src={home_img_1} alt="" />
          </HOME.HomeSliderLeft>
          <HOME.HomeSliderRight>
            <img src={home_img_2} alt="" />
            <img src={home_img_3} alt="" />
          </HOME.HomeSliderRight>
        </HOME.HomeSlider>
        <DisplayFlex>
          {LIST.listEndow.map((item, index) => (
            <Endow key={index} item={item} />
          ))}
        </DisplayFlex>
      </Container>
      <HOME.HomeBgF5F5F5>
        <Container>
          <HOME.HomeDonateImg>
            <img src={home_img_4} alt="" />
          </HOME.HomeDonateImg>
          <HOME.HomeCategory>
            <HOME.HomeTitle>
              <p>DANH MỤC</p>
            </HOME.HomeTitle>
            <DisplayFlexWrap>
              {LIST.listCategory.map((item, index) => (
                <CategoryItem key={index} item={item} />
              ))}
            </DisplayFlexWrap>
          </HOME.HomeCategory>
          <HOME.HomeFaleSale>
            <HOME.HomeTitle>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png"
                alt=""
              />
            </HOME.HomeTitle>
            <HOME.HomeFaleSaleList>
              {LIST.listFlashSale.map((item, index) => (
                <FlashSale key={index} item={item} />
              ))}
            </HOME.HomeFaleSaleList>
          </HOME.HomeFaleSale>
          <HOME.HomeImgSale>
            <img
              src="https://cf.shopee.vn/file/2519150f4c997665a01472197cbc32f7"
              alt=""
            />
            <img
              src="https://cf.shopee.vn/file/8781d862e458d0c573013a43d307793c"
              alt=""
            />
            <img
              src="https://cf.shopee.vn/file/20109bbe686faeb80e6d4639b620767d"
              alt=""
            />
          </HOME.HomeImgSale>
          <div>
            <HOME.HomeTitle>
              <HOME.HomeShoppeSmallTopLeft>
                <h3>shopee small</h3>
                <p>
                  <span>
                    <FcSynchronize />7 Ngày Miễn Phí Trả Hàng
                  </span>
                  <span>
                    <FcStumbleupon />
                    Hàng Chính Hãng 100%
                  </span>
                  <span>
                    <FcShipped />
                    Miễn Phí Vận Chuyển
                  </span>
                </p>
              </HOME.HomeShoppeSmallTopLeft>
              <HOME.HomeShoppeSmallTopRight>
                <span>
                  xem tất cả <FcNext />
                </span>
              </HOME.HomeShoppeSmallTopRight>
            </HOME.HomeTitle>
            <HOME.HomeShoppeSmallBottom>
              <div>
                <img
                  src="https://cf.shopee.vn/file/3d3c2c1e0331fb9ce7535090cd41a3e0"
                  alt=""
                />
              </div>
              <DisplayFlexWrap>
                {LIST.listShpeeSmall.map((item, index) => (
                  <ShopSmallItem key={index} item={item} />
                ))}
              </DisplayFlexWrap>
            </HOME.HomeShoppeSmallBottom>
          </div>
          <HOME.HomeMargin20>
            <HOME.HomeTitle>
              <HOME.HomeShoppeSmallTopLeft>
                <h3>XU HƯỚNG TÌM KIẾM</h3>
              </HOME.HomeShoppeSmallTopLeft>
              <HOME.HomeShoppeSmallTopRight>
                <span>
                  xem tất cả <FcNext />
                </span>
              </HOME.HomeShoppeSmallTopRight>
            </HOME.HomeTitle>
            <DisplayFlex>
              {LIST.listSearch.map((item, index) => (
                <HomeSearch key={index} item={item} />
              ))}
            </DisplayFlex>
          </HOME.HomeMargin20>
          <HOME.HomeMargin20>
            <HOME.HomeTitle>
              <HOME.HomeShoppeSmallTopLeft>
                <h3>TÌM KIẾM HÀNG ĐẦU</h3>
              </HOME.HomeShoppeSmallTopLeft>
              <HOME.HomeShoppeSmallTopRight>
                <span>
                  xem tất cả <FcNext />
                </span>
              </HOME.HomeShoppeSmallTopRight>
            </HOME.HomeTitle>
            <DisplayFlex>
              <HOME.HomeSearchTopItem>
                <img src={home_search_top_1} alt="" />
                <p>Kẹp tóc phụ kiện tóc</p>
              </HOME.HomeSearchTopItem>
              <HOME.HomeSearchTopItem>
                <img src={home_search_top_2} alt="" />
                <p>áo thun nam</p>
              </HOME.HomeSearchTopItem>
              <HOME.HomeSearchTopItem>
                <img src={home_search_top_3} alt="" />
                <p>quần short thể thao</p>
              </HOME.HomeSearchTopItem>
            </DisplayFlex>
          </HOME.HomeMargin20>
          <div>
            <HOME.HomeTitle>
              <HOME.HomeShoppeSmallTopLeft>
                <h3>Gợi ý hôm nay</h3>
              </HOME.HomeShoppeSmallTopLeft>
              <HOME.HomeShoppeSmallTopRight>
                <span>
                  xem tất cả <FcNext />
                </span>
              </HOME.HomeShoppeSmallTopRight>
            </HOME.HomeTitle>
            <HOME.HomeProductList>
             {
               list.map((item,index) => <Product item={item} key={index}/>)
             }
             {
                 console.log(list)
             }
            </HOME.HomeProductList>
          </div>
        </Container>
      </HOME.HomeBgF5F5F5>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
      list: state.productReducer.allProducts
  }
}
const mapDispatchToProps = (dispatch) =>
  ({getList: () => dispatch(getProductsRequest())})

Home.propTypes = {
  list: PropTypes.array,
  getList: PropTypes.func,
};
export default connect(mapStateToProps,mapDispatchToProps)(Home)

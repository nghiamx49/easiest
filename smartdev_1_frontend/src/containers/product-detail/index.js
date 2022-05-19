import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import StarRatingComponent from "react-star-rating-component";

import ErrorComponent from "../page404/";
import { AiFillStar } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import imgProvider from "../../assests/img/user-default.png";
import Feedback from "./feeback";
import Product from "../../components/cardProduct";
import * as PD from "./style";
import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProductsRequest,
  getProductDetailRequest,
} from "../../actions/productAction";
import { useParams } from "react-router-dom";

import cartService from "../../apiServices/cartService";
import { toast } from "react-toastify";
import { Rating } from "./feeback/style";

const { addToCart } = cartService;

const ProductDetail = ({
  state,
  getProductDetail,
  token,
  isLoggedIn,
  getList,
}) => {
  const imgRef = useRef();
  let { idProduct } = useParams();

  const [product, setProduct] = useState({
    product_id: null,
    quantity_purchased: 1,
  });

  const [error, setError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isNaN(idProduct)) {
      setError(true);
      return;
    } else {
      getProductDetail(idProduct);
      getList({});
    }
  }, [getProductDetail, idProduct]);

  useEffect(() => {
    if (state.product.status === 404) {
      setError(true);
      return;
    }
    setProduct({ ...product, product_id: state.product.id });
  }, [state.product.id, state.product.status]);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      history.push("/login");
    } else {
      let response = await addToCart(product, token);
      if (response.status === 200) {
        history.push("/cart");
      } else {
        return toast(response.message);
      }
    }
  };

  function getNumberRating() {
    return (
      state.product.rating?.reduce((a, b) => a.star + b.star, { star: 0 }) /
      state.product.rating?.length
    );
  }
  // function getNumberRatingChose(star) {
  //   let count = 0;
  //   state.product.rating?.forEach((element) => {
  //     element.star === star && count++;
  //   });
  //   return count;
  // }
  getNumberRating();
  function changeImgShow(imgSrc) {
    console.log(imgSrc);
    imgRef.current.src = imgSrc;
  }

  function increasingAmount(e) {
    setProduct({
      ...product,
      quantity_purchased: (product.quantity_purchased += 1),
    });
  }

  function decreaseAmount(e) {
    if (product.quantity_purchased > 1) {
      setProduct({
        ...product,
        quantity_purchased: (product.quantity_purchased -= 1),
      });
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {error ? (
        <ErrorComponent />
      ) : (
        <PD.Layout>
          <PD.Container01>
            <PD.MainLeft>
              <PD.ImgShow
                ref={imgRef}
                src={
                  state.product.image_sources &&
                  state.product.image_sources[0].image_source
                }
                alt=""
              />
              <PD.ListImgProduct>
                {state.product.image_sources?.map((img, index) => (
                  <img
                    key={index}
                    src={img.image_source}
                    alt=""
                    onClick={() => changeImgShow(img.image_source)}
                  />
                ))}
              </PD.ListImgProduct>
            </PD.MainLeft>
            <PD.MainRight>
              <PD.Title>{state.product.name}</PD.Title>
              <PD.StarCommetAmount>
                <Rating>
                  <PD.AverageStar>
                    {Math.round(
                      state.product.rating?.reduce(
                        (total, item) => total + item.star,
                        0,
                      ) / state.product.rating?.length,
                    ) || 0}
                  </PD.AverageStar>
                  <StarRatingComponent
                    name="star"
                    value={
                      Math.round(
                        state.product.rating?.reduce(
                          (total, item) => total + item.star,
                          0,
                        ) / state.product.rating?.length,
                      ) || 0
                    }
                    renderStarIcon={() => <AiFillStar size="20" />}
                    editing={false}
                    starColor="#EE4D2D"
                  />
                </Rating>
                <PD.StarCommetAmountDiv>
                  <PD.TotalComment>
                    {state.product.rating?.length}
                  </PD.TotalComment>
                  <PD.StarCommetAmountText>Đánh giá</PD.StarCommetAmountText>
                </PD.StarCommetAmountDiv>
                <PD.StarCommetAmountDiv>
                  <PD.TotalSold>{state.product.number_of_sold}</PD.TotalSold>
                  <PD.StarCommetAmountText>Đã bán</PD.StarCommetAmountText>
                </PD.StarCommetAmountDiv>
              </PD.StarCommetAmount>
              <PD.Price>
                {(+state.product.unit_price).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </PD.Price>
              <PD.Delivery>
                <PD.LeftText>Vận chuyển</PD.LeftText>
                <GrDeliver />
                <div>
                  <span>Vận chuyển toàn quốc</span>
                  <PD.FeeDelivery>
                    <span>Phí Vận Chuyển</span>
                    <span>₫20.000</span>
                  </PD.FeeDelivery>
                </div>
              </PD.Delivery>
              <PD.Amount>
                <PD.LeftText>Số lượng</PD.LeftText>
                <PD.PlusAndMinus onClick={decreaseAmount}>
                  <CgMathMinus />
                </PD.PlusAndMinus>
                <PD.NumberBetweenPlusMinus>
                  {product.quantity_purchased}
                </PD.NumberBetweenPlusMinus>
                <PD.PlusAndMinus onClick={increasingAmount}>
                  <CgMathPlus />
                </PD.PlusAndMinus>
              </PD.Amount>
              <PD.CoverButton>
                <PD.AddCartButton onClick={handleAddToCart}>
                  <FaCartPlus /> &nbsp;Thêm vào giỏ hàng
                </PD.AddCartButton>
              </PD.CoverButton>
            </PD.MainRight>
          </PD.Container01>
          <PD.Container02>
            <PD.ShopInforLeft>
              <PD.ImgProvider src={imgProvider} alt="" />
              <PD.CoverNameShop>
                <p>{state.product.provider_name}</p>
              </PD.CoverNameShop>
            </PD.ShopInforLeft>
          </PD.Container02>
          <PD.Container03>
            <PD.Container03Left>
              <PD.Container03LeftTop>
                <PD.ProductDetailContainer03Left>
                  <PD.TextDescriceProduct>
                    Chi tiết sản phẩm
                  </PD.TextDescriceProduct>
                  <label>Danh mục</label>
                  <span>{state.product.category_name}</span>
                </PD.ProductDetailContainer03Left>
                <PD.ProductDescriteContainer03Left>
                  <PD.TextDescriceProduct>
                    Mô tả sản phẩm
                  </PD.TextDescriceProduct>
                  <pre>{state.product.product_description}</pre>
                </PD.ProductDescriteContainer03Left>
              </PD.Container03LeftTop>
              <PD.Container03LeftBottom>
                <PD.TitleComment>Đánh giá sản phẩm</PD.TitleComment>
                <div>
                  <Feedback rating={state.product.rating || []} />
                </div>
              </PD.Container03LeftBottom>
            </PD.Container03Left>
            <PD.Container03Right>
              <PD.TitleProductTopSale>
                Top sản phẩm bán chạy
              </PD.TitleProductTopSale>
              <PD.ProductTopSaleDetailCover>
                {state.allProducts.slice(0, 3).map((item, index) => (
                  <Product key={index} item={item} />
                ))}
              </PD.ProductTopSaleDetailCover>
            </PD.Container03Right>
          </PD.Container03>
        </PD.Layout>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.productReducer,
    token: state.authenticateReducer.token,
    isLoggedIn: state.authenticateReducer.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getList: (data) => dispatch(getProductsRequest(data)),
  getProductDetail: (id) => dispatch(getProductDetailRequest(id)),
});

ProductDetail.propTypes = {
  getList: PropTypes.func,
  getProductDetail: PropTypes.func,
  state: PropTypes.object,
  token: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

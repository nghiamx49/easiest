import React, { useState, useEffect, useCallback } from "react";

import PropTypes from "prop-types";

import { AiFillStar } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";

import userService from "../../apiServices/userService";

import Error from "../../containers/page404/";
import StarRatingComponent from "react-star-rating-component";

import { AiFillShop } from "react-icons/ai";
import ProfileSideBar from "../../components/slidebarOfProfile/";
import {
  Container,
  MainContent,
  UserInfoContainer,
  OrderDetailContainer,
  StoreContainer,
  HrCustom,
  ProductDetail,
  ProductName,
  Price,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModelHeader,
  CloseButton,
  RatingContainer,
  TextArea,
} from "./style";
import { connect } from "react-redux";
import { toast } from "react-toastify";
const OrderDetail = ({ token }) => {
  const [orderDetail, setOrderDetail] = useState({});

  const [error, setError] = useState(false);

  const { getOrderDetail, submitFeedback } = userService;

  const [toggle, SetToggle] = useState(false);

  const { id } = useParams();

  const history = useHistory();

  const [feedback, setFeedback] = useState({
    product_id: null,
    star: 5,
    comment: "",
  });

  const setProductId = useCallback((id) => {
    return setFeedback({ ...feedback, product_id: id });
  }, []);

  useEffect(() => {
    const getDetail = async () => {
      const response = await getOrderDetail(id, token);
      if (response.status === 200) {
        setOrderDetail(response.data);
        setProductId(response.data.product_id);
      } else {
        setError(true);
      }
    };
    getDetail();
  }, [token, getOrderDetail, id, setProductId]);

  const formartPhoneNumber = (phone_number) => {
    if (phone_number) {
      let splitDown = phone_number.split("");
      splitDown.splice(0, 1, "(+84) ");
      return splitDown.join("");
    }
  };

  const handleModal = () => {
    SetToggle(!toggle);
  };

  const onStarClick = (nextValue, preValue, name) => {
    setFeedback({ ...feedback, star: nextValue });
  };

  const handleTextChange = (e) => {
    setFeedback({ ...feedback, comment: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.comment === "") {
      return toast("Comment không được để trống");
    }
    const request = await submitFeedback(feedback, token);
    if (request.status === 200) {
      SetToggle(false);
    }
    return toast(request.message);
  };

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <Container>
          <ProfileSideBar />
          <MainContent>
            <UserInfoContainer>
              <h2>Địa Chỉ nhận hàng</h2>
              <div>
                <h4>{orderDetail.user_full_name}</h4>
                <p>{formartPhoneNumber(orderDetail.phone_number)}</p>
                <p>{orderDetail.address}</p>
              </div>
            </UserInfoContainer>
            <HrCustom />
            <OrderDetailContainer
              onClick={() =>
                history.push(`/product-detail/${orderDetail.product_id}`)
              }
            >
              <StoreContainer>
                <AiFillShop />
                <b>{orderDetail.store_name}</b>
              </StoreContainer>
              <hr />
              <ProductDetail>
                <img src={orderDetail.image_source} alt="" />
                <ul>
                  <li>
                    <ProductName>{orderDetail.product_name}</ProductName>
                  </li>
                  <li>
                    <p>x{orderDetail.quantity_purchased}</p>
                  </li>
                </ul>
                <Price>
                  <span>
                    {(+orderDetail.unit_price).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </Price>
              </ProductDetail>
            </OrderDetailContainer>
            <HrCustom />
            <Table>
              <div>
                <b>Tổng tiền hàng:</b>
                <b>
                  {(
                    +orderDetail.unit_price * orderDetail.quantity_purchased
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </b>
              </div>
              <div>
                <b>Phí vận chuyển:</b>
                <b>
                  {(20000).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </b>
              </div>
              <div>
                <b>Phương thức thanh toán:</b>
                <b>{orderDetail.payment_method}</b>
              </div>
              <div>
                <b>Tổng tiền:</b>
                <b>
                  {(
                    +orderDetail.unit_price * orderDetail.quantity_purchased +
                    20000
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </b>
              </div>
            </Table>
            <Button onClick={handleModal}>Đánh giá sản phẩm</Button>
            <Modal toggle={toggle}>
              <ModalContent>
                <ModelHeader>
                  <CloseButton onClick={handleModal}>&times;</CloseButton>
                  <h2>Đánh giá sản phẩm</h2>
                </ModelHeader>
                <ModalBody>
                  <ProductDetail>
                    <img src={orderDetail.image_source} alt="" />
                    <ul>
                      <li>
                        <ProductName>{orderDetail.product_name}</ProductName>
                      </li>
                      <li>
                        <p>x{orderDetail.quantity_purchased}</p>
                      </li>
                    </ul>
                  </ProductDetail>
                  <RatingContainer>
                    <StarRatingComponent
                      name="star"
                      value={feedback.star}
                      onStarClick={onStarClick}
                      renderStarIcon={() => <AiFillStar size="50" />}
                    />
                  </RatingContainer>
                  <TextArea
                    onChange={handleTextChange}
                    defaultValue={feedback.comment}
                    placeholder="Hãy cho chúng tôi biết ý kiến của bạn"
                  ></TextArea>
                </ModalBody>
                <ModalFooter>
                  <button onClick={handleSubmit}>Hoàn tất</button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </MainContent>
        </Container>
      )}
    </>
  );
};

OrderDetail.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    token: state.authenticateReducer.token,
  };
};

export default connect(mapStateToProps)(OrderDetail);

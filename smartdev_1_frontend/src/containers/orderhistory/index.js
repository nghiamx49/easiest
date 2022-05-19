import React, { useEffect, useState } from "react";
import { LayoutOrderHistory, Container, MainHistory } from "./style";
import SlidebarOfProfile from "../../components/slidebarOfProfile";
import OrderHistoryTag from "./orderHistoryTag";

import userSevice from "../../apiServices/userService";
import { connect } from "react-redux";

const { getOrderHistory } = userSevice;

const OrderHistory = ({ token }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const getOrderHistoryList = async () => {
      const response = await getOrderHistory(token);
      const { data } = response;
      setOrderHistory(data);
    };
    getOrderHistoryList();
  }, [token]);

  return (
    <LayoutOrderHistory>
      <Container>
        <SlidebarOfProfile></SlidebarOfProfile>
        <MainHistory>
          {orderHistory.map((orderHistory, index) => (
            <OrderHistoryTag
              key={index}
              orderHistory={orderHistory}
            ></OrderHistoryTag>
          ))}
        </MainHistory>
      </Container>
    </LayoutOrderHistory>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authenticateReducer.token,
  };
};

export default connect(mapStateToProps)(OrderHistory);

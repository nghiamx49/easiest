import React, { useEffect, useState } from "react";
import * as PL from "./style";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductsRequest } from "../../actions/productAction";
import Product from "../../components/cardProduct";
function ProductLanding({ state, getList }) {
  const [page, setPage] = useState(0);
  useEffect(() => {
    getList({ page });
  }, [getList, page]);
  function changePrev() {
    if (page > 0) {
      setPage(page - 1);
      console.log(page - 1);
    }
  }
  function changeNext() {
    if (page >= 0 && page < state.page - 1) {
      setPage(page + 1);
      console.log(page + 1);
    }
  }

  return (
    <div>
      <PL.ProductLandingContainer>
        {state.allProducts?.map((product, index) => (
          <Product key={index} item={product} />
        ))}
      </PL.ProductLandingContainer>
      <PL.ProductPage>
        <span>
          {" "}
          page {page + 1} of {state.page}
        </span>
        <button style={{ margin: "0 10px" }} onClick={changePrev}>
          &laquo;
        </button>
        <button onClick={changeNext}>&raquo;</button>
      </PL.ProductPage>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.productReducer,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getList: (data) => dispatch(getProductsRequest(data)),
});

ProductLanding.propTypes = {
  getList: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductLanding);

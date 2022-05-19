import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listRequest, listRequestProductPending } from "../../../actions/providerAction";
import { MainAdminTable, MainAdminStrong,BtnUpdate } from "../style";


function ProductAllowed({list,getList,token,handle,getListPending,page,pageParent,showProductDetail}) {
  useEffect(()=>{
    window.location.pathname === '/provider' && getList({token:token,page:pageParent})
    window.location.pathname === `/provider/products-request` && getListPending({token:token,page:pageParent})
  },[token,getList,getListPending,pageParent])
  return (
    <MainAdminTable>
      <thead>
        <tr>
          <th>Tên Sản Phẩm</th>
          <th>Nhà cung cấp </th>
          <th>giá sản phẩm</th>
          <th>số lương đã bán</th>
          <th>số lượng </th>
          <th>hình ảnh </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>
              <MainAdminStrong>{item.name}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.provider_name}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{(+item.unit_price).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.number_of_sold}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.product_quantity - item.number_of_sold}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>
                <img
                  height="60px"
                  width="60px"
                  src={item.image_source}
                  alt="dkjfhgkdjfg"
                />
              </MainAdminStrong>
            </td>
            <td>
              <BtnUpdate onClick={()=>handle(item)}>cập nhật</BtnUpdate>
              <BtnUpdate onClick={()=>showProductDetail(item.id)}>chi tiết</BtnUpdate>
            </td>
          </tr>
        ))}
      </tbody>
    </MainAdminTable>
  );
}


const mapStateToProps = (state) => {
  return {
      list: state.providerReducer.listProducts,
      token:state.authenticateReducer.token,
      page:state.providerReducer
  }
}

const mapDispatchToProps = (dispatch) =>
    ({
      getList: (action) => dispatch(listRequest(action)),
      getListPending: action => dispatch(listRequestProductPending(action))
    })
export default connect(mapStateToProps,mapDispatchToProps)(ProductAllowed);

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { listRequest } from "../../../actions/providerAction";
import { MainAdminTable, MainAdminStrong,MainAdminPage,Pagination} from "../style";
import {ContainerProductTotal,ProductTotal} from "./style";
function Total({list,getList,token,page}) {
    const [pageTotal,setPage] = useState(0);
    useEffect(()=>{
        getList({token:token,page:pageTotal})
      },[token,getList,pageTotal])
      console.log(page)
      const countTotal = () =>{
          const sum = list.reduce((total,product)=>{
                const totalProduct = product.number_of_sold * product.unit_price
                console.log(totalProduct)
                total += totalProduct
               return total;
          },0);
          return sum;
      }
      const changePagePrev = () =>{
        if(pageTotal !== 0){
            setPage(pageTotal - 1)
        }
      }
      const changePageNext = () =>{
        if(pageTotal < page -1){
            setPage(pageTotal + 1)
        }
      }
      return (
        <ContainerProductTotal>
            <ProductTotal>
                tổng doanh thu tất cả sản phẩm : {countTotal().toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
            </ProductTotal>
        <div style={{height:"500px",overflow:"auto",border:"1px solid gray",borderRadius:"4px"}}>
        <MainAdminTable>
          <thead>
            <tr>
              <th>Tên Sản Phẩm</th>
              <th>giá sản phẩm</th>
              <th>số lương đã bán</th>
              <th>số lượng </th>
              <th>tổng tiền </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td style={{paddingTop:"15px",width:"250px"}}>
                  <MainAdminStrong>{item.name}</MainAdminStrong>
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
                  <MainAdminStrong>{(+(item.number_of_sold * item.unit_price)).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}</MainAdminStrong>
                </td>
              </tr>
            ))}
          </tbody>
        </MainAdminTable>
        </div>
        <MainAdminPage >
          <Pagination>
            trang  {pageTotal + 1}/ {page }
            <button  onClick={changePagePrev}>&laquo;</button>
            <button  onClick={changePageNext}>&raquo;</button>
          </Pagination>
        </MainAdminPage>
        </ContainerProductTotal>
      );
    }

const mapStateToProps = (state) => {
    return {
        list: state.providerReducer.listProducts,
        token:state.authenticateReducer.token,
        page:state.providerReducer.totalPage
    }
  }
  const mapDispatchToProps = (dispatch) =>
  ({
    getList: (action) => dispatch(listRequest(action)),
  
  })
export default connect(mapStateToProps,mapDispatchToProps)(Total);

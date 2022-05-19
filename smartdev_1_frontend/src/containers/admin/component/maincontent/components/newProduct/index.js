import React, { useEffect, useState } from 'react'
import PropsTypes from "prop-types";
import {GrPrevious , GrNext} from "react-icons/gr"
import {
    MainAdminContent,
    MainAdminAllUser,
    MainAdmintextfunction,
    MainAdminTable,
    MainAdminStrong,
    MainAdminFlex,
    MainAdminPage,
    ButtonApprove,
    ButtonBan,
    ContainerTable,
    ContainerSearch
  } from "../../style";
import {
  AiOutlineSortDescending,
  AiOutlineSearch
} from "react-icons/ai";
import * as all from '../../../../../../actions/adminAction'
import { connect } from 'react-redux';
import { apiClientPatch } from '../../../../../../apiServices/axiosAdmin';
import { toast } from 'react-toastify';

function NewProduct({products, pagesProduct, token,getAllProductPending ,search ,sort}) {

  const [page, setPage] = useState(0)
  const [searchValue, setSearchValue] = useState("")
  
  function getData(page) {
    getAllProductPending("Pending",token , page);
    setPage(page)
  }
  useEffect(() => {
    function getDataEff() {
      getAllProductPending("Pending",token , 0);
      setPage(0)
    }
    getDataEff(0)
  }, [getAllProductPending,token])

  function handlePage (status) {
    if(status === "next"){
      getData(page+1)
      setPage(page+1)
    }else{
      getData(page-1)
      setPage(page-1)
    }
  }

  async function handleStatusProduct (id , status) {
    const result = await apiClientPatch("/admin/product_requests/update_status" , token , id , status);
    toast(<h3 color="black">{result.data.message}</h3>);
    getData(page)
  }

  function handleSearch(e){
    e.preventDefault();
    search("Pending" , token , searchValue)
    setPage(0)
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>Sản Phẩm Mới</h3>
          <MainAdminFlex>
            <ContainerSearch>
              <form onSubmit={handleSearch}>
                  <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Tên Sản Phẩm" value={searchValue}/>
                  <button><AiOutlineSearch/></button>
              </form>
            </ContainerSearch>
            <MainAdmintextfunction>
              <AiOutlineSortDescending /> <button onClick={sort}>Sắp Xếp</button>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
       <ContainerTable>
       <MainAdminTable>
          <thead>
            <tr>
              <th>Tên Sản Phẩm</th>
              <th>Tên Shop</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
          {(products.length !== 0)  ? (products.map((product, item) =>(
            <tr key={item}>
              <td>
                <MainAdminFlex>
                  <img
                    height="30"
                    width="30"
                    src={product.image_source}
                    alt="ảnh"
                  />
                  <MainAdminStrong>{product.name}</MainAdminStrong>
                </MainAdminFlex>
              </td>
              <td>
                <MainAdminStrong>{product.provider_name}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{product.unit_price}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{product.product_quantity}</MainAdminStrong>
              </td>
              <td>
                <ButtonApprove onClick={() => handleStatusProduct( product.id , "Allowed")}>Được Phép</ButtonApprove>
                <ButtonBan  onClick={() => handleStatusProduct( product.id , "Rejected")}>Từ Chối</ButtonBan>
              </td>
            </tr>
          ))) : (
            <tr><td>
              <h3>Không Có Sản Phẩm Mới</h3>
            </td></tr>
          )}
          </tbody>
        </MainAdminTable>
       </ContainerTable>
        <MainAdminPage>
          <span>Trang {page +1}/{pagesProduct}</span>
          <button disabled={page === 0} onClick={() => handlePage("prev")}><GrPrevious/></button>
          <button disabled={page === pagesProduct-1} onClick={() => handlePage("next")}><GrNext/></button>
        </MainAdminPage>
      </MainAdminContent>
    )
}
const mapStateToProps = (state) =>{
  return {
      products : state.adminReducer.allProducts,
      token : state.authenticateReducer.token,
      pagesProduct : state.adminReducer.pagesProducts,
      sortValue : state.adminReducer.sort
  }
}

NewProduct.prototype = {
  pagesProduct : PropsTypes.number,
  products : PropsTypes.array,
  token : PropsTypes.string,
  sortValue : PropsTypes.string,
  getAllProductPending : PropsTypes.func,
  sort : PropsTypes.func,
  search : PropsTypes.func
}

const mapDispatchToProps =  {
  getAllProductPending : all.getAllProduct,
  sort : all.sortProduct,
  search : all.searchProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);

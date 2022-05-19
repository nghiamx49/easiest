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



function Product({products, pagesProduct, token,getAllProduct ,sort, search}) {
  const [page, setPage] = useState(0)
  const [searchValue, setSearchValue] = useState("")

  function getData(page) {
    getAllProduct("Allowed",token , page);
    setPage(page)
  }
  useEffect(() => {
    function getDataEff() {
      getAllProduct("Allowed",token , 0);
      setPage(0)
    }
   getDataEff()
  }, [getAllProduct, token])

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
    let result = await apiClientPatch("/admin/product_requests/update_status" , token , id , status);
    toast(<h3 color="black">{result.data.message}</h3>);
    getData(page)
  }

  function handleSearch(e){
    e.preventDefault();
    search("Allowed" , token , searchValue)
    setPage(0)
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>Tất Cả Sản Phẩm</h3>
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
                <th>Tổng Số Lượng</th>
                <th>Đã Bán</th>
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
                      alt="images"
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
                  <MainAdminStrong>{product.number_of_sold}</MainAdminStrong>
                </td>
                <td>
                  <ButtonBan onClick={() => handleStatusProduct( product.id , "Rejected")}>Từ Chối</ButtonBan>
                </td>
              </tr>
            ))) : (
              <tr><td>
              <h3>Không Có Sản Phẩm</h3>
              </td></tr>
            )}
            </tbody>
          </MainAdminTable>
        </ContainerTable>
        <MainAdminPage>
          <span>Trang {page +1} / {pagesProduct}</span>
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

Product.prototype = {
  products : PropsTypes.array,
  token : PropsTypes.string,
  pagesProduct : PropsTypes.number,
  sortValue : PropsTypes.string,
  getAllProduct : PropsTypes.func,
  search : PropsTypes.func,
  sort : PropsTypes.func
}

const mapDispatchToProps =  {
  getAllProduct : all.getAllProduct,
  search : all.searchProduct,
  sort : all.sortProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

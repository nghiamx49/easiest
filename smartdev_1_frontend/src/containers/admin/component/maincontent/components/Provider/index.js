import React, { useEffect, useState } from 'react'
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
    ContainerTable
  } from "../../style";
import {
  AiOutlineSortDescending,
} from "react-icons/ai";
import { connect } from 'react-redux';
import * as all from '../../../../../../actions/adminAction'
import { apiClientPatch } from '../../../../../../apiServices/axiosAdmin';
import avatar from   "../../../../../../assests/img/user-default.png"
import { toast } from 'react-toastify';

function ProviderAdmin({providers , pagesProvider, token,getProvider,sort}) {
  
  const [page, setPage] = useState(0)

  function getData(page) {
    getProvider("Allowed" ,token , page);
    setPage(page)
  }
  useEffect(() => {
    function getDataEff() {
      getProvider("Allowed" ,token , 0);
      setPage(0)
    }
    getDataEff()
  }, [getProvider, token])
  
  function handlePage (status) {
    if(status === "next"){
      getData(page+1)
      setPage(page+1)
    }else{
      getData(page-1)
      setPage(page-1)
    }
  }

  async function handleStatusProvider (id , status) {
    const result = await apiClientPatch("/admin/providers/update_status" , token , id , status);
    toast(<h3 color="black">{result.data.message}</h3>);
    getData(page)
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>Tất Cả Nhà Cung Cấp</h3>
          <MainAdminFlex>
            <MainAdmintextfunction>
              <AiOutlineSortDescending />  <button onClick={sort}>Sắp Xếp </button>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
        <ContainerTable>
        <MainAdminTable>
          <thead>
            <tr>
              <th>Tên Đăng Nhập</th>
              <th>Địa Chỉ</th>
              <th>Tên Shop</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Ngày Tạo</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {(providers.length !== 0)  ? (providers.map((provider , item) =>(
            <tr key = {item}>
              <td>
                <MainAdminFlex>
                  <img
                    height="30"
                    width="30"
                    src={provider.avatar_source ? provider.avatar_source :avatar }
                    alt="dfkjghdfg"
                  />
                  <MainAdminStrong>{provider.username}</MainAdminStrong>
                </MainAdminFlex>
              </td>
              <td>
                <MainAdminStrong>{provider.address}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.store_name}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.email}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.phone_number}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.create_at}</MainAdminStrong>
              </td>
              <td>
              <ButtonBan onClick={() => handleStatusProvider( provider.id , "Rejected")}>Từ Chối</ButtonBan>
              </td>
            </tr>
            ))) : (
              <tr><td>
              <h3>Không Có Nhà Cung Cấp</h3>
              </td></tr>
            )}
          </tbody>
        </MainAdminTable>
        </ContainerTable>
        <MainAdminPage>
          <span>Trang {page +1} / {pagesProvider}</span>
          <button disabled={page === 0} onClick={() => handlePage("prev")}><GrPrevious/></button>
          <button disabled={page === pagesProvider-1} onClick={() => handlePage("next")}><GrNext/></button>
        </MainAdminPage>
      </MainAdminContent>
    )
}

const mapStateToProps = (state) =>{
  return {
      pagesProvider : state.adminReducer.pagesProvider,
      providers : state.adminReducer.allProviders,
      token : state.authenticateReducer.token,
      sortValue : state.adminReducer.sort
  }
}

const mapDispatchToProps =  {
    getProvider : all.getProvider,
    sort : all.sortProvider,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderAdmin);


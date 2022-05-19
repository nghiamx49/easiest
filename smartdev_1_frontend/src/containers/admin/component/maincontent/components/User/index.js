import React, { useEffect, useState } from 'react'
import {GrPrevious , GrNext} from "react-icons/gr"
import {connect} from 'react-redux'
import * as all from '../../../../../../actions/adminAction'
import avatar from   "../../../../../../assests/img/user-default.png"

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
import { apiClientPatchUser } from '../../../../../../apiServices/axiosAdmin';
import { toast } from 'react-toastify'


function UserAdmin({users,pagesUser , token,getUser ,sort}) {

  const [page, setPage] = useState(0)

  function getData(page) {
    getUser("not_ban" ,token , page);
    setPage(page)
  }
  useEffect(() => {
  function getDataEff() {
    getUser("not_ban" ,token , 0);
    setPage(0)
  }
    getDataEff()
  }, [getUser, token])

  function handlePage (status) {
    if(status === "next"){
      getData(page+1)
      setPage(page+1)
    }else{
      getData(page-1)
      setPage(page-1)
    }
  }
  async function handleStatusProvider (id) {
    const result = await apiClientPatchUser(`/admin/users/${id}/ban` , token);
    toast(<h3 color="black">{result.data.message}</h3>);
    getData(page)
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>Tất Cả Người Dùng</h3>
          <MainAdminFlex>
            <MainAdmintextfunction>
              <AiOutlineSortDescending /> <button onClick={sort}>sort</button>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
        <ContainerTable>
        <MainAdminTable>
          <thead>
            <tr>
              <th>Tên Đăng Nhập</th>
              <th>Địa Chỉ</th>
              <th>Tên Người Dùng</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Ban</th>
            </tr>
          </thead>
          <tbody>
            {(users.length !== 0)  ? users.map((user)=>(
               <tr key={user.id}>
               <td>
                 <MainAdminFlex>
                   <img
                     height="30"
                     width="30"
                     src={user.avatar_source ? user.avatar_source : avatar }
                     alt="avatar"
                   />
                   <MainAdminStrong>{user.username}</MainAdminStrong>
                 </MainAdminFlex>
               </td>
               <td>
                 <MainAdminStrong>{user.address}</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>{user.full_name}</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>{user.email}</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>{user.phone_number}</MainAdminStrong>
               </td>
               <td>
                 <ButtonBan  onClick={() => handleStatusProvider( user.id)}>Ban</ButtonBan>
               </td>
             </tr>
            )) : (
              <tr><td>
                  <h3> Không Có Người Dùng</h3>
              </td></tr>
            )}
          </tbody>
        </MainAdminTable>
        </ContainerTable>
        <MainAdminPage>
          <span>Trang {page +1} / {pagesUser}</span>
          <button disabled={page === 0} onClick={() => handlePage("prev")}><GrPrevious/></button>
          <button disabled={page === pagesUser-1} onClick={() => handlePage("next")}><GrNext/></button>
        </MainAdminPage>
      </MainAdminContent>
    )
}

const mapStateToProps = (state) =>{
  return {
      users : state.adminReducer.allUsers,
      token : state.authenticateReducer.token,
      pagesUser : state.adminReducer.pagesUsers,
      sortvalue : state.adminReducer.sort
  }
}

const mapDispatchToProps =  {
  getUser : all.getUser,
  sort : all.sortUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin);

import React, { useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { GrPrevious, GrNext } from "react-icons/gr";

import {
  MainAdminContent,
  MainAdminAllUser,
  MainAdmintextfunction,
  MainAdminTable,
  MainAdminStrong,
  MainAdminFlex,
  MainAdminPage,
  ButtonBan,
  ButtonApprove,
  ContainerTable,
} from "../../style";
import { AiOutlineSortDescending } from "react-icons/ai";
import * as all from "../../../../../../actions/adminAction";
import { connect } from "react-redux";
import avatar from "../../../../../../assests/img/user-default.png";
import { apiClientPatch } from "../../../../../../apiServices/axiosAdmin";
import { toast } from "react-toastify";

function ApproveProvider({
  providers,
  token,
  pagesProvider,
  getProvider,
  sort,
}) {
  const [page, setPage] = useState(0);
  function getData(page) {
    getProvider("Pending", token, page);
    setPage(page);
  }
  useEffect(() => {
    function getDataA(page) {
      getProvider("Pending", token, page);
      setPage(page);
    }
    getDataA(0);
  }, [token, getProvider]);
  function handlePage(status) {
    if (status === "next") {
      getData(page + 1);
      setPage(page + 1);
    } else {
      getData(page - 1);
      setPage(page - 1);
    }
  }
  async function handleStatusProvider(id, status) {
    let result = await apiClientPatch(
      "/admin/providers/update_status",
      token,
      id,
      status,
    );
    toast(<h3 color="black">{result.data.message}</h3>);
    getData(page);
  }
  return (
    <MainAdminContent>
      <MainAdminAllUser>
        <h3>Nhà Cung Cấp Mới</h3>
        <MainAdminFlex>
          <MainAdmintextfunction>
            <AiOutlineSortDescending /> <button onClick={sort}>Sắp Xếp </button>
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
            {providers.length !== 0 ? (
              providers.map((provider) => (
                <tr key={provider.id}>
                  <td>
                    <MainAdminFlex>
                      <img
                        height="30"
                        width="30"
                        src={
                          provider.avatar_source
                            ? provider.avatar_source
                            : avatar
                        }
                        alt="avatar"
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
                    <ButtonApprove
                      onClick={() =>
                        handleStatusProvider(provider.id, "Allowed")
                      }
                    >
                      Được Phép
                    </ButtonApprove>
                    <ButtonBan
                      onClick={() =>
                        handleStatusProvider(provider.id, "Rejected")
                      }
                    >
                      Từ Chối
                    </ButtonBan>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h3>Không Có Nhà Cung Cấp Mới</h3>
                </td>
              </tr>
            )}
          </tbody>
        </MainAdminTable>
      </ContainerTable>
      <MainAdminPage>
        <span>
          Trang {page + 1}/{pagesProvider}
        </span>
        <button disabled={page === 0} onClick={() => handlePage("prev")}>
          <GrPrevious />
        </button>
        <button
          disabled={page === pagesProvider - 1}
          onClick={() => handlePage("next")}
        >
          <GrNext />
        </button>
      </MainAdminPage>
    </MainAdminContent>
  );
}
const mapStateToProps = (state) => {
  return {
    pagesProvider: state.adminReducer.pagesProvider,
    providers: state.adminReducer.allProviders,
    token: state.authenticateReducer.token,
    sortValue: state.adminReducer.sort,
  };
};
ApproveProvider.prototype = {
  pagesProvider: PropsTypes.number,
  providers: PropsTypes.array,
  token: PropsTypes.string,
  sortValue: PropsTypes.string,
  getProvider: PropsTypes.func,
  sort: PropsTypes.func,
};
const mapDispatchToProps = {
  getProvider: all.getProvider,
  sort: all.sortProvider,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveProvider);

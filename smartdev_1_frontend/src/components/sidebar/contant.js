import { GrOverview } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { FaUsers, FaMagento } from "react-icons/fa";
import {MdContacts,  MdSettingsApplications,} from "react-icons/md";


export const listLi = [
    {
      icons: GrOverview,
      text: "Sản phẩm được bán",
      link:"/provider"
    },
    {
      icons: ImUsers,
      text: "thêm sản phẩm mới",
      link:"/provider/products-create"
    },
    {
      icons: FaUsers,
      text: "Sản phẩm đợi xét duyệt",
      link:"/provider/products-request"
    },
    {
      icons: FaUsers,
      text: "doanh thu",
      link:"/provider/products-total"
    },
  ];
  export const listLiAdmin = [
    {
        icons:GrOverview,
        text:"Nhà Cung Cấp Mới",
        link : "/admin"
    },
    {
        icons:FaUsers,
        text:"Nhà Cung Cấp",
        link : "/admin/providers"
    },
    {
        icons:ImUsers,
        text:"Người Dùng",
        link : "/admin/users"
    },
   
    {
        icons:MdContacts,
        text:"Sản Phẩm",
        link : "/admin/products"
    },
    {
        icons:FaMagento,
        text:"Sản Phẩm Mới",
        link : "/admin/new-products"
    },
    {
        icons:MdSettingsApplications,
        text:"Sản Phẩm Bị Từ Chối",
        link : "/admin/products-rejected"
    },
    {
      icons:MdSettingsApplications,
      text:"Nhà Cung Cấp Bị Từ Chối",
      link : "/admin/providers-rejected"
    },
    {
      icons:MdSettingsApplications,
      text:"Người Dùng Bị Ban",
      link : "/admin/users-ban"
    },
    
];

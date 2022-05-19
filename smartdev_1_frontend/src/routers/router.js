import Login from "../containers/login";
import ProviderRegister from "../containers/provider-register/";
import UserRegister from "../containers/user-register/";
import Profile from "../containers/profile";
import Forgotpassword from "../containers/forgotpassword";
import ChangePass from "../containers/change_password";
import ProductDetail from "../containers/product-detail";
import Orderhistory from "../containers/orderhistory";
import OrderDetail from "../containers/order_detail";
import Cart from "../containers/cart";
import LoginLayout from "../components/layout/LoginLayout";
import Layout from "../components/layout/Layout";
import ProviderProductAllowed from "../containers/provider/productallowed";
import Createproduct from "../containers/provider/productcreate";
import Checkout from "../containers/checkout/";
import Page404 from "../containers/page404";
import VerifyOTP from "../containers/verify_otp";
import ResetPassword from "../containers/resetpassword";
import LayoutDashborad from "../components/layout/layoutDashborad";

//component of admin
import Approveproviders from "../containers/admin/component/maincontent/components/approveproviders";
import NewProduct from "../containers/admin/component/maincontent/components/newProduct";
import Product from "../containers/admin/component/maincontent/components/product";
import ProductBan from "../containers/admin/component/maincontent/components/productBan";
import ProviderAdmin from "../containers/admin/component/maincontent/components/Provider";
import User from "../containers/admin/component/maincontent/components/User";
import ProviderRejected from "../containers/admin/component/maincontent/components/ProviderRejected";
import UserBan from "../containers/admin/component/maincontent/components/UserBan";

import Error from "../containers/page404/";

import ProductLanding from "../containers/product-landing";
import Total from "../containers/provider/total";
const routes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/register/provider",
    component: ProviderRegister,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/forgotpassword",
    component: Forgotpassword,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/verify_otp",
    component: VerifyOTP,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/reset_password/:slug",
    component: ResetPassword,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/register/user",
    component: UserRegister,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/admin",
    component: Approveproviders,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/providers",
    component: ProviderAdmin,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/users",
    component: User,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/products",
    component: Product,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/new-products",
    component: NewProduct,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/products-rejected",
    component: ProductBan,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/providers-rejected",
    component: ProviderRejected,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/users-ban",
    component: UserBan,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/provider",
    component: ProviderProductAllowed,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "provider",
  },
  {
    path: "/provider/products-request",
    component: ProviderProductAllowed,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "provider",
  },
  {
    path: "/provider/products-total",
    component: Total,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "provider",
  },
  {
    path: "/provider/products-create",
    component: Createproduct,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "provider",
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/checkout",
    component: Checkout,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/change_pass",
    component: ChangePass,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/order_history",
    component: Orderhistory,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/order_detail/:id",
    component: OrderDetail,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/product-detail/:idProduct",
    component: ProductDetail,
    exact: true,
    layout: Layout,
    isAuthorize: "all",
  },
  {
    path: "/page404",
    component: Page404,
    exact: true,
    layout: Layout,
  },
  {
    path: "/",
    component: ProductLanding,
    exact: true,
    layout: Layout,
    isAuthorize: "all",
  },
  {
    path: "*",
    component: Error,
    exact: true,
    layout: Layout,
    isAuthorize: "all",
  },
];

export default routes;

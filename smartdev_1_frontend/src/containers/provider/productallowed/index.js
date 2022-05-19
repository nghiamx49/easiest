import React, { useRef } from "react";

import { submitLogout } from "../../../actions/authenticateAction";
import * as Main from "../style";
import {AiFillStar
} from "react-icons/ai";
import{TiTick} from "react-icons/ti"
import ProductAllowed from "./productallowed";
import { connect } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  quantity: yup.string().required(),
  descriptionProducts: yup.string().required()
})


function ProviderProductAllowed({ authenticateReducer, logout,token ,menu,page}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [description,setDecription] = useState('')
  const [quantity,setQuantity] = useState('')
  const [showUpdate,setShowUpdate] = useState(false)
  const [showDetail,setShowDetail] = useState(false)
  const [productUpdate,setProductUpdate] = useState({id:0,name:""})
  const [productDetail,setProductDetail] = useState({})
  const [pagePra,setPagePra] = useState(0)
  const [checkCreate,setCheckCreate] = useState(false) 
  const imgRef = useRef()
  const handle = (item) =>{
      console.log(item)
      setShowUpdate(!showUpdate)
      setProductUpdate({...productUpdate,id:item.id,name:item.name});
  }
  
  const onSubmit = async (data) => {
    console.log(data)
    try{
      await axios.put(`${process.env.REACT_APP_API}/provider/update_product`,{
        product_description:data.descriptionProducts,
        quantity:data.quantity,
        id:productUpdate.id
      },{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        validateStatus: function (status) {
          return status < 500;
        },
      });
    }catch(e){
      console.log(e)
    }
    setShowUpdate(false)
    window.location.reload();
  }
  function changeImgShow(imgSrc) {
    console.log(imgSrc);
    imgRef.current.src = imgSrc;
  }
  const showProductDetail = (id) => {
    console.log(id)
    const fetchCategories = async () => {
      try {
        const product = await axios.get(`${process.env.REACT_APP_API}/provider/product_detail/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          validateStatus: function (status) {
            return status < 500;
          },
        })
        setProductDetail(product.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategories()
   setShowDetail(!showUpdate);
  }
  console.log(productDetail)
  const changePagePrev = () =>{
    if(pagePra !== 0){
     setPagePra(pagePra - 1)
    }
  }
  const changePageNext = () =>{
    if(pagePra < page){
      setPagePra(pagePra + 1)
    }
  }
  const handleCheckCreate = () =>{
    setCheckCreate(false);
  }

  return ( 
    <Main.MainAdminContainer>
       {checkCreate && <Main.CreateProductSuccess>
            <div>
                <h3>bạn đã thêm sản phẩm thành công <TiTick/> </h3>
                <span>vui lòng đợi admin xét duyệt</span>
                <strong style={{cursor:"pointer"}} onClick={handleCheckCreate}>x</strong>
            </div>
          </Main.CreateProductSuccess>}
      <Main.MainAdminContent>
        <Main.MainAdminAllUser>
          <h3>Tất cả sản phẩm</h3>
          <Main.MainAdminFlex>
            <Main.MainAdmintextfunction>
            </Main.MainAdmintextfunction>
            <Main.MainAdmintextfunction>
            </Main.MainAdmintextfunction>
          </Main.MainAdminFlex>
        </Main.MainAdminAllUser>
           <Main.ContainerTable>
              <ProductAllowed handle={handle} pageParent={pagePra} showProductDetail={showProductDetail}/>
           </Main.ContainerTable>
        <Main.MainAdminPage>
          <Main.Pagination>
            trang {pagePra +1}/ {page + 1}
            <button onClick={changePagePrev}>&laquo;</button>
            <button onClick={changePageNext}>&raquo;</button>
          </Main.Pagination>
        </Main.MainAdminPage>
      </Main.MainAdminContent>
      <Main.ContainerUpdateForm showUpdate={showUpdate && "flex"} onClick={()=>setShowUpdate(!showUpdate)}>
      </Main.ContainerUpdateForm>
      <Main.UpdateForm showUpdate={showUpdate && "block"}>
          <h3>cập nhập sản phẩm {productUpdate.name}</h3>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Main.InputControls>
              <label>mô tả sản phẩm mới :</label>
              <input {...register('descriptionProducts')} type="text" value={description} onChange={e => setDecription(e.target.value)} />
              {
                errors.descriptionProducts && (
                  <div>
                    {errors.descriptionProducts.message}
                  </div>
                )
              }
            </Main.InputControls>
            <Main.InputControls>
              <label>số lượng sản phẩm mới :</label>
              <input {...register('quantity')} type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
              {
                errors.quantity && (
                  <div>
                    {errors.quantity.message}
                  </div>
                )
              }
            </Main.InputControls>
            <Main.BtnCreate type="submit">update</Main.BtnCreate>
         </form>
      </Main.UpdateForm>
            
      <Main.ContainerProductDetail showDetail={showDetail && "flex"} onClick={()=>setShowDetail(!showDetail)}>
      </Main.ContainerProductDetail>
      <Main.ProductDetail  showDetail={showDetail && "flex"}>
          <Main.ProductDetailImage>
              <div>
                <Main.ProductDetailImageBig>
                    <img ref={imgRef} src={productDetail.image_sources && productDetail.image_sources[0].image_source} alt="" />
                </Main.ProductDetailImageBig>
                <Main.ProductDetailImageSmall>
                  {
                    productDetail.image_sources?.map((img, index) => (
                    <img
                      key={index}
                      src={img.image_source}
                      alt=""
                      onClick={() => changeImgShow(img.image_source)}
                    />
                  ))}
                </Main.ProductDetailImageSmall>
              </div>
          </Main.ProductDetailImage>
          <Main.ProductDetailContent>
              <Main.ProductDetailChil>
                <h3>{productDetail.name}</h3>
                <p>$ {productDetail.unit_price}</p>
                <Main.ProductDetailStar>
                  đánh giá sản phẩm : <AiFillStar/> 
                </Main.ProductDetailStar>
                <p>Số lượng sản phẩm : {productDetail.product_quantity}</p>
                <p>Số lượng sản phẩm đã bán : {productDetail.number_of_sold}</p>
                <p>tên kho sản phẩm : {productDetail.category_name}</p>
                <p>nhà cung cấp : {productDetail.provider_name}</p>
                <p>mô tả sản phẩm : </p>
                <Main.ProductDetailDescription>
                  {productDetail.product_description}
                </Main.ProductDetailDescription>
              </Main.ProductDetailChil>
          </Main.ProductDetailContent>
          <Main.ProductDetailClose onClick={()=>setShowDetail(!showDetail)}>x</Main.ProductDetailClose>
      </Main.ProductDetail>
    </Main.MainAdminContainer>
  );
}
const mapStateToProps = (state) => {
  return { 
    authenticateReducer: state.authenticateReducer,
    token:state.authenticateReducer.token,
    page:state.providerReducer.totalPage
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(submitLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProductAllowed);
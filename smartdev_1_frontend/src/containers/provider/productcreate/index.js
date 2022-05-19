
import React, {  useState} from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { connect } from 'react-redux';
import { storage } from '../../../firebase/config';
import firebase from "firebase/app";
import {InputControls,CreateProductSuccess,ContainerImages,TextAreaContainer,TitleProducts,BtnCreate,InputFile, ContainerInputFile} from "./style"
import { useEffect } from 'react';
import{TiTick} from "react-icons/ti"


const schema = yup.object().shape({
  name: yup.string().required("không được để trống"),
  quantity: yup.string().required("không được để trống"),
  category_id: yup.string().required("không được để trống"),
  unit_price: yup.string().required("không được để trống"),
  product_description: yup.string().required("không được để trống"),
});
  
function Createproduct({token}) {
   const [description,setDecription] = useState('')
  const [quantity,setQuantity] = useState('')
  const [name,setName] = useState('')
  // const [category_id,setCategory_id] = useState('')
  const [price,setPrice] = useState('')
  const [checkCreate,setCheckCreate] = useState(false) 
  const [category,setCategory] = useState([]) 

  const [images, setImages] = useState([]);
  const [downloadURL, setDowloadURL] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
    const onSubmit = async (data) => {
      console.log("create products")
        try{
         let result =  await axios.post(`${process.env.REACT_APP_API}/provider/create_product`,
          {
            name: data.name,
            quantity:data.quantity,
            category_id:data.category_id,
            unit_price:data.unit_price,
            product_description:data.product_description,
            images:downloadURL
          }
        ,{
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            validateStatus: function (status) {
              return status < 500;
            },
          });
          setName('')
          setQuantity('')
          setPrice('')
          setDecription('')
          setDowloadURL([])
          setImages([])
          setCheckCreate(!checkCreate)
          setInterval(function(){ 
             setCheckCreate(false);}
             , 2500);
          return result
        }catch(e){
          console.log(e)
        }
      }
      const handleUpload = (e) => {
        setImages([...e.target.files]);
      };
      useEffect(() => {
        const uploadFIle = () => {
          for(let i =0; i < images.length; i++) {
            const uploadTask = storage
              .ref()
              .child("/images/" + images[i].name)
              .put(images[i]);
            uploadTask.on(
              firebase.storage.TaskEvent.STATE_CHANGED,
              null,
              (error) => {
                throw error;
              },
              async function complete() {
                const url = await uploadTask.snapshot.ref.getDownloadURL();
                setDowloadURL(preState => [...preState, url])
              },
            );
          }
        }
        uploadFIle();
      }, [images])

      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const category = await axios.get(`${process.env.REACT_APP_API}/provider/all_categories`,{
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              validateStatus: function (status) {
                return status < 500;
              },
            })
            console.log(category.data.data);
            setCategory(category.data.data)
          } catch (error) {
            console.error(error);
          }
        }
        fetchCategories();
      },[token])
      const handleCheckCreate = () =>{
        setCheckCreate(!checkCreate);
      }
      console.log(images)

      console.log(downloadURL)


    return (
        <div>
          {checkCreate && <CreateProductSuccess>
            <div>
                <h3>bạn đã thêm sản phẩm thành công <TiTick/> </h3>
                <span>vui lòng đợi admin xét duyệt</span>
                <strong style={{cursor:"pointer"}} onClick={handleCheckCreate}>x</strong>
            </div>
          </CreateProductSuccess>}
          <TitleProducts>Tạo một sản phẩm mới</TitleProducts>
             <div style={{margin:"30px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputControls>
                      <label>tên của sản phẩm :</label>
                      <input {...register('name')} type="text" value={name} onChange={e => setName(e.target.value)} />
                      {
                      errors.name && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.name.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <InputControls >
                      <label>số lượng sản phẩm :</label>
                      <input {...register('quantity')} type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
                      {
                      errors.quantity && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.quantity.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <InputControls >
                      <label>kho sản phẩm :</label>
                      <select {...register('category_id')}>
                        {
                          category.map((item,index) =>  <option key={index} value={item.id}>{item.category_name}</option>)
                        }
                      
                      </select>
                      {
                        errors.category_id && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.category_id.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <InputControls>
                      <label>giá cả của sản phẩm :</label>
                      <input {...register('unit_price')} type="text" value={price} onChange={e => setPrice(e.target.value)} />
                      {
                      errors.unit_price && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.unit_price.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <TextAreaContainer>
                      <label>mô tả sản phẩm :</label>
                      <textarea {...register('product_description')} type="text" value={description} onChange={e => setDecription(e.target.value)} />
                      {
                      errors.product_description && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.product_description.message}
                        </div>
                      )
                    }
                    </TextAreaContainer>
                    <ContainerInputFile>
                        <InputFile 
                        inputTitle="chọn hình ảnh sản phẩm"
                          type="file" 
                          onChange={handleUpload}
                          placeholder="dlfgjdfl"
                          multiple/>
                          <ContainerImages>
                          {downloadURL.length >0 && downloadURL.map((item, index) => {
                            return <img key={index} src={item} width="100" height="100" alt="ádas" />
                          })}
                          </ContainerImages>
                    </ContainerInputFile>
                    <BtnCreate type="submit">tạo sản phẩm mới</BtnCreate>
                </form>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
  return {
    token: state.authenticateReducer.token,
  };
};
export default connect(mapStateToProps)(Createproduct);

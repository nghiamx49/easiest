import React from "react";
import {
  ProductBottom,
  DivProductName,
  ProductImage,
  ProductFavourite,
  NameProduct,
  ProductPrice,
  ProductStyle,
  ProductContainer,
} from "./style";

export default function Product(props) {
  const { item } = props;
  return (
    <ProductContainer to={`/product-detail/${item.id}`}>
      <ProductStyle>
        <ProductImage>
          <img src={item.image_source} alt="" />
        </ProductImage>
        <ProductFavourite>Yêu thích</ProductFavourite>
        <DivProductName>
          <NameProduct>{item.name}</NameProduct>
        </DivProductName>
        <ProductBottom>
          <ProductPrice>
            {(+item.unit_price).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </ProductPrice>
        </ProductBottom>
      </ProductStyle>
    </ProductContainer>
  );
}

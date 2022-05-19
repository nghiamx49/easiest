import React from 'react'
import { FlashSaleStyle,FaleSaleItemDiscount,FaleSaleItemSaled } from './style'

function FlashSale(props) {
    const {item} = props;
    return (
        <FlashSaleStyle>
            <FaleSaleItemDiscount>
                <span>27%</span>
                <span>giảm</span>
            </FaleSaleItemDiscount>
            <img src={item.img} alt="" />
            <p><span>₫</span>{item.text}</p>
            <FaleSaleItemSaled>
                <div></div>
                <span>đã bán 240</span>
            </FaleSaleItemSaled>
        </FlashSaleStyle>
    )
}

export default FlashSale

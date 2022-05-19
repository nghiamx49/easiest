import React from 'react'
import { ShopSmallItemStyle } from './style'

function ShopSmallItem(props) {
    const {item} = props;
    return (
        <ShopSmallItemStyle>
            <img src={item.img}alt="" />
            <p>{item.text}</p>
        </ShopSmallItemStyle>
    )
}

export default ShopSmallItem

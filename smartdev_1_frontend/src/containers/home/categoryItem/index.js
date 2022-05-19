import React from 'react'
import { CategoryItemStyle } from './style';

function CategoryItem(props) {
    const {item} = props;
    return (
        <CategoryItemStyle>
            <img src={item.img} alt="" />
            <p>{item.text}</p>
        </CategoryItemStyle>
    )
}

export default CategoryItem

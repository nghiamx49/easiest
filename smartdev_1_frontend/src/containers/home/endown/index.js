import React from 'react'
import { EndowStyle } from './style';

function Endow(props) {
    const {item} = props;
    return (
        <EndowStyle>
            <img src={item.img} alt="" />
            <p>{item.text}</p>
        </EndowStyle>
    )
}

export default Endow

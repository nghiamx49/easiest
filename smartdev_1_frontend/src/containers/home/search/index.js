import React from 'react'
import { HomeSearchStyle } from './style'

function HomeSearch(props) {
    const {item} = props
    return (
        <HomeSearchStyle>
            <p>
                <span>{item.textTop}</span>
                <span>{item.textBottom}</span>
            </p>
            <img src={item.img} alt="" />
        </HomeSearchStyle>
    )
}

export default HomeSearch

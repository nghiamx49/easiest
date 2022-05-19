import React from 'react'
import SideBar from '../../components/sidebar'
import MainDashborad from '../../components/mainDashborad'
import {LayoutDashboradStyle} from "../../assests/common/stylecomon"

function LayoutDashborad({children}) {
    return (
        <LayoutDashboradStyle>
            <SideBar/>
            <MainDashborad mainContant={children}/>
        </LayoutDashboradStyle>
    )
}

export default LayoutDashborad

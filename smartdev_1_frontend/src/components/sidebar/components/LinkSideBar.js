import React from 'react'
import {SideBarLi} from "./style"
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function LinkSideBar(props) {
    const { Icons, text,link} = props 
    return (
        <SideBarLi>
             {Icons && <Icons/>}<Link to={link}>{text}</Link>
        </SideBarLi>
    )
}
LinkSideBar.propTypes = {
    icons: PropTypes.oneOfType([PropTypes.any]),
    text: PropTypes.string
};
LinkSideBar.defaultProps = {
    icons: null,
    text:'text'
  };

export default LinkSideBar

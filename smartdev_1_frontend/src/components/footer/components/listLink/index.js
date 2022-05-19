import React from 'react'

function ListLink(props) {
    const {name} = props
    return (
        <li>
            <span>{name}</span>
        </li>
    )
}

export default ListLink

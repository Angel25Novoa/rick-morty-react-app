import React from 'react'

const Item = ({id, title, url, image}) => {
  return (
    <li>
        <h3>{title}</h3>
    </li>
  )
}

export default Item
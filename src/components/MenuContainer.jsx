import React from 'react'

const MenuContainer = ({link, icon, content, activeHome}) => {
  return (
    <li className={activeHome ? "active": ""}>
        <a href={link}>
            <span className='icon'>{icon}</span>
            <p>{content}</p>
        </a>
    </li>
  )
}

export default MenuContainer
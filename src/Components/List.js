import React from 'react'
import {CiEdit,CiEraser} from 'react-icons/ci'
const List = ({id,title,removeItem,editItem}) => {
  return (
    <div className='list-item'>
      <p className='title'>{title}</p>
      <div className='btn-container'>
        <CiEdit onClick={()=>editItem(id)}/>
        <CiEraser onClick={()=>removeItem(id)}/>
      </div>
    </div>
  )
}

export default List

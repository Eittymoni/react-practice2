import React from 'react'
import "../work/work.css"



const WorkReusable = ({title, pera, wImg}) => {
  return (
    <div className='workReusable'>
      
     <img src={wImg} />
     <h3>{title}</h3>
      <p> {pera}</p>
  
    </div>
  )
}

export default WorkReusable


import React from 'react'
import "../feature/feature.css"

const FeatureReusable = ({img, title, pera}) => {
  return (
    <div className='feature_card'>
      <img src={img} />
      <h3> {title}</h3>
      <p>{pera}</p>
    </div>
  )
}

export default FeatureReusable

import React from 'react'
import "./Plan.css"

const Plan = ({plan, videoQuality}) => {
  return (
    <div className='planScreen'>
      <div className="plan_info">
        <div className="plan_name">{plan}</div>
        <div className="video_quality">{videoQuality}</div>
      </div>
      <button className="subscribe_button">Subscribe</button>
    </div>
  )
}

export default Plan

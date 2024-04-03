import React from 'react'

function Title({ subtitle, title }) {
  return (
    <div>
      <div id='heading'>
      <h1>{title}</h1>
        <h4>{subtitle}</h4>
      
      </div>
    </div>
  )
}

export default Title
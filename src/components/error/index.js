import React from 'react'
import './styles.css'

const Error = ({data}) => (
  <div className="form-error">
    {data}
  </div>
)

export default Error
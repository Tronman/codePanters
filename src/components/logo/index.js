import React from 'react'
import { motto } from '../../utilities'
import './styles.css'

const Logo = () => (
  <div className="logo">
    <div>
      INSURE<span>REWARDS</span>
    </div>
    <div className="motto">{motto}</div>
  </div>
)

export default Logo
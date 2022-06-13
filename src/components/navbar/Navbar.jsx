import React from 'react'
import './navbar.scss';
function Navbar() {
  return (
    <div>
        <div className="header">
        <div className="header-left">
          <h1>Heart Disease Classification</h1>
        </div>
        <div className="header-right">
          <a href='#'>Github</a>
        </div>
        </div>
    </div>
  )
}

export default Navbar
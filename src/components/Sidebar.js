import React from 'react'
import '../styles/Side.css'

const Sidebar = () => {
  return (
    <div className='container-sidebar'>
        
        <div className='side'> 
        <div>
            <input />
            <button>Search</button>
        </div>
            <img className='img-weather' src={require('../images/LightCloud.png')} alt=""/>            
            <p><span className='grade'> 15</span>  °c</p>
            <p className='clima'>Shower</p>
            <p>Today . Fr 5 Jun</p>
            <p>Ciudad de México</p>
        </div>
        
    </div>
  )  
}

export default Sidebar
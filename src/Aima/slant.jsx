import React from 'react'
import "./slant.css"
import GirlImage from "./Images/girl.png"


export default function slant() {
  return (
    <div className='main'>
    {/* <div className="blank"></div> */}
    <div className='underlying-div'>
      {/* <div><img src={Fx} alt="a" style={{height:"160px",marginTop:"400px"}}/></div> */}
      

      <div className="image"><img src={GirlImage} alt='i' style={{height:"500px" ,margin:"50px"}}/>
     
      </div>
        <div className="card-list">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        </div>
    </div>
    <div className='slant'></div>
    </div>
  )
}

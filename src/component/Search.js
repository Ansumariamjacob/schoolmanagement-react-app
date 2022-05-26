import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    var [admno,setAdmno]=useState("")
    const serData=()=>{
        const data={"admission number":admno}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Admisson Number</label>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={serData} className="btn btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Search
import React, { useState } from 'react'

const Addfaculity = () => {
    var [name,setName]=useState("")
    var [edu,setEdu]=useState("")
    var [mob,setMbno]=useState("")
    var [address,setAddress]=useState("")
    var [pincode,setPincode]=useState("")
    var [dist,setdist]=useState("")
    const subdata=()=>{
        const data={"Name":name,"Education":edu,"Mobile":mob,"Address":address,"pincode":pincode,"District":dist}
        console.log(data)
    }
  return (
    <div>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Education</label></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setEdu(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile number</label></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setMbno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Address</label></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Pincode</label></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setPincode(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">District</label></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setdist(e.target.value)}} type="text" className="form-control"/>
                </div>
                

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subdata} className="btn btn-success">ADD</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addfaculity